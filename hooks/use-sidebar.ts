import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggle: () => void;
  setOpen: (isOpen: boolean) => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false, // Default to closed
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));