import { IUser } from "../interface/User";

export const totalQuestions = (user: IUser): number => {

    let total = user.definitions.amount + user.synonyms.amount + user.antonyms.amount

    return total

}

export const totalCorrects = (user: IUser): number => {

    let total = user.definitions.corrects + user.synonyms.corrects + user.antonyms.corrects

    return total

}