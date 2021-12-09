export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b2684f680b420c7caabb39',
                  title: 'Sanity Studio',
                  name: 'everplans-studio',
                  apiId: 'e492fdfb-3dd2-464c-a671-069bbb9a552c'
                },
                {
                  buildHookId: '61b2684ff4976e0ad7c74ca2',
                  title: 'Blog Website',
                  name: 'everplans',
                  apiId: 'da0b1b54-afe8-4587-bbc3-2f7f8e43ef9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexanderfountain/everplans',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://everplans.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
