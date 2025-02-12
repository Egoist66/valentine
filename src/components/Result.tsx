import { FC } from "react";

export const Result: FC = () => {
  return (
    <div className="result-container container">
      <video
        className="gif-result"
        src="/cute-love-gif.mp4"
        autoPlay
        loop
      ></video>
      <h2>I knew it😍!</h2>
    </div>
  );
};
