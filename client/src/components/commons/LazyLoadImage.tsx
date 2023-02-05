import { FC, useRef, useState, useEffect } from "react";

interface Props {
  src: string;
  alt?: string;
  style?: any;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const LazyLoadImage: FC<Props> = ({
  src,
  alt,
  style,
  className,
  width,
  height,
}) => {
  const [lazySrc, setLazySrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const lazyLoad = () => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, self) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setLazySrc(src);
          }
        });

        if (imgRef.current) {
          observer.observe(imgRef.current);
        }
      } else {
        setLazySrc(src);
      }
    };

    lazyLoad();
  }, [imgRef]);

  return (
    <>
      <img
        src={lazySrc}
        alt={alt}
        style={{ width, height, ...style }}
        className={className}
        ref={imgRef}
      />
    </>
  );
};

export default LazyLoadImage;
