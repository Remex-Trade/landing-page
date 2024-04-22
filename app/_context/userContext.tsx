"use client"
import {createContext} from 'react'

const userContext = createContext<any>({
    user: null,
    setUser: () => {},
    data:null,
    setData: () => {}
})

export default userContext ;