import { createContext, useEffect, useContext, useState, PropsWithChildren } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

interface LearningPath {
    idlearningpath: number;
    name: string;
}

interface Lesson {
    idlesson: number;
    idlearningpath: number;
    name: string;
    content: string;
    completed: boolean; 
}

interface Question {
    idquestion: number;
    idlesson: number;
    idlearningpath: number;
    questionText: string;
    points: number;
}

interface Answer {
    idanswer: number;
    idquestion: number;
    idlesson: number;
    idlearningpath: number;
    answertext: string;
    correct: boolean;
}

type UserData = {
    id: string;
    email?: string;
    username?: string;
    phone?: string;
    lastname?: string;
    firstname?: string;
    score?: number;
    lives?: number;
    learningPaths?: LearningPath[];
    lessons?: Lesson[];
    questions?: Question[];
    answers?: Answer[];
};

type AuthData = {
    session: Session | null;
    loading: boolean;
    userData: UserData | null;
    updateUser: (newUserData: Partial<UserData>) => void;
    setSession: (session: Session | null) => void;
    updateUserData: (newUserData: Partial<UserData>) => void;
    userDidLesson: (idlesson: number, idlearningpath: number) => void;
};

const AuthContext = createContext<AuthData>({
    session: null,
    loading: true,
    userData: null,
    updateUser: () => { },
    setSession: () => { },
    updateUserData: () => { },
    userDidLesson: () => { },
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                // Fetch user data
                const { id, email = '' } = session.user;
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('username, firstname, lastname, phone, score, lives')
                    .eq('id', id)
                    .single();
                
                if (userError) {
                    throw userError;
                }

                let learningPaths: LearningPath[] = [];
                let lessons: Lesson[] = [];
                let questions: Question[] = [];
                let answers: Answer[] = [];

                if (userData) {
                    // Fetch learning paths
                    const { data: learningPathsData, error: learningPathsError } = await supabase
                        .from('learningpaths')
                        .select('*');
                    if (learningPathsError) {
                        throw learningPathsError;
                    }
                    learningPaths = learningPathsData;

                    // Fetch lessons
                    const { data: lessonsData, error: lessonsError } = await supabase
                        .from('lessons')
                        .select('*');
                    if (lessonsError) {
                        throw lessonsError;
                    }
                    lessons = lessonsData;

                    // Fetch questions
                    const { data: questionsData, error: questionsError } = await supabase
                        .from('questions')
                        .select('*');
                    if (questionsError) {
                        throw questionsError;
                    }
                    questions = questionsData;

                    // Fetch answers
                    const { data: answersData, error: answersError } = await supabase
                        .from('answers')
                        .select('*');
                    if (answersError) {
                        throw answersError;
                    }
                    answers = answersData;
                    
                    const { data: userLessonsData, error: userLessonsError } = await supabase
                        .from('userlesson')
                        .select('*')
                        .eq('iduser', id);
                        if (userLessonsError) {
                            throw userLessonsError;
                        }

                    // Marcam lecțiile din userData ca finalizate în funcție de datele din tabela UserLesson
                    const updatedLessons = lessons?.map(lesson => {
                        const isCompleted = userLessonsData.some(userLesson => userLesson.idlesson === lesson.idlesson && userLesson.idlearningPath === lesson.idlearningpath);
                        return { ...lesson, completed: isCompleted };
                    });

                      setUserData({ id, email, ...userData, learningPaths, lessons: updatedLessons, questions, answers });
                } else {
                    setUserData(null);
                }
            } else {
                setUserData(null);
            }
            
            setLoading(false);
        };

        fetchSession();

        const authListener = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
       
    }, [session]);

    const updateUserData = async (newUserData: Partial<UserData>) => {
        if (userData) {
            const updatedUserData = { ...userData, ...newUserData };
            setUserData(updatedUserData);
        }
    };

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

   const userDidLesson = async (idlesson: number, idlearningpath: number) => { // Removed Promise<void> type
        try {
            if (userData) {
                const { data, error } = await supabase
                    .from('userlesson')
                    .insert([{ iduser: userData.id, idlesson: idlesson, idlearningpath: idlearningpath }]);
    
                if (error) {
                    throw error;
                }
            }
        } catch (error) {
            console.error('Error updating user did lesson:', error);
            // No need to throw the error here since it's not a promise
        }
    };
    

    

    return (
        <AuthContext.Provider value={{ session, loading, userData, updateUser, setSession, updateUserData, userDidLesson }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
