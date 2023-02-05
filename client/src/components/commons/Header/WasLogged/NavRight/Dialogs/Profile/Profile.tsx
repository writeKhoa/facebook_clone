import { FC } from "react";
import { useState } from "react";
import { ManageUser } from "./ManageUser";
import { ListOption } from "./ListOption";

interface Props {
  handleClose: () => void;
}

const Profile: FC<Props> = ({ handleClose }) => {
  const [isShowManageUser, setIsShowManageUser] = useState<boolean>(true);
  const handleShow = () => {
    setIsShowManageUser(true);
  };
  const handleHide = () => {
    setIsShowManageUser(false);
  };
  return (
    <div className="w-[360px] pt-2 pb-5">
      {isShowManageUser ? <ManageUser handleClose={handleClose} /> : null}
      <ListOption handleShow={handleShow} handleHide={handleHide} />
    </div>
  );
};
export default Profile;
