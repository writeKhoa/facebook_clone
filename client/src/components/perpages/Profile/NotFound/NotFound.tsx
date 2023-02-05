import { NotFoundIcon } from "@/components/commons/Icons";
import { ContentNotFound } from "./ContentNotFound";
import { GoToFeed } from "./GoToFeed";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[500px]">
        <div className="p-6 flex flex-col items-center">
          <div className="mb-5">
            <NotFoundIcon />
          </div>

          <ContentNotFound />

          <GoToFeed />
        </div>

        <div className="-mt-2 text-center">
          <div>
            <span className="text-primary font-semibold text-1720">
              Quay lại
            </span>
          </div>
          <div className="mt-4 text-center">
            <span className="text-primary font-semibold text-1720">
              Truy cập Trung tâm trợ giúp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
