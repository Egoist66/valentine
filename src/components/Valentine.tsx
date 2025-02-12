import { FC } from "react";
import { Frame } from "./Frame";
import { Controls } from "./Controls";
import { Result } from "./Result";
import { Loader } from "./Loader";

export const Valentine: FC = () => {
  return (
    <>
      <Frame
        gifUrl="https://tenor.com/view/tkthao219-bubududu-gif-25789758"
        stickerUrl="https://tenor.com/search/tkthao219-stickers"
      />

      <h2 className="question">Do you love me?</h2>

      <Controls />
      <Result />
      <Loader />
    </>
  );
};
