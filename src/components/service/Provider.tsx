import { createContext, FC, ReactNode, useContext } from "react";
import { useLove } from "../../hooks/useLove";

type ProviderValues = {
    coordinates: {x: number, y: number},
    playWithNo: () => void
}

const LoveContext = createContext<ProviderValues | null>(null)
export const useLoveContext = (): ProviderValues => {
    return useContext(LoveContext)!
}

export const Provider: FC<{children: ReactNode}> = ({children}) => {
    const questionContainer = document.querySelector('.question-container') as HTMLDivElement
    
    const {coordinates, playWithNo}  = useLove(questionContainer)
    return (

        <LoveContext.Provider value={{ coordinates, playWithNo }}>

            {children}

        </LoveContext.Provider>
    )
}