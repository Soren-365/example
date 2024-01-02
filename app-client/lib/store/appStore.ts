
// import { createMemberStore } from './memberStore'
// import { createFishSlice } from './fishSlice'
// import type { } from '@redux-devtools/extension' // required for devtools typing
// import { persist } from 'zustand/middleware'
// import { MemberStore } from './memberStore'


import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { combine } from 'zustand/middleware'

const initMember = {
    id: '',
    userId: '',
    userName: '',
    firstName: '',
    lastName: '',
    city: '',
    country: ''
}

export type MemberStore = {
        id: string
        userId: string
        userName: string
        firstName: string
        lastName: string
        city: string
        country: string
    
}

interface AppStore extends MemberStore {

}

type SetState = () => void 


export const useMemberStore = create<MemberStore>( set => ({
...initMember
}))


// export const useAppStore = create<AppStore>({
//     // combine<AppStore, SetState>(
//          member: initMember 

//         // (set) => ({ increase: (by) => set((state: { member }) => ()) })

//     // ),
// })