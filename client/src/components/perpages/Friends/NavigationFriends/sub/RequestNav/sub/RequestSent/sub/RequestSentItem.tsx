import { ShortProfileItem } from '@/models'
import React, { FC, SyntheticEvent, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom"

interface Props {
  props: ShortProfileItem
  onCancel: () => void;
}

const RequestSentItem: FC<Props> = ({ props, onCancel }) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isCancel, setIsCancel] = useState<boolean>(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  const handleCancel = async (e: SyntheticEvent) => {
    try {
      e.preventDefault()
      e.stopPropagation()
      setIsCancel(true)
      onCancel()
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div
      className="px-2"
    >
      <Link to={`/${props._id}`}>
        <div
          className={`${isHover ? "" : "hover:bg-black/10 dark:hover:bg-white/10"} flex px-2 rounded-md cursor-pointer`}
          onClick={onCancel}
        >
          <div className='shrink-0 my-2 mr-3'>
            <LazyLoadImage
              src={props.avatarUrl}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className='grow py-3'>
            <div className='flex justify-between items-center h-full'>
              <div className='flex flex-col'>
                <span className='text-1520 font-medium text-primaryText dark:text-primaryTextDark'>{props.fullName}</span>
                {isCancel ? <span className='text-secondaryText dark:text-secondaryTextDark text-1316'>Đã hủy lời mời</span> : null}
              </div>

              {
                isCancel ? null : <div className='flex justify-center items-center min-w-[150px] rounded-lg h-9 px-3 bg-black/20 dark:bg-white/20 cursor-pointer'
                  onClick={handleCancel}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className='text-1418 text-primaryText dark:text-primaryTextDark font-semibold'>Hủy yêu cầu</span>
                </div>
              }
            </div>
          </div>

        </div>
      </Link>


    </div>
  )
}

export default RequestSentItem