module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("sortByOrder", (array) => {
    return array.sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
