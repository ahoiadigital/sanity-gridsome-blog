export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e672164d8787ae8e62ee74e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-2znf1qa5',
                  apiId: '3eb633e4-0632-483a-8bcc-9c2d5f3b6898'
                },
                {
                  buildHookId: '5e6721645260b7e23c0ac4b5',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-v8126ify',
                  apiId: '70dac1f3-bfc0-43ea-86a3-640ac39f0d58'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahoiadigital/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-v8126ify.netlify.com', category: 'apps'}
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
