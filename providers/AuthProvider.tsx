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
    lives?: Int16Array;
}

type AuthData = {
    session: Session | null;
    loading: boolean;
    userData: UserData | null;
    updateUser: (newUserData: Partial<UserData>) => void;
    setSession: (session: Session | null) => void;
    updateUserData: (newUserData: Partial<UserData>) => void;
};

const AuthContext = createContext<AuthData>({
    session: null,
    loading: true,
    userData: null,
    updateUser: () => { },
    setSession: () => { },
    updateUserData: () => { },
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
                    .select('username, firstname, lastname, phone, score, lives')
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

   const updateUser = async (newUserData: Partial<UserData>) => {
        if (userData) {
            const updatedUserData = { ...userData, ...newUserData };
            setUserData(updatedUserData);

            try {
                const { error } = await supabase
                    .from('users')
                    .update(updatedUserData)
                    .eq('id', userData.id);

                if (error) {
                    throw error;
                }
            } catch (error) {
                console.error('Error updating user data');
            }
         
        }


    };

    const updateUserData = async (newUserData: Partial<UserData>) => {
        if (userData) {
            const updatedUserData = { ...userData, ...newUserData };
            setUserData(updatedUserData);
        }
    };
    return <AuthContext.Provider value={{ session, loading, userData, updateUser, setSession, updateUserData }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
