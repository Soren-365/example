import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initMember = {
  id: '',
  userId: '',
  firstName: '',
  lastName: '',
  city: '',
  country: ''
}

export interface MemberStore {
  id: string
  user_id: string
  firstName: string
  lastName: string
  city: string
  country: string
}

export const createMemberStore = (set, replace, get) => ({
  // bears: 0,
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
   ...initMember
})
