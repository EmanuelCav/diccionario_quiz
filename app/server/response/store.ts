import { create } from "zustand";

import { IResponse } from '../../interface/Game'

export const responseStore = create<IResponse>((set) => ({
    loading: true,
    changeLoading: (response: boolean) => set(() => ({
        loading: response
    }))
}))