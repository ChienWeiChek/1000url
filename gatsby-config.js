module.exports = {
  siteMetadata: {
    title: `1000url`,
    siteUrl: `https://asdas:9000`,
  },
  // plugins: [
  //   {
  //     resolve: require.resolve(`../gatsby-plugin-advanced-sitemap`),
  //     options: {
  //       limitPerPage: -1,
  //       query: `{
  //           page2: allSitePage {
  //             edges {
  //               node {
  //                 id
  //                 path
  //               }
  //             }
  //           }
  //           product: allSitePage{
  //             edges {
  //               node {
  //                 id
  //                 path
  //               }
  //             }
  //           }
  //         }`,
  //       mapping: {
  //         page2: {
  //           sitemap: `page2`,
  //           serializer: (edges) => {
  //             return edges.map(({ node }) => {
  //               return {
  //                 node: {
  //                   id: node.id,
  //                   slug: node.path,
  //                 },
  //               };
  //             });
  //           },
  //         },
  //         product: {
  //           sitemap: `product`,
  //           serializer: (edges) => {
  //             return edges.map(({ node }) => {
  //               return {
  //                 node: {
  //                   id: node.id,
  //                   slug: node.path,
  //                 },
  //               };
  //             });
  //           },
  //         },
  //       },
  //     },
  //   },
  // ],
};
