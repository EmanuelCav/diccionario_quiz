import { create } from 'zustand'

import { IUser } from '../../interface/User'

export const userStore = create<IUser>(() => ({
    amountOptions: 4,
    amountQuestions: 10,
    categories: [{
        category: "Sustantivos",
        corrects: 0,
        isSelect: true,
        questions: 0
    }, {
        category: "Adjetivos",
        corrects: 0,
        isSelect: true,
        questions: 0
    }, {
        category: "Verbos",
        corrects: 0,
        isSelect: true,
        questions: 0
    }, {
        category: "Preposiciones",
        corrects: 0,
        isSelect: true,
        questions: 0
    }],
    showLetters: 3,
    showOptions: 3
}))