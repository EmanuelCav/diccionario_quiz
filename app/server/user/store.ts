import { create } from 'zustand'

import { ICategory, IOptions, IUser } from '../../interface/User'

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
    })),
    changeCategory: (category: ICategory) => set((state) => ({
        categories: state.categories.map((c) => category.category === c.category ? {
            category: category.category,
            corrects: category.corrects,
            isSelect: !category.isSelect,
            questions: category.questions
        } : c)
    })),
    countQuestion: (category: ICategory) => set((state) => ({
        categories: state.categories.map((c) => category.category === c.category ? {
            category: category.category,
            corrects: category.corrects,
            isSelect: category.isSelect,
            questions: category.questions + 1
        } : c)
    })),
    correctQuestion: (category: ICategory) => set((state) => ({
        categories: state.categories.map((c) => category.category === c.category ? {
            category: category.category,
            corrects: category.corrects + 1,
            isSelect: category.isSelect,
            questions: category.questions
        } : c)
    })),
}))