import { create } from 'zustand'
import { createMemberStore } from './memberStore'
// import { createFishSlice } from './fishSlice'
// import type { } from '@redux-devtools/extension' // required for devtools typing
// import { persist } from 'zustand/middleware'
import { MemberStore } from './memberStore'
// interface AppState {
//     // bears: number
//     // increase: (by: number) => void
//     member: {
//         id: string
//         firstName: string
//         lastName: string
//         city: string
//         country: string
//     }
// }
export const useAppStore = create<MemberStore>(   (...a) => ({
    ...createMemberStore(...a),
}))