import { ArrowDownIcon, PrivateIcon } from '@/components/commons/Icons';
import { User } from '@/models';
import { HeaderPost } from '@/store';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { audianceConfig, feelings } from "@/configs"

interface Props {
  user: User;
  onOpenAudiance: () => void;
  headerPost: HeaderPost
  onOpenTagForm: () => void
}

const UserAndAudiance: FC<Props> = ({ user, headerPost, onOpenAudiance, onOpenTagForm }) => {
  const handleClickTagUser = () => onOpenTagForm()
  return (
    <div className="flex w-full">
      <div className="mr-3 shrink-0">
        <LazyLoadImage
          src={user?.avatarUrl}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col text-1214 -my-2 w-full">
        <div className='block'>
          <span className="-py-1 text-primaryText dark:text-primaryTextDark font-semibold text-1520">
            <span className='inline-block'>{user?.fullName}</span>

            <span className='inline-block'>
              {
                !!headerPost.feelings && <span className='flex gap-1 mx-1 text-1520 font-semibold text-primaryText dark:text-primaryTextDark'>
                  đang <LazyLoadImage
                    src={feelings[headerPost.feelings].src}
                    width={20}
                    height={20}
                  /> cảm thấy <>{feelings[headerPost.feelings].title}</>
                </span>
              }
            </span>

            {
              headerPost.tags.length > 0 && <>
                {
                  <span className='ml-1 font-semibold text-1520 text-primaryText dark:text-primaryTextDark'>
                    cùng với <>{
                      headerPost.tags.map((tag, index) => {
                        if (index > 3) {
                          return null
                        }
                        if (index > 2) {
                          return <span key={tag.tagId} className='mx-1 cursor-pointer'
                            onClick={handleClickTagUser}
                          >và {headerPost.tags.length - 3} người khác.</span>
                        }
                        if (index === headerPost.tags.length - 1 && headerPost.tags.length === 3) {
                          return <span key={tag.tagId} className="hover:underline mx-1 cursor-pointer"
                            onClick={handleClickTagUser}
                          >{tag.fullName}.</span>
                        }
                        return <span key={tag.tagId} className="hover:underline mx-1 cursor-pointer"
                          onClick={handleClickTagUser}
                        >{tag.fullName},</span>
                      })
                    }</>
                  </span>
                }
              </>
            }
          </span>
        </div>

        <div>
          <div className='inline-block' onClick={onOpenAudiance}>
            {
              audianceConfig.map(item => {
                const { Icon, title, audiance } = item;
                if (audiance === headerPost.audiance) {
                  return <div key={item.title} className="flex items-center mt-2 px-2 py-1 rounded-md bg-black/10 dark:bg-white/10 cursor-pointer">
                    <div className="text-primaryIcon dark:text-primaryIconDark">
                      <Icon />
                    </div>
                    <div className="mx-1">
                      <span className="text-1316 text-primaryText dark:text-primaryTextDark font-semibold">
                        {title}
                      </span>
                    </div>
                    <div>
                      <ArrowDownIcon />
                    </div>

                  </div>
                }
              })
            }

          </div>
        </div>
      </div>
    </div >
  )
}

export default UserAndAudiance