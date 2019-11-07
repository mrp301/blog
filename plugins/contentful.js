const contentful = require('contentful')
export default (context, inject) => {
  const contentfulClient = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.accessToken
  })
  inject('contentful', contentfulClient)
}
