import { authService } from "./authService";

export function withSession(action){
    return async (ctx) => {
        try{
            const session = await authService.getSession(ctx);
            return action({ ...ctx, session });
        } catch (err) {
            console.log(err.message);
            return {
                redirect: {
                    destination: '/?error=401',
                    permanent: false,
                },
            };
        }
    }
}