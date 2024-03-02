import { create } from "zustand";

import { IGame, IQuestion } from "../../interface/Game";

export const gameStore = create<IGame>()((set) => ({
    questions: [],
    generateGame: (question: IQuestion) => set((state) => ({
        questions: [...state.questions, question]
    })),
    emptyQuestions: () => set(() => ({
        questions: []
    }))
}))