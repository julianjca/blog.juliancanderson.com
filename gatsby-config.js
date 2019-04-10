module.exports = {
  siteMetadata: {
    title: `Julian's Blog`,
    author: `Julian Christian Anderson`,
    description: `Everything about my life.`,
    siteUrl: `https://blog.juliancanderson.com`,
    social: {
      twitter: `juliancanderson`,
      instagram: `juliancanderson`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117677209-2`,
      },
    },
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             const siteUrl = site.siteMetadata.siteUrl;
    //             const postText = `
    //             <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at overreacted.io. You can read it online by <a href="${siteUrl +
    //               edge.node.fields.slug}">clicking here</a>.)</div>
    //           `;

    //             let html = edge.node.html;
    //             // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
    //             html = html
    //               .replace(/href="\//g, `href="${siteUrl}/`)
    //               .replace(/src="\//g, `src="${siteUrl}/`)
    //               .replace(/"\/static\//g, `"${siteUrl}/static/`)
    //               .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.spoiler,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': html + postText }],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //               filter: {fields: { langKey: {eq: "en"}}}
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   html
    //                   fields {
    //                     slug
    //                   }
    //                   frontmatter {
    //                     title
    //                     date
    //                     spoiler
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Dan Abramov's Overreacted Blog RSS Feed",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julian's Blog`,
        short_name: `juliancanderson`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#36454F`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
