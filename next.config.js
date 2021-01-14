const withMDX = require("next-mdx-frontmatter")({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [
    ],
  },
});

const nextConfig = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
