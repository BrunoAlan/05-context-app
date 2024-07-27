import { create } from 'zustand';

export interface ProfileStore {
  name: string;
  email: string;
}

export const useProfileStore = create<ProfileStore>()((set, get) => ({
  name: 'John Doe',
  email: 'john.doe@google.com',
}));
