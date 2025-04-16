import type { Story } from "./stories";

export interface User {
 id: string;
 name: string,
 email: string,
 profile_image: string,
 about: string,
}

export interface UserResponse {
 user: User;
}

export interface FormProfile {
 name: string,
 about: string,
 old_password: string,
 new_password: string,
 new_password_confirmation: string,
}

export interface FormProfileImage {
 profile_image: string
}

export interface StoryByUserResponse {
 data: Story[],
 meta: {
  total: number,
  current_page: number,
  per_page: number,
  last_page: number
 }
}