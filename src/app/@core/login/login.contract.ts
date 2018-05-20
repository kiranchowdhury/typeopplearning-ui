export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    email?: string;
    name?: string;
    role?: string;
}
