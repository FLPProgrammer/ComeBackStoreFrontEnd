import { api } from './api';

export async function updateProfile(data: {
    name: string,
    email: string,
    password?: string
    phone: string
}) {
    const response = await api.put('/user/profile', data);
    return response.data;
};

export async function changePassword(data: {
    currentPassword: string,
    newPassword: string
}) {
    await api.post('/user/password', data);
}