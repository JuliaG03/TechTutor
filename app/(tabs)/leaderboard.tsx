import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface User {
    email: string;
}


const users: User[] = [
    
];

const Leaderboard = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase.from('users').select('email');
                if (error) {
                    throw error;
                }
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:');
            }
        };

        fetchUsers(); 
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Email</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.email}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
