import { api } from './api';
import { ILoginRequest, IRegisterRequest } from '../interfaces/interfaces'

export async function login(data: ILoginRequest) {
    const response = await api.post('/auth/login', data);
    return response.data;
}

export async function register(data: IRegisterRequest) {
    const response = await api.post('/auth/register', data);
    return response.data;
}

export async function logout() {
    await api.post('/auth/logout');
}

export async function me() {
    const response = await api.get('/auth/me');
    return response.data;
}
