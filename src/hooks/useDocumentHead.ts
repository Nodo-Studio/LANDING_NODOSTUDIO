import { useEffect } from 'react'

interface DocumentHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  canonical?: string
  favicon?: string
}

export const useDocumentHead = (props: DocumentHeadProps): void => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    canonical,
    favicon
  } = props

  useEffect(() => {
    // Title del documento
    if (title) {
      document.title = `${title} | NodoStudio`
    }

    // Meta description
    if (description) {
      updateMetaTag('description', description, 'name')
    }

    // Keywords
    if (keywords) {
      updateMetaTag('keywords', keywords, 'name')
    }

    // Open Graph - con valores seguros
    const finalOgTitle = ogTitle || title
    const finalOgDescription = ogDescription || description

    if (finalOgTitle) {
      updateMetaTag('og:title', finalOgTitle, 'property')
    }
    
    if (finalOgDescription) {
      updateMetaTag('og:description', finalOgDescription, 'property')
    }
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property')
      updateMetaTag('twitter:image', ogImage, 'name')
      updateMetaTag('twitter:card', 'summary_large_image', 'name')
    }

    // Meta tags obligatorios de OG
    updateMetaTag('og:type', ogType, 'property')
    updateMetaTag('og:site_name', 'NodoStudio', 'property')

    // Canonical URL
    if (canonical) {
      updateCanonicalLink(canonical)
    }

    // Favicon dinámico
    if (favicon) {
      updateFavicon(favicon)
    }

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, favicon])
}

// Helper functions (sin cambios)
const updateMetaTag = (
  name: string, 
  content: string, 
  attribute: 'name' | 'property' = 'name'
): void => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

const updateCanonicalLink = (url: string): void => {
  let element = document.querySelector('link[rel="canonical"]')
  
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  
  element.setAttribute('href', url)
}

const updateFavicon = (faviconUrl: string): void => {
  const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
  if (link) {
    link.href = faviconUrl
  }
}
