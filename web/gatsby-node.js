const { getDataSource } = require('./src/data_loader');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const dataSource = await getDataSource();

  createPage({
    path: '/',
    component: require.resolve('./src/templates/single-page.js'),
    context: { dataSource },
  });
};
