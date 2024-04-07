import type { CollectionEntry } from "astro:content";

const getBooksPostsByYear = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(post => {
    return post.data.tags.includes("books");
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    const aYear = new Date(a.data.pubDatetime ?? a.data.modDatetime).getFullYear();
    const bYear = new Date(b.data.pubDatetime ?? b.data.modDatetime).getFullYear();

    return bYear - aYear;
  });

  return sortedPosts;
};

export default getBooksPostsByYear;
