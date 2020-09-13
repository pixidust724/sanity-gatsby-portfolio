export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f5e05113b4b0ea56328ddf4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ebp4ny1m',
                  apiId: '0571b9ec-6070-4004-a7cd-370cdef98eca'
                },
                {
                  buildHookId: '5f5e05111fc05dc773033475',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-b2txjugh',
                  apiId: '2bc93464-5824-45ad-ba59-fc31a645569e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixidust724/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-b2txjugh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
