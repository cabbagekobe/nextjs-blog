import getAllPosts from "@/lib/getAllPosts";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map((post) => ({
        title: post.module.meta.title,
        link: post.link,
      })),
    },
  };
}
