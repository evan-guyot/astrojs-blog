export interface Post {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    author: string;
    tags: string[];
    image?: {
      url: string;
      alt: string;
    };
  };
}
