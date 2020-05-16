import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../data/SiteConfig'
import urljoin from 'url-join'

export default function SEO(props) {
    
    const { postNode, postPath, postType, iconNode } = props

    // WebSite type
    const schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          url: config.siteUrl,
          name: config.siteTitle,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        },
      ]
      
    // Posts
    
    if (postType) {
      const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
      let dateModified = postNode.frontmatter.edited ? postNode.frontmatter.edited : postNode.frontmatter.date
      let datePublished = postNode.frontmatter.date
      // let headline = postNode.frontmatter.title + '\n' + postNode.frontmatter.subtitle
      let image
      if (postNode.frontmatter.postImage) {
        image = urljoin(config.siteUrl, postNode.frontmatter.postImage.url.childImageSharp.fixed.src)
      } else {
        image = urljoin(config.siteUrl, iconNode.childImageSharp.fixed.src)
      }
      let postURL = urljoin(config.siteUrl, replacePath(postPath))

      // BreadscrumbList type
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: postNode.frontmatter.title,
                image,
              },
            },
          ],
        },
      )

      // Article type
      if (postType === 'Article') {
        schemaOrgJSONLD.push(
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url: postURL,
            name: postNode.frontmatter.title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
            headline: postNode.frontmatter.title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description: postNode.frontmatter.subtitle,
            dateModified: dateModified,
            datePublished: datePublished,
          },
        )
      }
  
      // HowTo type
      if (postType === 'HowTo') {
        let steps = []
        postNode.frontmatter.steps.forEach(step => steps.push({'@type': 'HowToStep', 'text': step.text}))
        schemaOrgJSONLD.push(
          {
            '@context': 'http://schema.org',
            '@type': 'HowTo',
            url: postURL,
            name: postNode.frontmatter.title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
            headline: postNode.frontmatter.title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description: postNode.frontmatter.subtitle,
            dateModified: dateModified,
            datePublished: datePublished,
            step: steps,
            estimatedCost: 'zero',
            totalTime: 'PT' + postNode.frontmatter.readtime + 'M',
          },
        )
      }
    }

    return(
        <Helmet>
            <html lang="en" />
            <meta name="description" content={postType ? postNode.frontmatter.title + ' - ' + postNode.frontmatter.subtitle : config.siteDescription} />
            <meta name="image" content={urljoin(config.siteUrl, iconNode.childImageSharp.fixed.src)} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
        </Helmet>
    )
}