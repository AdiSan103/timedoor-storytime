export interface StoryImage {
 id: number;
 url: string;
}

export interface FormData {
 title: string,
 content: string,
 category_id: any,
 content_images: any
}

export interface Story {
 id: string;
 title: string;
 preview_content: string;
 content_images: StoryImage[];
 content: string;
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


export interface KeywordFilter {
 sort_by?: string | any;
 search?: string | any;
 category?: string | any;
}