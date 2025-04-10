export interface User {
 id: string;
 name: string,
 username: string,
 email: string,
 email_verified_at: string,
 profile_image: string,
 about: string,
 created_at: string,
 updated_at: string
}

export interface PropsAuthResponse {
 message: string,
 data: User;
 token: string,
}

export interface UserAuthRequest {
 name: string,
 username: string,
 email: string,
 password: string,
 password_confirmation: string
}