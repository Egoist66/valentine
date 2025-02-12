import { FC } from "react";
import { useLoveContext } from "./service/Provider";

export const Controls: FC<{playWithYes: () => Promise<void>}> = ({playWithYes}) => {

    const {playWithNo, coordinates} = useLoveContext()
    return (
        <div className="button-container">
            <button onClick={playWithYes} className="yes-btn btn js-yes-btn">Yes</button>
            <button style={{ left: coordinates.x + 'px', top: coordinates.y + 'px' }} onMouseOver={playWithNo} className="no-btn btn js-no-btn">No</button>
        </div>
    )
}