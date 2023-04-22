import { useWindowSize } from "@/hooks";
import { Menu, Add } from "./sub"
import { CustomScrollbar } from "@/components/commons"

const AddAndMenu = ({ }) => {
  const size = useWindowSize()
  return (
    <div className="block rounded-md bg-[#aab2ba] dark:bg-[#323436] shadow-md overflow-hidden" style={{ height: size.height - 76, width: 608 }}>

      <div className="py-4 h-5 box-content">
        <div className="px-4">

          <span className="text-2428 font-bold text-primaryText dark:text-primaryTextDark">Menu</span>
        </div>
      </div>

      <CustomScrollbar>
        <div className="px-4 w-full" style={{ height: size.height - 120 }}>

          <div className="flex -m-2">

            <div className="m-2">
              <Menu />
            </div>



            <div className="m-2">
              <Add />
            </div>

          </div>
        </div>
      </CustomScrollbar>
    </div>
  );
};
export default AddAndMenu;
