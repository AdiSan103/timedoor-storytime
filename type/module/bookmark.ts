export interface BookmarkResponse {
 message:  string,
 bookmarked: boolean
}

export interface BookmarksResponse {
 data: Story[],
 meta: {
  total: number,
  current_page: number,
  per_page: number,
  last_page: number
 }
}

export interface FormToggle {
 story_id: any;
}

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
