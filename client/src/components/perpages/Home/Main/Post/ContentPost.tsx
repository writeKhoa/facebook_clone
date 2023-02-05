import { FC } from "react";

interface Props {
  title?: string;
}

const ContentPost: FC<Props> = ({ title }) => {
  return (
    <div className="px-4 pb-4 text-primaryText dark:text-primaryTextDark">
      {title}
    </div>
  );
};
export default ContentPost;
