<<<<<<< Updated upstream
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "/kuliner/",
=======
// vue.config.js
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // options...
  publicPath: process.env.NODE_ENV === "production" ? "/kuliner/" : "/",
>>>>>>> Stashed changes
});
