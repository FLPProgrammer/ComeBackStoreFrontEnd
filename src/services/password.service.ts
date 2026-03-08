import { api } from './api';

export const passwordService = {
    async forgotPassword(email: string) {
        const response = await api.post('/password/forgot-password', { email });
        return response.data;
    },

    async resetPassword(token: string, password: string) {
        const response = await api.post('/password/reset-password', {
            token,
            password
        });

        return response.data;
    }
}