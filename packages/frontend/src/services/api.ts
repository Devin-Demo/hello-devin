import {
  OpenAPI,
  AuthService,
  type RegisterDto,
  type LoginDto,
  type UpdateAccountDto,
  type UpdatePasswordDto,
} from '@hello-devin/client-sdk';

// Configure the SDK base URL from environment variable
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// Configure the SDK to use the token from localStorage
OpenAPI.TOKEN = async () => getToken() || '';

function getToken(): string | null {
  return localStorage.getItem('token');
}

function setToken(token: string): void {
  localStorage.setItem('token', token);
}

function removeToken(): void {
  localStorage.removeItem('token');
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export async function register(data: RegisterDto): Promise<AuthResponse> {
  const result = (await AuthService.authControllerRegister(data)) as AuthResponse;
  setToken(result.access_token);
  return result;
}

export async function login(data: LoginDto): Promise<AuthResponse> {
  const result = (await AuthService.authControllerLogin(data)) as AuthResponse;
  setToken(result.access_token);
  return result;
}

export async function getAccount(): Promise<UserProfile> {
  return (await AuthService.authControllerGetAccount()) as UserProfile;
}

export async function updateAccount(data: UpdateAccountDto): Promise<UserProfile> {
  return (await AuthService.authControllerUpdateAccount(data)) as UserProfile;
}

export async function updatePassword(data: UpdatePasswordDto): Promise<{ message: string }> {
  return (await AuthService.authControllerUpdatePassword(data)) as { message: string };
}

export { getToken, setToken, removeToken };
