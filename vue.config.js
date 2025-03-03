const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/construction5/" // Replace with your repository name if deploying to a subdirectory
      : "/",
};
