import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

export const login = (email, password) => {
    return axios.post(API_URL + 'login', { email, password });
};

export const signUp = (username, email, password) => {
    return axios.post(API_URL + 'signup', { username, email, password });
};

export const forgotPassword = (email) => {
    return axios.post(API_URL + 'forgot-password', { email });
};

export const resetPassword = (token, newPassword) => {
    return axios.post(API_URL + 'reset-password', { token, newPassword });
};
