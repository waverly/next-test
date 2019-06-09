const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["styles"] = path.join(__dirname, "styles");
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["views"] = path.join(__dirname, "views");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    config.resolve.alias["fonts"] = path.join(__dirname, "static/fonts");
    config.resolve.alias["images"] = path.join(__dirname, "static/images");
    return config;
  }
};
