const { createLoader } = require("simple-functional-loader");
const rehypePrism = require("@mapbox/rehype-prism");
const visit = require("unist-util-visit");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
};

module.exports = withBundleAnalyzer({
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],

  experimental: {
    modern: true,
  },

  webpack: (config, options) => {
    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: "@mdx-js/loader",
        options: {
          rehypePlugins: [
            rehypePrism,
            () => {
              return (tree) => {
                visit(tree, "element", (node, index, parent) => {
                  let [token, type] = node.properties.className || [];
                  if (token === "token") {
                    node.properties.className = [tokenClassNames[type]];
                  }
                });
              };
            },
          ],
        },
      },
    ];

    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          use: [
            ...mdx,
            createLoader(function (src) {
              const content = [
                "import Post from \"@/components/Post\"",
                "export { getStaticProps } from \"@/lib/getStaticProps\"",
                src,
                "export default Post",
              ].join("\n");

              return content
            }),
          ],
        },
      ],
    });

    return config;
  },
});
