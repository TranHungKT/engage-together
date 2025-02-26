export const NORMAL_CHARACTER_PATTERN = /^[A-Za-z0-9-' ]+$/;
export const EMAIL_PATTERN = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const PHONE_NUMBER_PATTERN = /^(0[1-9]\d{8}|[1-9]\d{8})$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;
