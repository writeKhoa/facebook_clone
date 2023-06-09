import { Tooltip } from "@/components/commons";
import { useClickOutside, useWindowSize } from "@/hooks";
import { useRef, useState } from "react";
import { AddAndMenu, Messengers, Notify, Profile } from "./Dialogs";
import {
  AddAndMenuItem,
  MessengerItem,
  NotifyItem,
  ProfileItem,
} from "./Items";

const NavRight = () => {
  const [isOpen, setIsOpen] = useState<number>(0);
  const { width } = useWindowSize();

  const handleOpen = (index: number) => {
    if (isOpen === index) {
      setIsOpen(0);
    } else {
      setIsOpen(index);
    }
  };

  const handleClose = () => {
    setIsOpen(0);
  };

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const addAndMenuRef = useRef<HTMLDivElement | null>(null);
  const messengerRef = useRef<HTMLDivElement | null>(null);
  const notifyRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(
    [dialogRef, addAndMenuRef, messengerRef, notifyRef, profileRef],
    handleClose,
    [isOpen]
  );

  return (
    <div className="flex items-center pr-4 pl-1 -ml-2 h-full">
      <Tooltip tooltip={`${width < 1100 ? "Tạo" : "Menu"}`}>
        <AddAndMenuItem
          onOpen={() => handleOpen(1)}
          isActive={isOpen === 1}
          ref={addAndMenuRef}
        />
      </Tooltip>
      <Tooltip tooltip="messengers">
        <MessengerItem
          onOpen={() => handleOpen(2)}
          isActive={isOpen === 2}
          ref={messengerRef}
        />
      </Tooltip>
      <Tooltip tooltip="Thông báo">
        <NotifyItem
          onOpen={() => handleOpen(3)}
          isActive={isOpen === 3}
          ref={notifyRef}
        />
      </Tooltip>
      <Tooltip tooltip="Tài khoản">
        <ProfileItem onOpen={() => handleOpen(4)} ref={profileRef} />
      </Tooltip>

      <div
        className={`absolute rounded-md bg-surface dark:bg-surfaceDark shadow transition-all duration-150 ${
          isOpen !== null ? "block" : "hidden"
        }`}
        ref={dialogRef}
        style={{ top: 55, right: 16 }}
      >
        <>
          {isOpen === 1 ? <AddAndMenu /> : null}
          {isOpen === 2 ? <Messengers /> : null}
          {isOpen === 3 ? <Notify /> : null}
          {isOpen === 4 ? <Profile handleClose={handleClose} /> : null}
        </>
      </div>
    </div>
  );
};

export default NavRight;
