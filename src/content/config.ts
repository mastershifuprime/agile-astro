import { defineCollection, z } from 'astro:content';

// Blog collection (existing)
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    date: z.string(),
    author: z.string(),
    authorImage: z.string().optional(),
    category: z.string().optional(),
  }),
});

// Pages collection (about, pricing, solution, contact, careers)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),

    // About page structured data
    mission: z.string().optional(),
    quote: z.string().optional(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    cards: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    features: z.object({
      title: z.string(),
      description: z.string().optional(),
      items: z.array(z.string()),
      image: z.string().optional(),
    }).optional(),
    mission_section: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }).optional(),

    // Pricing page structured data
    plans: z.array(z.object({
      name: z.string(),
      monthly_price: z.number(),
      yearly_price: z.number(),
      description: z.string(),
      popular: z.boolean().default(false),
      features: z.array(z.string()),
    })).optional(),

    // Solution page structured data
    sections: z.array(z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.string()).optional(),
      image: z.string(),
      image_position: z.enum(['left', 'right']).default('right'),
    })).optional(),

    // Careers page structured data
    benefits: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),

    // Team page structured data
    testimonials: z.array(z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
      quote: z.string(),
    })).optional(),
  }),
});

// Sections collection (reusable sections like CTA)
const sections = defineCollection({
  type: 'content',
  schema: z.object({
    enable: z.boolean().default(true),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    button: z.object({
      enable: z.boolean().default(true),
      label: z.string(),
      link: z.string(),
    }).optional(),
  }),
});

// Team members collection
const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    bio: z.string(),
    social: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
    order: z.number().default(0),
  }),
});

// Careers/Jobs collection
const careers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.string(), // Full-time, Part-time, Contract
    experience: z.string(),
    salary: z.string().optional(),
    posted: z.string(),
    draft: z.boolean().default(false),
    // Structured requirements and responsibilities
    requirements: z.array(z.string()).optional(),
    responsibilities: z.array(z.string()).optional(),
    about: z.string().optional(),
  }),
});

// Webinars collection
const webinars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    image: z.string(),
    excerpt: z.string(),
    video_url: z.string().optional(),
    learn_items: z.array(z.string()).optional(),
    speakers: z.array(z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
    })).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Case studies collection
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    logo: z.string(),
    image: z.string(),
    excerpt: z.string(),
    industry: z.string().optional(),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

// Customer stories/testimonials collection
const customers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    company: z.string(),
    logo: z.string().optional(),
    image: z.string().optional(),
    quote: z.string(),
    role: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  pages,
  sections,
  team,
  careers,
  webinars,
  'case-studies': caseStudies,
  customers,
};
