---
title: "Markdoc and Next.js to Build a Git-powered Markdown Blog Part 2"
date: "2024-01-02"
author: "Kathryn Murphy"
authorImage: "/images/blog/profile.png"
image: "/images/blog/6.png"
category: "Developer"
excerpt: "Proven aptitude torate and build strong relationships withoProven aptitude to collaborate and build man strong relationships with custoProven aptitude."
---

In this second part, we dive deeper into advanced Markdoc patterns with Next.js.

## Advanced Markdoc Patterns

### Custom Nodes

Transform standard Markdown elements with custom rendering:

```javascript
const nodes = {
  heading: {
    render: 'Heading',
    attributes: {
      level: { type: Number },
    },
  },
};
```

### Partials and Includes

Reuse content across multiple pages:

```markdoc
{% partial file="shared/footer.md" /%}
```

## Performance Optimization

### Static Generation

Leverage Next.js SSG for optimal performance:

- Pre-render all pages at build time
- Use ISR for frequently updated content
- Implement proper caching strategies

### Image Optimization

Use Next.js Image component with Markdoc:

```markdoc
{% image src="/hero.png" alt="Hero" /%}
```

## SEO Considerations

Generate proper metadata from your Markdoc frontmatter:

- Title and description
- Open Graph tags
- Structured data

## Deployment

Deploy your Markdoc blog to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

## Conclusion

Markdoc's flexibility combined with Next.js creates a powerful content platform.
