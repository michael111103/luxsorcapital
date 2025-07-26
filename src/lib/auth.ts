// src/lib/auth.ts

export interface AuthResponse {
  ok: boolean;
  message?: string;
  data?: any;
}

/**
 * Register a new user with email & password.
 * @param email
 * @param password
 */
export async function register(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return { ok: false, message: err.message || "Registration failed" };
  }

  const { message, data } = await res.json();
  return { ok: true, message, data };
}

/**
 * Log in a user with email & password.
 * @param email
 * @param password
 */
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return { ok: false, message: err.message || "Login failed" };
  }

  const { message, data } = await res.json();
  return { ok: true, message, data };
}

/**
 * Log out the current user.
 */
export async function logout(): Promise<AuthResponse> {
  const res = await fetch("/api/auth/logout", { method: "POST" });
  if (!res.ok) {
    return { ok: false, message: "Logout failed" };
  }
  return { ok: true };
}

/**
 * Fetch the currently authenticated user's profile.
 */
export async function getProfile(): Promise<{
  ok: boolean;
  data?: { email: string };
  message?: string;
}> {
  const res = await fetch("/api/auth/me");
  if (!res.ok) {
    return { ok: false, message: "Not authenticated" };
  }
  const data = await res.json();
  return { ok: true, data };
}
