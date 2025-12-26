export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  posts: BlogPost[];
}

// Import all markdown files from the blog content directory
const blogModules = import.meta.glob('/src/content/blog/**/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

function parseFrontmatter(content: string): { frontmatter: Record<string, string>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterLines = match[1].split('\n');
  const frontmatter: Record<string, string> = {};
  
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body: match[2] };
}

function extractSlugAndCategory(path: string): { slug: string; category: string } {
  // Path format: /src/content/blog/category/slug.md
  const parts = path.replace('/src/content/blog/', '').replace('.md', '').split('/');
  const category = parts[0] || 'general';
  const slug = parts[1] || parts[0];
  return { slug, category };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogModules)) {
    const { slug } = extractSlugAndCategory(path);
    const { frontmatter, body } = parseFrontmatter(content as string);
    
    posts.push({
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || '',
      readTime: frontmatter.readTime || '',
      category: frontmatter.category || 'General',
      image: frontmatter.image || '',
      content: body.trim()
    });
  }

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getPostsByCategory(): BlogCategory[] {
  const posts = getAllPosts();
  const categoryMap = new Map<string, BlogPost[]>();

  for (const post of posts) {
    const existing = categoryMap.get(post.category) || [];
    existing.push(post);
    categoryMap.set(post.category, existing);
  }

  const categories: BlogCategory[] = [];
  for (const [name, categoryPosts] of categoryMap) {
    categories.push({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      posts: categoryPosts
    });
  }

  // Sort categories alphabetically
  return categories.sort((a, b) => a.name.localeCompare(b.name));
}
