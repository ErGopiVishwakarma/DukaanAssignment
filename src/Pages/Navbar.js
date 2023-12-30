import React from 'react'
import data from '../Compoents/svgFile'

const Navbar = () => {
  return (
    <div className=' w-56 gap-4  h-[100vh] flex px-[10px] flex-col bg-[#1E2640] py-4 sticky top-0 items-center' style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* top section  */}
      <div className=' flex flex-col gap-6 h-[100%] items-center'>
        <div className='flex justify-between items-center w-48 '>
          <div className='flex gap-3'>
            <img src='https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1704067200&Signature=H~uS3DJWoUk3Mt34HePdNdEHwWddO~To5UR50YtDRYkyeIGjQkRZcoUOTftRD5yQRfYJ2r-wPlD7ZUCnU4zvLPPZJ-GoURTTXlCSvi2KUOZMF0S5pTbk~3Ce6tIvt-2wtx1ZHVbNIIuIsPHa0YxO1x7N4MVtoS9Z7-CpCYHxKWzrmT6Cyc7uk9-mKH~YA9qBqXGr1WEGQMog4s7LFR4qs9EK6wTTAKvtd7o4C0bV2o2jhqNWUEISPvCWueE7vQzrjtIOuA1jRWZsvC6GV0y4bbVV4Rv8X-9700pRa9qNmWOXPq8HQvVczcbI3UlRKC6bg9SVdPdQSYZpsxMl7NAYIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className=' h-[39px] w-[39px] rounded' />
            <div className=' w-[108px] flex flex-col'>
              <p className=' text-[15px] text-[#FFFFFF] leading-[22px]' >Nishyan</p>
              <a href='#'><p className=' text-[13px] opacity-80 text-[#FFFFFF] underline'>Visit store</p></a>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
          </svg>
        </div>
        {/* middle section  */}
        <div className=' flex flex-col gap-1 '>

          {
            data?.map((el) => {
              return <div className=' flex py-2 px-4 w-52  gap-3 rounded opacity-80 font-medium h-9'>
                {el.svg}
                <p className='text-[#FFF] leading-5 text-sm'>{el.title}</p>
              </div>
            })
          }


        </div>
      </div>
      {/* bottom section  */}
      <div className='flex gap-[10px] items-center bottom-0 py-[6px] px-3 bg-[#353C53] rounded relative w-48 '>
        <div className=' p-[6px] bg-[#FFFFFF1A] rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z" fill="white" />
          </svg>
        </div>
        <div className=' w-[108px] flex flex-col'>
          <p className=' text-[13px] text-[#FFFFFF] leading-[22px] opacity-80'>Available credits</p>
          <a href='#'><p className=' text-[#FFFFFF] text-[16px] leading-6'>222.10</p></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar