import { create } from 'zustand'

import { ICategory, IOptions, IUser } from '../../interface/User'

export const userStore = create<IUser>()((set) => ({
    amountOptions: 'Sin opciones',
    amountQuestions: 5,
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
    helps: 5,
    changeOptions: (optionsData: IOptions) => set(() => ({
        amountOptions: optionsData.amountOptions,
        amountQuestions: optionsData.amountQuestions
    })),
    changeCategory: (category: ICategory) => set((state) => ({
        categories: state.categories.map((c) => category.category === c.category ? {
            category: category.category,
            corrects: category.corrects,
            isSelect: !category.isSelect,
            questions: category.questions
        } : c)
    })),
    countQuestion: (category: string) => set((state) => ({
        categories: state.categories.map((c) => category === c.category ? {
            category: c.category,
            corrects: c.corrects,
            isSelect: c.isSelect,
            questions: c.questions + 1
        } : c)
    })),
    correctQuestion: (category: string) => set((state) => ({
        categories: state.categories.map((c) => category === c.category ? {
            category: c.category,
            corrects: c.corrects + 1,
            isSelect: c.isSelect,
            questions: c.questions
        } : c)
    })),
    changeHelps: (number: number) => set((state) => ({
        helps: state.helps + number
    }))
}))