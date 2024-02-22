import { create } from "zustand";

import { IGame } from "../../interface/Game";

export const gameStore = create<IGame>()(() => ({
    questions: []
}))