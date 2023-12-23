import React, { useState } from 'react'
import search from '../Icons/search.png'
import help from '../Icons/Help.png'
import group from '../Icons/Group.png'
import menu from '../Icons/Menu.png'
import sort from '../Icons/sort.png'
import rightArrow from '../Icons/rightArrow.png'
import download from '../Icons/download.png'
import PayoutTable from '../Compoents/PayoutTable'
import RefundsTable from '../Compoents/RefundsTable'


const MainSection = () => {
  const [activeTab, setActiveTab] = useState('payout');

  return (
    <div className='flex flex-col w-full' style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* top navbar div  */}
      <div className='flex px-8 py-3  gap-4 shadow-md'>
        <div className=' w-[100%] flex gap-1 items-center justify-center'>
          <img src={help} className=' h-[14px] w-[14px]' />
          <p className=' text-xs text-[#4D4D4D]'>How It Works</p>
        </div>
        <div className=' w-[100%] px-4 py-[9px] bg-[#F2F2F2] rounded-md'>
          <div className=' flex items-center gap-1  '>
            <img src={search} className='h-4 w-4' />
            <input className='bg-[#F2F2F2] text-[#808080] text-[15px] font-normal leading-[22px] focus:outline-none' placeholder='search features, tutorial etc' />
          </div>
        </div>
        <div className=' w-[100%] flex items-center justify-end gap-3 '>
          <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#E6E6E6]'>
            <img className=' h-5 w-5  ' src={group} />
          </div>
          <img className=' w-10 h-10 ' src={menu} />
        </div>
      </div>

      {/* bottom div   */}
      <div className=' p-8  flex flex-col gap-8'>
        {/* overview div  */}
        <div className='flex flex-col gap-6'>
          <div className=' flex justify-between'>
            <p className=' text-[20px] font-medium leading-7 text-[#1A181E]'>Overview</p>
            <select className=' text-base leading-6 border-[1px] border-solid border-[#D9D9D9] bg-[#FFFFFF] rounded'>
              <option>This Month</option>
            </select>
          </div>
          <div className=' flex gap-4'>
            <div className=' flex flex-col w-full rounded-lg bg-[#146EB4] shadow-md'>
              <div className='flex flex-col gap-4 p-5  '>
                <div className='flex gap-1 text-base items-center text-[#FFF] opacity-80'>
                  <p>Next Payout</p>
                  <img src={help} className=' h-4 w-4 text-[#FFF] opacity-80' />
                </div>
                <div className='flex justify-between w-full'>
                  <p className='text-[#FFFFFF]'>₹ 2,312.23</p>
                  <div className=' text-[#FFFFFF] underline decoration-1 flex gap-1 '><p>23 orders </p><img src={rightArrow} /></div>
                </div>
              </div>
              <div className='flex justify-between px-6 py-2 text-sm bg-[#0E4F82] text-[#F2F2F2] rounded-lg'>
                <p>Next payout date:</p>
                <p>Today, 04:00pm</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-5  rounded-lg w-full shadow-md h-fit'>
              <div className='flex gap-1 text-base items-center'>
                <p>Amount Pending</p>
                <img src={help} className=' h-4 w-4' />
              </div>
              <div className='flex justify-between'>
                <p>₹ 2,312.23</p>
                <p className=' text-[#146EB4]'>{`23 orders >`}</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-5  rounded-lg w-full h-fit shadow-md'>
              <div className='flex gap-1 text-base items-center'>
                <p>Amount Processed</p>
                <img src={help} className=' h-4 w-4' />
              </div>
              <div className='flex justify-between'>
                <p>₹ 2,312.23</p>
              </div>
            </div>
          </div>
        </div>
        {/* table div  */}
        <div className=' flex flex-col gap-5'>
          {/* top div  */}
          <div className=' flex flex-col gap-5'>
            <p className=' text-[20px]'>Transactions | This Month</p>
            <div className=' flex gap-[6px]'>
              <button className={`text-sm px-4 py-[6px] rounded-2xl  ${activeTab == 'payout' ? 'bg-[#146EB4] text-[#FFFFFF]' : 'bg-[#E6E6E6] text-[#808080]'} `} onClick={() => setActiveTab('payout')}>Payouts (22)</button>
              <button className={`text-sm px-4 py-[6px] rounded-2xl ${activeTab == 'refund' ? 'bg-[#146EB4] text-[#FFFFFF]' : 'bg-[#E6E6E6] text-[#808080]'} `} onClick={() => setActiveTab('refund')}>Refunds (2)</button>
            </div>
          </div>
          {/* <middle div  */}
          <div className=' flex flex-col p-3 gap-3 bg-[#ffffff]'>
            <div className=' flex justify-between w-full'>
              <div className=' w-fit px-4 py-[10px]  rounded-md border-[1px] border-solid border-[#D9D9D9]'>
                <div className=' flex items-center gap-1  '>
                  <img src={search} className='h-4 w-4' />
                  <input className=' text-[#808080] text-[15px] font-normal leading-[22px] focus:outline-none' />
                </div>
              </div>
              <div className=' flex gap-3 h-9 items-center w-auto '>
                <div className=' flex py-[6px] px-3 gap-[6px] items-center border-[1px] border-solid border-[#D9D9D9] rounded '>
                  <p className=' text-base'>Sort</p>
                  <img src={sort} className=' h-4 w-4 ' />
                </div>
                <div className=' border-[1px] border-solid border-[#D9D9D9] h-9 px-3 rounded flex justify-center items-center'>
                  <img src={download} className='h-5 w-5' />
                </div>
              </div>
            </div>
            {/* tavle lasdkfj  */}
            <div class="relative overflow-x-auto shadow-md rounded-lg">
              {
                activeTab == 'payout' ? <PayoutTable /> : <RefundsTable />
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainSection
