import { create } from 'zustand'

import { IOptions, IUser } from '../../interface/User'

export const userStore = create<IUser>()((set) => ({
    sounds: true,
    definitions: {
        name: 'definitions',
        amount: 0,
        corrects: 0
    },
    antonyms: {
        name: 'antonyms',
        amount: 0,
        corrects: 0
    },
    synonyms: {
        name: 'synonyms',
        amount: 0,
        corrects: 0
    },
    amountQuestions: 5,
    helps: 5,
    countDefinitions: () => set((state) => ({
        definitions: {
            name: state.definitions.name,
            corrects: state.definitions.corrects,
            amount: state.definitions.amount + 1
        }
    })),
    correctDefinitions: () => set((state) => ({
        definitions: {
            name: state.definitions.name,
            corrects: state.definitions.corrects + 1,
            amount: state.definitions.amount
        }
    })),
    countSynonyms: () => set((state) => ({
        synonyms: {
            name: state.synonyms.name,
            corrects: state.synonyms.corrects,
            amount: state.synonyms.amount + 1
        }
    })),
    correctSynonyms: () => set((state) => ({
        synonyms: {
            name: state.synonyms.name,
            corrects: state.synonyms.corrects + 1,
            amount: state.synonyms.amount
        }
    })),
    countAntonyms: () => set((state) => ({
        antonyms: {
            name: state.antonyms.name,
            corrects: state.antonyms.corrects,
            amount: state.antonyms.amount + 1
        }
    })),
    correctAntonyms: () => set((state) => ({
        antonyms: {
            name: state.antonyms.name,
            corrects: state.antonyms.corrects + 1,
            amount: state.antonyms.amount
        }
    })),
    changeOptions: (optionsData: IOptions) => set((state) => ({
        amountQuestions: optionsData.amountQuestions
    })),
    changeHelps: (number: number) => set((state) => ({
        helps: state.helps + number
    })),
    changeSounds: () => set((state) => ({
        sounds: !state.sounds
    })),
    userStorage: (storage: any) => set(() => ({
        antonyms: storage.antonyms,
        synonyms: storage.synonyms,
        definitions: storage.definitions,
        sounds: storage.sounds,
        helps: storage.helps,
        amountQuestions: storage.amountQuestions,
    }))
}))