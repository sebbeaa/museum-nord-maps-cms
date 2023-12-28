import {defineField, defineType} from 'sanity'
import {geoData} from '../../gaia-maps/src/types/mapPoint'
import {PitchSlider} from './custom/pitchSlider'
import {MyCustomStringInput} from './custom/sliderInput'
import {VerticalSliderInput} from './custom/verticalSlider'
import {LatLonInput} from './custom/latLonPicker'

export default defineType({
  name: 'mapPoint',
  title: 'Map Points',
  type: 'document',
  initialValue: {
    title: 'New map',
  },
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      title: 'Map location',
      name: 'location',
      type: 'object',
      description: 'Add location map will fly to',
      options: {
        collapsed: false,
      },
      fields: [
        // defineField({
        //   title: 'Latitude',
        //   name: 'lat',
        //   type: 'number',
        //   initialValue: 68.70103154190423,
        // }),
        // defineField({
        //   title: 'Longitude',
        //   name: 'lng',
        //   type: 'number',
        //   initialValue: 15.397382820144628,
        // }),
        defineField({
          title: 'Location',
          name: 'center',
          type: 'object',
          fields: [
            defineField({
              title: 'LatitudeTest',
              name: 'lat',
              type: 'number',
              initialValue: 68.70103154190423,
            }),
            defineField({
              title: 'LongitudeTest',
              name: 'lng',
              type: 'number',
              initialValue: 15.397382820144628,
            }),
          ],
          components: {
            input: LatLonInput,
          },
        }),
        defineField({
          title: 'Enable marker on location',
          name: 'enableMarker',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          title: 'Default marker image',
          name: 'defMarkerImage',
          type: 'image',
          hidden: ({document}: any) => document?.location?.enableMarker !== true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Default marker url',
          name: 'defMarkerUrl',
          type: 'string',
          hidden: ({document}: any) => document?.location?.enableMarker !== true,
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          title: 'Map bearing',
          name: 'bearing',
          type: 'number',
          initialValue: 1,
          components: {
            input: MyCustomStringInput,
          },
        }),
        defineField({
          title: 'Map pitch',
          name: 'pitch',
          type: 'number',
          initialValue: 0,
          components: {
            input: PitchSlider,
          },
        }),
        defineField({
          title: 'Map zoom',
          name: 'zoom',
          type: 'number',
          initialValue: 9,
          components: {
            input: VerticalSliderInput,
          },
        }),
      ],
    }),
    defineField({
      title: 'Enable geodata?',
      type: 'boolean',
      name: 'enable',
      initialValue: false,
    }),
    defineField({
      name: 'geoData',
      title: 'Geo data',
      description: 'Optional options',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'geoJson',
          title: 'Geo JSON file',
          type: 'file',
        }),
        defineField({
          name: 'geoUrl',
          title: 'Geo URL',
          description: 'Copy the url from the file above, or use another url',
          type: 'url',
          validation: (Rule) =>
            Rule.custom((fields) => {
              if (fields?.enable) return 'You need this to see you geodata'
              return true
            }),
        }),
        defineField({
          name: 'layerOptions',
          title: 'Layer options',
          type: 'object',

          fields: [
            // defineField({
            //   title: 'Layer style',
            //   name: 'layerStyle',
            //   type: 'string',
            //   initialValue: 'Polygon',

            //   options: {
            //     list: ['Polygon', 'Symbol'],
            //     layout: 'radio',
            //   },
            // }),
            defineField({
              title: 'Polygon style',
              name: 'polygonStyle',
              type: 'object',
              fields: [
                {
                  name: 'polygonOpacity',
                  title: 'Polygon opacity',
                  type: 'number',
                  initialValue: 0.25,
                },
                {
                  name: 'polygonColor',
                  title: 'Polygon color',
                  type: 'simplerColor',
                  initialValue: {
                    value: '#ccc',
                  },
                  options: {
                    collapsed: false,
                  },
                },
                {
                  name: 'polygonLineWidth',
                  title: 'Polygon line width',
                  initialValue: 2,
                  type: 'number',
                },
                {
                  name: 'polygonLineColor',
                  title: 'Polygon line color',
                  type: 'simplerColor',
                  initialValue: {
                    value: '#ccc',
                  },
                  options: {
                    collapsed: false,
                  },
                },
              ],
            }),
            defineField({
              title: 'Marker style',
              name: 'markerStyle',
              type: 'object',
              fields: [
                defineField({
                  name: 'markerImage',
                  title: 'Marker Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'markerImageUrl',
                  title: 'Marker image URL',
                  description: 'Copy the url from the image above, or use another url',
                  type: 'url',
                }),
              ],
            }),
          ],
        }),
      ],
      hidden: ({document}: any) => document?.enable !== true,
    }),
  ],
})
