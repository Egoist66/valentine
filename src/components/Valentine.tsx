import { FC } from "react";
import { Frame } from "./Frame";
import { Controls } from "./Controls";
import { Result } from "./Result";
import { Loader } from "./Loader";
import { useLoveContext } from "./service/Provider";

export const Valentine: FC = () => {
  const { isLoading, isLove, playWithYes } = useLoveContext();

  if (isLoading) {
    return <Loader />;
  }
  if (isLove && !isLoading) {
    return <Result />;
  }
  return (
    <>
      <Frame
        gifUrl="https://tenor.com/view/tkthao219-bubududu-gif-25789758"
        stickerUrl="https://tenor.com/search/tkthao219-stickers"
      />

      <h2 className="question">Do you love me?</h2>
      <Controls playWithYes={playWithYes} />
    </>
  );
};
