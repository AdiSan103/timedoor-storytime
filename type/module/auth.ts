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

export interface AuthResponse {
 message: string,
 data: User;
 token: string,
}

export interface UserAuthRequest {
 token: string | null | undefined;
 message: string;
 user: User;
}

export interface LoginForm {
 username_or_email: string,
 password: string
}

export interface RegisterForm {
 username: string,
 name: string,
 email: string,
 password: string,
 password_confirmation:string,
}