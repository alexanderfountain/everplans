// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const path = require("path");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token:
          "skMuTdzYwTzVAG4gs4S9EibHl1HmSUtQqMD5e8QWiKnSxkugqCQB2IUOrRp9pnn6iYvttX6GFqma9vTPl9s9KWyFspQzwIiyrLVXQ9OUlk0nXR85yu9nOqM9vS73niJ8K9SxVNjWWM8PMeNecKiNKjHxLru0Cj762m3qpet1douv35qp6YdV",
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
};
