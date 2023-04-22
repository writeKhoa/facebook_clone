import { FC, ReactNode } from "react";
import Scrollbars from "react-custom-scrollbars-2"

interface Props {
  children: ReactNode;
}

const CustomScrollbar: FC<Props> = ({ children }) => {
  const renderThumb = () => {
    return <div className="absolute top-0 right-1 w-2 bg-black/30 dark:bg-white/30 rounded-full" />;
  };

  const renderTrackVertical = () => {
    return <div className="absolute right-0 top-0 bottom-0 w-4 hover:bg-black/5 hover:dark:bg-white/5"></div>
  }
  return (
    <Scrollbars
      renderTrackVertical={renderTrackVertical}
      renderThumbVertical={renderThumb}
      autoHide
      // autoHideTimeout={500}
      // autoHideDuration={200}
      universal

    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
