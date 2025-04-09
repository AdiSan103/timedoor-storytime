export interface StoryImage {
 id: number;
 url: string;
}

export interface Story {
 id: string;
 title: string;
 preview_content: string;
 content_images: StoryImage[];
 user: {
  name: string;
  profile_image: string | null;
 };
 category: {
  id: number;
  name: string;
 };
 bookmarks_count: number;
 bookmarked: boolean;
 created_at: string;
}

export interface PropsStory {
 data: Story[];
}
