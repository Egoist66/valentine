import { FC } from "react";

export const Frame: FC<{gifUrl?: string, stickerUrl?: string }> = ({gifUrl, stickerUrl}) => {
  return (
    <div
      className="tenor-gif-embed"
      data-postid="25789758"
      data-share-method="host"
      data-width="100%"
    >
      <a href={gifUrl}>
        Tkthao219 Bubududu Sticker
      </a>
      from
      <a href={stickerUrl}>
        Tkthao219 Stickers
      </a>
    </div>
  );
};
