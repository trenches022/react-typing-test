import { create } from 'zustand';

const useTypingStore = create((set) => ({

  text: 'This is a sample typing test',
  userInput: '',
  timer: 30,
  isRunning: false,
  setUserInput: (input) => set({ userInput: input }),
  startTimer: () => set({ isRunning: true, timer: 30 }),
  reset: () => set({ userInput: '', timer: 30, isRunning: false }),

}));

export default useTypingStore;