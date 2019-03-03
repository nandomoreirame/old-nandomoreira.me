const rupture = require("rupture")
const { name, version, title, author, description, homepage } = require('./package.json')

module.exports = {
  siteMetadata: {
    name,
    version,
    title,
    altTitle: `${title} | Desenvolvedor front-end e WordPress em Curitiba/PR`,
    homepage,
    description,
    author: `${author.name}`,
    social: {
      twitterHandle: `@${author.twitter}`,
      twitter: `https://twitter.com/${author.twitter}`,
      linkedin: `https://linkedin.com/in/${author.linkedin}`,
      github: `https://www.github.com/${author.github}`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-stylus`,
      options: {
        use: [ rupture() ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `800`, `900`]
          },
          {
            family: `Open+Sans`,
            variants: [`200`, `400`, `700`]
          },
        ],
      },
    },
  ],
}
