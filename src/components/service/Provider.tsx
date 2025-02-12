import { createContext, FC, ReactNode, use, useEffect, useState } from "react";
import { useLove } from "../../hooks/useLove";

type ProviderValues = {
    coordinates: {x: number, y: number},
    playWithNo: () => void,
    playWithYes: () => Promise<void>
    isLoading: boolean
    isLove: boolean
}

const LoveContext = createContext<ProviderValues | null>(null)
export const useLoveContext = (): ProviderValues => {
    return use(LoveContext)!
}

export const Provider: FC<{children: ReactNode}> = ({children}) => {
    const [questionContainer, setQuestionContainer] = useState<HTMLDivElement | null>(null)
    const [gifResult, setGifResult] = useState<HTMLVideoElement | null>(null)

    useEffect(() => {
        setQuestionContainer(document.querySelector('.question-container') as HTMLDivElement)
        setGifResult(document.querySelector('.gif-result') as HTMLVideoElement)
    }, [])
    
    const {coordinates, playWithNo, playWithYes, isLoading, isLove}  = useLove({
        questionContainer, 
        gifResult
    })
    return (

        <LoveContext.Provider value={{ coordinates, isLoading, isLove, playWithNo, playWithYes }}>

            {children}

        </LoveContext.Provider>
    )
}