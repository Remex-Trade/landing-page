"use client"
import {createContext} from 'react'

const theme = createContext<any>({
    theme: true,
    setTheme: () => {},
})

export default theme ;