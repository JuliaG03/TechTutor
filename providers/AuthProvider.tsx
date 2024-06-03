import {PropsWithChildren, createContext, useEffect, useContext} from 'react';
import {supabase} from '@/lib/supabase';
import {Session} from '@supabase/supabase-js';
import { useState } from 'react';

type AuthData = {
    session: Session | null
};

const AuthContext = createContext<AuthData>({
    session: null,
});

export default function AuthProvider({children}:PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        const fetchSession = async() => {
            const {data} = await supabase.auth.getSession();
            //console.log(data);
            setSession(data.session);
        };
    
        fetchSession();
    }, []);
    
    return(
        <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);