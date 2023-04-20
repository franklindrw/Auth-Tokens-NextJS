import HttpClient from "../../infra/HttpClient/HttpClient";
import {tokenService} from './tokenService';

export const authService = {
    async login({ username, password}) {
        return await HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body:{
                username,
                password,
            },
        })
        .then(async (resp) => {
            if(!resp.ok) throw new Error('Não foi possível fazer login');
            const body = await resp.body;
            console.log(body);

            tokenService.save(body.data.access_token);
        })
    },

    async getSession(ctx) {
        const token = tokenService.get(ctx);
        return await HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((resp) => {
            if(!resp.ok) throw new Error('Não autorizado');
            return resp.body.data
        })
    }
};
