export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "chat-mockups-for-ui-ux-design",
    title: "How to Create Chat Mockups for UI/UX Design",
    description:
      "Learn how designers use chat mockup tools to prototype messaging interfaces, test conversation flows, and create realistic UI presentations.",
    date: "2026-03-01",
    readTime: "5 min read",
    category: "Design",
  },
  {
    slug: "chat-screenshots-for-social-media",
    title: "Using Chat Screenshots for Social Media Content",
    description:
      "Discover how content creators use chat mockups to create engaging social media posts, memes, and storytelling content.",
    date: "2026-03-01",
    readTime: "4 min read",
    category: "Marketing",
  },
  {
    slug: "chat-mockups-for-education",
    title: "Chat Mockups for Education and Training",
    description:
      "Explore how educators and trainers use chat mockup generators for cyberbullying awareness, digital literacy courses, and communication training.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Education",
  },
];
