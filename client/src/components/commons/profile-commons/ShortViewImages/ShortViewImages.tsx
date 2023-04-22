import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { generateRandomId } from "utils";

interface Props {
  imageUrlList: { imgUrl: string; postId: string }[];
}

const ShortViewImages: FC<Props> = ({ imageUrlList }) => {
  return (
    <div className="w-full h-auto rounded-lg bg-surface dark:bg-surfaceDark">
      <div className="pt-4 pb-2 h-4 px-4 box-content">
        <span className="text-2024 text-primaryText dark:text-primaryTextDark font-bold">
          Ảnh
        </span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
          {imageUrlList.map((img, index) => {
            if (index > 8) return null;
            return (
              <div key={generateRandomId()}>
                <LazyLoadImage
                  className="object-cover w-full h-full"
                  src={img.imgUrl}
                  width={200}
                  height={200}
                  style={{
                    maxWidth: 250,
                    maxHeight: 250,
                    minWidth: 100,
                    minHeight: 100,
                  }}
                  alt=""
                  onError={(event: any) => {
                    event.target.style.display = "none";
                    event.target.style.height = 0;
                    event.target.style.width = 0;
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShortViewImages;
