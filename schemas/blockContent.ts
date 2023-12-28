import {defineType, defineArrayMember, SchemaType} from 'sanity'
import {ImPageBreak} from 'react-icons/im'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BiCode} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
const imageSchema = {
  name: 'image',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

const imageGallerySchema = {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
      validation: (Rule: any) => Rule.required(),
      options: {
        layout: 'grid',
      },
    },
  ],
}
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Code', value: 'code'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      name: 'break',
      icon: ImPageBreak,
      type: 'object',
      title: 'Break',
      fields: [
        {
          name: 'style',
          type: 'string',
          icon: ImPageBreak,
          options: {
            list: ['break'],
          },
        },
      ],
    }),
    defineArrayMember({
      name: 'info',
      icon: AiOutlineInfoCircle,
      type: 'object',
      title: 'Info',
      fields: [
        {
          name: 'text',
          icon: AiOutlineInfoCircle,
          type: 'string',
          description: 'needed if using info element',
        },
      ],
    }),
    defineArrayMember({
      name: 'codeInput',
      type: 'object',
      title: 'Code',
      icon: BiCode,
      fields: [
        {
          name: 'code',
          type: 'text',
          title: 'Code',
          rows: 16,
        },
      ],
    }),
    defineArrayMember({
      name: 'IFrame',
      type: 'object',
      title: 'IFrame',
      icon: CgWebsite,
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      //   fields: [
      //     defineField({
      //       name: 'break',
      //       type: 'string',
      //     }),
      //   ],
    }),
    imageGallerySchema,
  ],
})
