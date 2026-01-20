import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/omdarshan-4964',
    },
    publisher: {
      '@type': 'Person',
      name: 'Omdarshan Shinde Patil',
      url: 'https://portfolio-omdarshanpatil.vercel.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Omdarshan Shinde Patil Portfolio',
    description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems with 6+ Production Apps and 99.9% Uptime.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Omdarshan Shinde Patil',
      url: 'https://github.com/omdarshan-4964',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Omdarshan Shinde Patil',
    url: 'https://portfolio-omdarshanpatil.vercel.app',
    image: 'https://portfolio-omdarshanpatil.vercel.app/developer-portrait.png',
    sameAs: [
      'https://github.com/omdarshan-4964',
      'https://x.com/Omdarshan_jsx',
      'https://www.linkedin.com/in/omdarshanshindepatil',
    ],
    jobTitle: 'Next.js & AI Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
