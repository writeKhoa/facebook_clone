import { FC } from "react";

interface Props {
  fullName: string;
}

const ShortInfo: FC<Props> = ({ fullName }) => {
  return (
    <div>
      <h1 className="text-3238 font-bold text-primaryText dark:text-primaryTextDark">
        {fullName}
      </h1>
    </div>
  );
};

export default ShortInfo;
