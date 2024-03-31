import { create } from 'zustand'

import { ICategory, IUser } from '../../interface/User'

export const userStore = create<IUser>()((set) => ({
    amountQuestions: 5,
    categories: [{
        category: "Sustantivos"
    }, {
        category: "Adjetivos"
    }, {
        category: "Verbos"
    }, {
        category: "Preposiciones"
    }],
    helps: 5,
    changeCategory: (category: ICategory) => set((state) => ({
        categories: state.categories.map((c) => category.category === c.category ? {
            category: category.category
        } : c)
    })),
    countQuestion: (category: string) => set((state) => ({
        categories: state.categories.map((c) => category === c.category ? {
            category: c.category
        } : c)
    })),
    correctQuestion: (category: string) => set((state) => ({
        categories: state.categories.map((c) => category === c.category ? {
            category: c.category,
        } : c)
    })),
    changeHelps: (number: number) => set((state) => ({
        helps: state.helps + number
    })),
    userStorage: (storage: any) => set(() => ({
        amountOptions: storage.amountOptions,
        helps: storage.helps,
        categories: storage.categories,
        amountQuestions: storage.amountQuestions,
    }))
}))