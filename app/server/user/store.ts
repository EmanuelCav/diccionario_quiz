import { create } from 'zustand'

import { IOptions, IUser } from '../../interface/User'

export const userStore = create<IUser>()((set) => ({
    amountOptions: 'Sin opciones',
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
    showOptions: 3,
    changeOptions: (optionsData: IOptions) => set(() => ({
        amountOptions: optionsData.amountOptions,
        amountQuestions: optionsData.amountQuestions
    }))
}))