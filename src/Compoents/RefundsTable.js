import React from 'react'

const RefundsTable = () => {
    let arr = new Array(6).fill(0)
    return (
        <table class="w-full flex flex-col " >
            <thead class="">
                <tr className=' bg-[#F2F2F2] flex gap-10 w-full  px-3 py-[10px] '>
                    <th scope="col" class="text-left w-full text-sm leading-5 font-medium text-[#4D4D4D]">Order ID</th>
                    <th scope="col" class="text-left w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Status
                    </th>
                    <th scope="col" class=" text-left w-full text-sm leading-5 font-medium text-[#4D4D4D] ">
                        Transaction ID
                    </th>

                    <th scope="col" class="text-left w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Refund date
                    </th>
                    <th scope="col" class=" text-right w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Order amount
                    </th>
                </tr>
            </thead>
            <tbody className=' w-full'>
                {
                    arr?.map((el, ind) => {
                        return <tr className={`flex gap-10 w-full  px-3 py-[14px] ${arr.length == ind + 1 ? '' : 'shadow-sm'}`}>
                            <td className=' text-[#146EB4] text-left w-full text-sm leading-5 font-normal'>#281208</td>
                            <td scope="col" class=" text-left w-full text-sm leading-5 font-normal text-[#4D4D4D] flex gap-1 items-center"><div className=' h-[10px] w-[10px] bg-[#999999] rounded-full'></div><p>Processing</p></td>
                            <td scope="col" class="text-left w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                131634495747
                            </td>
                            <td scope="col" class="text-left w-full text-sm leading-5 font-normal text-[#4D4D4D]">
                                Yesterday, 3:00 PM
                            </td>

                            <td scope="col" class=" text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">₹9,312
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default RefundsTable