import { FC } from "react";

interface Props {
  backgroundUrl: string;
}

const Background: FC<Props> = ({ backgroundUrl }) => {
  if (backgroundUrl === "") {
    return (
      <div className="relative w-full pt-[37%] bg-space dark:bg-spaceDark rounded-b-xl"></div>
    );
  }
  return <div>Background</div>;
};

export default Background;
