import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'markers',
  title: 'Markers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Marker Location',
      name: 'markerLocation',
      type: 'object',
      fields: [
        defineField({title: 'Latitude', name: 'lat', type: 'number'}),
        defineField({title: 'Longitude', name: 'lng', type: 'number'}),
        defineField({
          title: 'Rotation',
          name: 'rotion',
          type: 'number',
          initialValue: 0,
        }),
      ],
    }),
    defineField({
      name: 'bodyEnabled',
      title: 'Enable marker pop up?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Pop Up',
      type: 'blockContent',
    }),
  ],
})
