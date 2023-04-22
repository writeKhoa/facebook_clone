import React, { FC } from 'react';
import { SelectIcon, UnSelectIcon } from '@/components/commons/Icons';

interface Props {
  props: {
    Icon: FC<{ width?: number, height?: number }>;
    title: string;
    desc?: string;
  }

  isSelect: boolean;
  onSelectAudiance: () => void
}

const AudianceItem: FC<Props> = ({ props, isSelect, onSelectAudiance }) => {
  const { Icon, title, desc } = props

  return (
    <div className='px-2'>
      <div className='flex items-center px-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'
        onClick={onSelectAudiance}
      >

        <div className='shrink-0 flex justify-center items-center w-[60px] h-[60px] my-2 mr-3 rounded-full bg-black/10 dark:bg-white/10 box-content'>
          <Icon width={24} height={24} />

        </div>

        <div className='flex justify-between items-center w-full'>
          <div className='flex flex-col'>
            <span className='text-primaryText dark:text-primaryTextDark font-semibold text-1720'>{title}</span>
            {desc && <span className='text-1520 text-secondaryText dark:text-secondaryTextDark'>{desc}</span>}
          </div>

          <div>
            {
              isSelect ? <SelectIcon /> : <UnSelectIcon />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudianceItem