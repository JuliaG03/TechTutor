import { PropsWithChildren, createContext, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { useState } from 'react';

interface UserData {
    id: string;
    email?: string;
    username?: string;
    phone?: string;
    lastname?: string;
    firstname?: string;
    score?: Int16Array;
}

type AuthData = {
    session: Session | null;
    loading: boolean;
    userData: UserData | null;
   
};

const AuthContext = createContext<AuthData>({
    session: null,
    loading: true,
    userData: null,
  
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const {
              data: { session },
            } = await supabase.auth.getSession();
      
            setSession(session);
            if (session) {
                const { id, email = '' } = session.user;
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('username, firstname, lastname, phone, score')
                    .eq('id', id)
                    .single();
                    
                if (userError) {
                    throw userError;
                }
            
                if (userData) {
                    setUserData({ id, email, ...userData }); 
                } else {
                    setUserData(null); 
                }
            } else {
                setUserData(null);
            }
            
            setLoading(false)
        };

        fetchSession();

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
       
    }, []);

    // const signOut = async () => {
    //     await supabase.auth.signOut();
    //     setSession(null);
    //     setUserData(null);
    // };

    return <AuthContext.Provider value={{ session, loading, userData }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
