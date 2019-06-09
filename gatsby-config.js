module.exports = {
  siteMetadata: {
    title: `Showfarm`,
    description: `Showfarm hodowla psów`,
    author: `Paweł Klimek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {

        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`,`300`,`400`,`500`,`600`,`700`]
          },
          {
             family: `Raleway`,
           variants: [`200`,`300`,`400`,`500`,`600`,`700`]
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Showfarm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
   {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "NEWS",
        fieldName: "news",
        url: "https://api-euwest.graphcms.com/v1/cjv4zdnu70ehy01ehqt7s9nqw/master",
      },
    }
  ],
};
