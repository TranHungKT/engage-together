export interface CurrentUserDetailsResponse {
  data: {
    id: string;
    username: string;
    email: string;
  };
}

export interface LoginUserRequest {
  username: string;
  password: string;
}

export interface LoginUserResponse {
  data: { token: string };
}

export interface SearchUserRequest {
  organizationId: string;
  username?: string;
}

export interface SearchUserResponse {
  data: {
    id: string;
    email: string;
    username: string;
    name: string;
    userRole: string;
  }[];
}
