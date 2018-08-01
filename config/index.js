const {
  homepage,
  description,
  version,
  author
} = require('../package.json')
const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? homepage : 'http://localhost:3000'

module.exports = {
  version,
  isProduction,
  baseUrl,
  baseTitle: 'Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR',
  baseDescription: description,
  baseKeywords: 'front-end, front, wordpress, javascript, html, css, desenvolvedor, curitiba, ux, uxdesigner, designer',
  imageDefault: `${baseUrl}/images/uploads/social.jpg`,
  themeColor: '#3d5a80',
  GaUA: 'UA-52446115-1',
  githubRepo: 'https://github.com/nandomoreirame/nandomoreira.me',
  user: {
    name: author.name,
    url: `${baseUrl}/sobre/`,
    email: author.email,
    phone: author.phone,
    twitter: author.twitter
  }
}
