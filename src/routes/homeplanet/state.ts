import { create } from 'zustand';

type State = {
  url: string;
};

type Action = {
  setUrl: (url: State['url']) => void;
};

export const usePlanetUrlState = create<State & Action>()((set) => ({
  url: '',
  setUrl: (url: string) => set(() => ({ url })),
}));
