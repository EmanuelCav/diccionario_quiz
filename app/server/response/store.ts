import { create } from "zustand";

import { IResponse } from '../../interface/Game'

export const responseStore = create<IResponse>((set) => ({
    loading: false,
    changeLoading: (response: boolean) => set(() => ({
        loading: response
    }))
}))