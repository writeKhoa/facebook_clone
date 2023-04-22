import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  fullName: string;
  avatarUrl: string;
}

const ContactItem: FC<Props> = ({ fullName, avatarUrl }) => {
  return (
    <div className="px-2">
      <div className="flex px-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
        <div className="my-2 mr-3 w-9 h-9">
          <LazyLoadImage
            src={avatarUrl}
            width={36}
            height={36}
            alt=""
            className="rounded-full"
          />
        </div>

        <div className="grow flex py-3 items-center">
          <span className="text-1520 font-medium text-primaryText dark:text-primaryTextDark">{`${fullName}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
