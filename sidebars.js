/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Client',
      link: {type: 'doc', id: 'client/index'},
      items: ['client/setup', 'client/mods', 'client/resource-packs'],
    },
    {
      type: 'category',
      label: 'Server',
      link: {type: 'doc', id: 'server/index'},
      items: ['server/setup', 'server/configuration', 'server/plugins', 'server/performance'],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/index'},
      items: ['reference/commands', 'reference/versions'],
    },
  ],
};

module.exports = sidebars;
