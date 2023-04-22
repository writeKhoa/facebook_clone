import { FC } from "react";
import { Content1, Content2 } from "./sub";

interface Props {
  props: {
    background: number;
    content?: string;
    format: 1 | 2 | 3;
    imageUrl?: string;
  };
}

const ContentPost: FC<Props> = ({ props }) => {
  const { format, content, imageUrl, background } = props;
  return (
    <>
      {format === 1 ? (
        <Content1 content={content} imageUrl={imageUrl} />
      ) : (
        <Content2 background={background} content={content} />
      )}
    </>
  );
};
export default ContentPost;
