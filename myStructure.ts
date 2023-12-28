import {preView} from './src/defaultDocumentNode'
import {TbMap2, TbMapPins, TbMapPin} from 'react-icons/tb'
import auth0 from './src/auth0'
export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // S.listItem()
      //   .title('Blog Posts')
      //   .child(
      //     S.documentTypeList('blogPost')
      //       .title('Blog Posts')
      //       .id('blog-post')
      //       .title('Blog Posts')
      //       .child(S.document().schemaType('blogPost').documentId('blogPost'))
      //   ),
      // S.listItem()
      //   .title('Projects')
      //   .icon(BsCheckSquare)
      //   .child(
      //     S.documentTypeList('projects')
      //       .title('Projects')
      //       // .id('projects')
      //       .title('Projects')
      //       .child(S.document().schemaType('projects'))
      //   ),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'andenes',
            'mapPoint',
            'media.tag',
            'pageSettings',
            'project',
            'blog',
            'about',
            'markers',
            // 'region',
            // 'projects',
            // 'blogPost',
          ].includes(listItem.getId())
      ),
      // S.listItem()
      //   .title('Maps')
      //   .icon(TbMap2)
      //   .child(
      //     S.documentTypeList('region')
      //       .title('Maps')
      //       .child(S.document().id('').schemaType('region').views(preView(S)))
      //   ),
      // S.listItem()
      //   .title('Map Points')
      //   .icon(TbMapPins)
      //   .child(
      //     S.documentTypeList('mapPoint')
      //       .title('Map Points')
      //       .child(S.document().id().schemaType('mapPoint').views(preView(S)))
      //   ),
      // S.listItem()
      //   .title('Markers')
      //   .icon(TbMapPin)
      //   .child(
      //     S.documentTypeList('markers')
      //       .title('Markers')
      //       .child(S.document().id().schemaType('markers'))
      //   ),
      // S.documentListItem().title('Region').icon(TbMap2).schemaType('region'),
      // .views(preView(S))
    ])
