import {useState } from "react";
import { delay } from "../utils/delay";


type useLoveProps = {
    questionContainer: HTMLDivElement | null,
    gifResult: HTMLVideoElement | null
}

export const useLove = ({questionContainer, gifResult}: useLoveProps) => {

    
    
    const [coordinates, setCoordinates] = useState<{x: number, y: number}>(() => (
        {
            x: Math.floor(Math.random() * questionContainer?.offsetWidth!),
            y: Math.floor(Math.random() * questionContainer?.offsetWidth!)
        }
    ))

    const [isLoading, setLoading] = useState<boolean>(false)
    const [isLove, setLove] = useState<boolean>(false)

    const playWithNo = () => {

        if(questionContainer){

            const newX = Math.floor(Math.random() * questionContainer?.offsetWidth!);
            const newY = Math.floor(Math.random() * questionContainer?.offsetWidth!);
          
            setCoordinates({
                x: newX,
                y: newY
            })

        }
    
    }

    const playWithYes = async () => {
        setLoading(true)
       
        await delay(3000)
        setLoading(false)
        setLove(true)

        gifResult?.play()
        
    }

    return {
        isLoading,
        isLove,
        coordinates,
        playWithYes,
        playWithNo
    }
}