import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../../gatsby-config"

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let postURL
    let image =
      config.siteMetadata.siteUrl +
      config.siteMetadata.pathPrefix +
      config.siteMetadata.openGraphImage
    if (postSEO) {
      const postMeta = postNode.frontmatter
      title = postMeta.title
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt
      postURL =
        config.siteMetadata.siteUrl + config.siteMetadata.pathPrefix + postPath
      image = postMeta.open_graph ? postMeta.open_graph : image
    } else {
      title = config.siteMetadata.title
      description = config.siteMetadata.description
    }
    const blogURL =
      config.siteMetadata.siteUrl + config.siteMetadata.pathPrefix
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteMetadata.altTitle
          ? config.siteMetadata.altTitle
          : ""
      }
    ]
    if (postSEO) {
      schemaOrgJSONLD.push([
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteMetadata.altTitle
            ? config.siteMetadata.altTitle
            : '',
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      ])
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <title>{title}</title>

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />

        {postSEO ? <meta property="og:type" content="article" /> : null}

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {config.siteMetadata.fbAdmins ? (
          <meta property="fb:admins" content={config.siteMetadata.fbAdmins} />
        ) : null}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={
            config.siteMetadata.social.twitterHandle
              ? config.siteMetadata.social.twitterHandle
              : ''
          }
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}

export default SEO
