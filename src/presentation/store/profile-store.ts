import { create } from 'zustand';

export interface ProfileStore {
  name: string;
  email: string;
  changeProfile: (name: string, email: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

export const useProfileStore = create<ProfileStore>()((set, get) => ({
  name: 'John Doe',
  email: 'john.doe@google.com',
  setName: (name: string) => set({ name }),
  setEmail: (email: string) => set({ email }),
  changeProfile: (name: string, email: string) => set({ name, email }),
}));
