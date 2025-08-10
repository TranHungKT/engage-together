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
