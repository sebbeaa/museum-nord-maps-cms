import {defineField, defineType} from 'sanity'
import {MyCustomStringInput} from './custom/sliderInput'

export default defineType({
  name: 'maps',
  title: 'Maps',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mapPoints',
      title: 'Map Points',
      description: 'This is required, is needed to show data on the map!',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          title: 'Map Point',
          name: 'points',
          type: 'reference',
          weak: true,
          to: [{type: 'mapPoint'}],
          options: {
            filter: ({document}) => {
              // Always make sure to check for document properties
              // before attempting to use them
              if (!document.refs) {
                return {
                  filter: 'refs != refs',
                }
              }

              return {
                filter: 'refs != refs',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'mainMenuRef',
      title: 'Main Menu',
      type: 'array',
      description: 'This is optional, shows a menu on the left hand side',
      of: [
        {
          title: 'Menu',
          name: 'mainMenu',
          type: 'reference',
          weak: true,
          to: [{type: 'maps'}],
        },
      ],
    }),
  ],
})
