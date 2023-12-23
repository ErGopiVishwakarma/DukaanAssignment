import React from 'react'

const PayoutTable = () => {
    let arr = new Array(7).fill(0)
    return (
        <table class="w-full flex flex-col "  >
            <thead class="">
                <tr className=' bg-[#F2F2F2] flex gap-10 w-full  px-3 py-[10px] '>
                    <th scope="col" class=" w-full text-sm leading-5 font-medium text-[#4D4D4D]"></th>
                    <th scope="col" class=" w-full text-sm leading-5 font-medium text-[#4D4D4D]"></th>
                    <th scope="col" class=" w-full text-sm leading-5 font-medium text-[#4D4D4D] text-left">
                        Transaction ID
                    </th>
                    <th scope="col" class="text-right w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Order amonut
                    </th>
                    <th scope="col" class="text-right w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Transaction fees
                    </th>
                    <th scope="col" class=" text-right w-full text-sm leading-5 font-medium text-[#4D4D4D]">
                        Total
                    </th>
                </tr>
            </thead>
            <tbody className=' w-full'>
                {
                    arr?.map((el,ind) => {
                        return <tr className={`flex gap-10 w-full  px-3 py-[14px] ${arr.length == ind + 1 ? '' : 'shadow-sm'}`}>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D]"></td>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D] flex gap-1 items-center"><div className=' h-[10px] w-[10px] bg-[#999999] rounded-full'></div><p>Processing</p></td>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                131634495747
                            </td>
                            <td scope="col" class="text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                ₹10,125.00
                            </td>
                            <td scope="col" class="text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                ₹1,125.00
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

export default PayoutTable