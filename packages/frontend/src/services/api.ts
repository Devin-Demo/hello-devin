const BASE_URL = 'http://localhost:3000';

function getToken(): string | null {
  return localStorage.getItem('token');
}

function setToken(token: string): void {
  localStorage.setItem('token', token);
}

function removeToken(): void {
  localStorage.removeItem('token');
}

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error((error as { message?: string }).message || 'Request failed');
  }

  return response.json() as Promise<T>;
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

export async function register(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): Promise<AuthResponse> {
  const result = await request<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  setToken(result.access_token);
  return result;
}

export async function login(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const result = await request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  setToken(result.access_token);
  return result;
}

export async function getAccount(): Promise<UserProfile> {
  return request<UserProfile>('/auth/account');
}

export async function updateAccount(data: {
  firstName?: string;
  lastName?: string;
  email?: string;
}): Promise<UserProfile> {
  return request<UserProfile>('/auth/account', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function updatePassword(data: {
  currentPassword: string;
  newPassword: string;
}): Promise<{ message: string }> {
  return request<{ message: string }>('/auth/password', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export { getToken, setToken, removeToken };
