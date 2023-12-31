import {createAuthStore, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './myStructure'
import {defaultDocumentNode} from './src/defaultDocumentNode'
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
export default defineConfig({
  name: 'default',
  title: 'map-temp',

  projectId: 's0874vj3',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      defaultDocumentNode,
    }),
    media(),
    // visionTool(),
    simplerColorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
  auth: createAuthStore({
    redirectOnSingle: false,
    // make `mode` says "replace"
    projectId: 's0874vj3',
    dataset: 'production',
    mode: 'replace',
    providers: [
      {
        name: 'github',
        title: 'GitHub',
        url: 'https://api.sanity.io/v1/auth/login/github',
      },
      {
        name: 'sanity',
        title: 'E-mail / password',
        url: 'https://api.sanity.io/v1/auth/login/sanity',
      },
      /*
      // disable login providers by commenting them out
      {
        name: 'google', 
        title: 'Google', 
        url: 'https://api.sanity.io/v1/auth/login/google'
      },
      
      */
    ],
    loginMethod: 'dual',
  }),
})
