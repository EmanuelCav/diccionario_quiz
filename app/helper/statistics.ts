import { ICategory } from "../interface/User";

export const totalQuestions = (categories: ICategory[]): number => {

    let total = 0

    for (let i = 0; i < categories.length; i++) {
        total+=categories[i].questions
    }

    return total

}

export const totalCorrects = (categories: ICategory[]): number => {

    let total = 0

    for (let i = 0; i < categories.length; i++) {
        total+=categories[i].corrects
    }

    return total

}