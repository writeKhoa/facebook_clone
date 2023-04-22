import {
  NewCallIcon,
  FindIcon,
  ThreeDotIcon,
} from "@/components/commons/Icons";
import { ProfileProps, ShortProfileItem } from "@/models";
import { FC, useEffect, useState } from "react";
import { ContactItem } from "./sub";

interface Props {
  contactsProps: ShortProfileItem[];
}

const Complementary: FC<Props> = ({ contactsProps }) => {
  const [contacts, setContacts] = useState<ShortProfileItem[]>([]);
  useEffect(() => {
    setContacts([...contactsProps]);
  }, [contactsProps]);
  return (
    <div className="overflow-y-auto">
      <div className="flex items-center pt-5 pb-1 px-4">
        <div className="grow">
          <h3>
            <span className="text-1720 font-600 text-secondaryText dark:text-secondaryTextDark">
              Người liên hệ
            </span>
          </h3>
        </div>
        <div className="shrink-0 flex">
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <span>
              <NewCallIcon />
            </span>
          </div>
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <FindIcon />
          </div>
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <span>
              <ThreeDotIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="py-2">
        {contacts.length > 0 &&
          contacts.map((friend, index) => {
            const { fullName, avatarUrl } = friend;
            return (
              <ContactItem
                key={index}
                fullName={fullName}
                avatarUrl={avatarUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Complementary;
