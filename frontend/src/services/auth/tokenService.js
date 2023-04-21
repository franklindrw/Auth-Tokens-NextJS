import nookies from 'nookies';
const ACCESS_TOKEN_KEY = 'TOKEN';

export const tokenService = {
    save(acessToken, ctx = null) {
        nookies.set(ctx, ACCESS_TOKEN_KEY, acessToken, {
            maxAge: 86400,
            path: '/',
        });
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx);
        return cookies[ACCESS_TOKEN_KEY] || null;
    },
    delete(ctx = null) {
        nookies.destroy(ctx, ACCESS_TOKEN_KEY);
    }
};
