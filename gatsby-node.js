const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  for (let index = 0; index <1500; index++) {
    createPage({
      path: `page-${index}`,
      component: path.resolve(`./src/templates/test.jsx`),
    });
  }
};
