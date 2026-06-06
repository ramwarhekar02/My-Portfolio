import { useEffect } from 'react'

const useDocumentTitle = (title, description) => {
  useEffect(() => {
    const baseTitle = 'Ram Warhekar — MERN Stack Developer'
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
    const previousTitle = document.title
    document.title = fullTitle

    let descTag = document.querySelector('meta[name="description"]')
    const previousDesc = descTag?.getAttribute('content')

    if (description) {
      if (!descTag) {
        descTag = document.createElement('meta')
        descTag.setAttribute('name', 'description')
        document.head.appendChild(descTag)
      }
      descTag.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (descTag && previousDesc) {
        descTag.setAttribute('content', previousDesc)
      }
    }
  }, [title, description])
}

export default useDocumentTitle
