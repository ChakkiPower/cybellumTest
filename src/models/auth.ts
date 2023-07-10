import { User } from './user';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string | null;
  user: User | null;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
