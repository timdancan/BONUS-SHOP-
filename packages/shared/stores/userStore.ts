import { create } from 'zustand';
import { User } from '../types/user';
import {users} from "../mock-data/users";

interface UserState {
    user: User | null;
    login: (username: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    login: (username: string) => {
        const foundUser = (users as User[]).find(u => u.username === username);
        if (foundUser) {
            set({ user: foundUser });
        } else {
            alert('User not found');
        }
    },
    logout: () => set({ user: null }),
    updateUser: (updatedUser: User) => set({ user: updatedUser }),
}));