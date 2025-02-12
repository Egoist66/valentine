import { useState } from "react";

export const useLove = (questionContainer: HTMLDivElement | null) => {

    const [coordinates, setCoordinates] = useState<{x: number, y: number}>({
        x: Math.floor(Math.random() * questionContainer?.offsetWidth!),
        y: Math.floor(Math.random() * questionContainer?.offsetWidth!)
    })

    const playWithNo = () => {
        console.log(questionContainer);

        if(questionContainer){

            const newX = Math.floor(Math.random() * questionContainer?.offsetWidth!);
            const newY = Math.floor(Math.random() * questionContainer?.offsetWidth!);
          
            setCoordinates({
                x: newX,
                y: newY
            })

        }
    
    }

    return {
        coordinates,
        playWithNo
    }
}