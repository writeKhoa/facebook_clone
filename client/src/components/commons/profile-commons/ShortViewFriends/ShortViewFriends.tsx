import { ShortProfileItem } from '@/models'
import React, { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from "react-router-dom"

interface Props {
  friendData: {
    friendList: ShortProfileItem[],
    friendCount: number
  }
}

const ShortViewFriends: FC<Props> = ({ friendData }) => {
  return (
    <div className='w-full h-auto rounded-lg bg-surface dark:bg-surfaceDark'>

      <div className='pt-4 pb-2 px-4'>
        <div className='my-1.5'>
          <span className='text-2024 text-primaryText dark:text-primaryTextDark font-bold'>Bạn bè</span>
        </div>

        <div className='my-1.5 h-3'>
          <span className='text-1418 text-secondaryText dark:text-secondaryTextDark'>{friendData.friendCount > 0 ? `${friendData.friendCount} người bạn` : ""}</span>
        </div>

      </div>
      <div className='p-4'>
        <div className='grid grid-cols-3 gap-2'>
          {friendData.friendCount > 0 &&
            friendData.friendList.map(friend => {

              return (
                <div key={friend._id} className="mb-3">
                  <Link to={`/${friend._id}`}>
                    <LazyLoadImage className='rounded-lg object-cover' src={friend.mediumAvatarUrl} width={250} height={250} alt="" /></Link>
                  <div className='-mt-1 h-8'>
                    <Link to={`/${friend._id}`}>
                      <span className='text-1316 font-semibold text-primaryText dark:text-primaryTextDark'>{friend.fullName}</span></Link>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShortViewFriends