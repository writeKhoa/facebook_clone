import { FC } from "react";

interface Props {
  backgroundUrl: string;
}

const Background: FC<Props> = ({ backgroundUrl }) => {
  return (
    <div className="relative w-full pt-[37%] bg-space rounded-b-xl">
      {backgroundUrl ? (
        <img src={backgroundUrl} alt="background" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Background;
