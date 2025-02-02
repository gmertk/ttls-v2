import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: "This Town's Last Stop - Çayyolu Ankara",
    siteTitleAlt:
      "This Town's Last Stop Restoran - Park Caddesi Çayyolu Ankara",
    siteHeadline: `Lezzetli Yemekler ve Gülen Yüzler`,
    siteUrl: `https://www.thistownslaststop.com`,
    siteDescription:
      "Last Stop - Restoran, Gastropub - Park Caddesi, Çayyolu, Ankara",
    siteImage: `/banner.jpg`,
    siteLanguage: `tr`,
    author: `@TTLastStop`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Menü`, slug: `/menu` },
          { name: `Hakkımızda`, slug: `/hakkimizda` },
        ],
        sharp: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`png`],
          placeholder: `dominantColor`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Last Stop",
        short_name: `Last Stop`,
        description: `Last Stop - Restoran - Park Caddesi Çayyolu Ankara`,
        start_url: `/`,
        background_color: `#3b3c4f`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
