import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

const getPreviewUrl: any = (doc: any) => {
  return doc?.slug?.current
    ? `http://localhost:5173/#/${doc.slug.current}/fA9lVHjPKeTogx6PAAD_Y7SsB925GUSkLEANAAEB`
    : `http://localhost:5173/#/`
}

const getProdUrl: any = (doc: any) => {
  return doc?.slug?.current
    ? `http://localhost:5173/#/${doc.slug.current}`
    : `http://localhost:5173/#/`
}

const geoJsonGenerator: any = (doc: any) => {
  return doc?.slug?.current
    ? `http://localhost:5173/#/card/${doc.slug.current}/fA9lVHjPKeTogx6PAAD_Y7SsB925GUSkLEANAAEB`
    : `http://localhost:5173/#/`
}

const options = (func: Function) => {
  return
}

export const preView: any = (S: any) => {
  return [
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument) => getPreviewUrl(doc),
      })
      .title('Preview Map'),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument) => getProdUrl(doc),
      })
      .title('Production Map'),
  ]
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  // const [url, setUrl] = useState('')
  if (schemaType === 'mapPoint') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => geoJsonGenerator(doc),
          showDisplayUrl: false,
          reload: {
            button: false, // default `undefined`
            revision: undefined, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
          },
        })
        .title('Preview Point'),
    ])
  } else if (schemaType === 'maps') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
          showDisplayUrl: false,
          reload: {
            button: false, // default `undefined`
            revision: undefined, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
          },
        })
        .title('Preview Map'),
      S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getProdUrl(doc),
          showDisplayUrl: false,
          reload: {
            button: false, // default `undefined`
            revision: undefined, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
          },
        })
        .title('Production Map'),
    ])
  } else return S.document().views([S.view.form()])
}
