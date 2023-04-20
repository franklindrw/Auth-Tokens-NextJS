import { useState, useEffect } from 'react';
import { authService } from '../services/auth/authService';
import { tokenService } from '../services/auth/tokenService';

export default function useSession() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = tokenService.get();
        if(!token){
            setLoading(false);
            setError('Token não encontrado');
        } else {
            authService.getSession()
                .then((session) => {
                    setSession(session);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, []);

    return {session, loading, error};
} 