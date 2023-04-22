import React from 'react'

const Intro = () => {
  return (
    <div className='rounded-lg bg-surface dark:bg-surfaceDark'>
      <div className='px-4 pt-5 pb-1 h-4 box-content'>
        <h2 className='text-2024 font-bold text-primaryText dark:text-primaryTextDark'>Giới thiệu</h2>
      </div>

      <div className='pb-5'>
        <div className='px-4 pt-4'>
          <div className='flex justify-center items-center h-9 rounded-lg bg-black/10 dark:bg-white/10'>
            <span className='text-1618 text-primaryText dark:text-primaryTextDark font-medium'>Chỉnh sửa tiểu sử</span>
          </div>
        </div>
        <div className='px-4 pt-4'>
          <div className='flex justify-center items-center h-9 rounded-lg bg-black/10 dark:bg-white/10'>
            <span className='text-1618 text-primaryText dark:text-primaryTextDark font-medium'>Chỉnh sửa chi tiết</span>
          </div>
        </div>
        <div className='px-4 pt-4'>
          <div className='flex justify-center items-center h-9 rounded-lg bg-black/10 dark:bg-white/10'>
            <span className='text-1618 text-primaryText dark:text-primaryTextDark font-medium'>Chỉnh sửa sở thích</span>
          </div>
        </div>
        <div className='px-4 pt-4'>
          <div className='flex justify-center items-center h-9 rounded-lg bg-black/10 dark:bg-white/10'>
            <span className='text-1618 text-primaryText dark:text-primaryTextDark font-medium'>Thêm nội dung đáng chú ý</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro