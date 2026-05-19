import { useEffect } from 'react'

/**
 * Sets the document title and meta description for the current page.
 * Reliable across client-side route changes (no dependency on tag ordering).
 */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
