"use client"
import {createContext} from 'react'

const trancheContext = createContext<any>({
    juniorTrancheData: null,
    setJuniorTrancheData: () => {},
    seniorTrancheData:null,
    setSeniorTrancheData: () => {}
})

export default trancheContext;