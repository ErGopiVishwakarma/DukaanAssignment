import React from 'react'

let arr = [
    {
        "transactionId": "289743526981",
        "orderAmount": "₹8,550.00",
        "transactionFees": "₹950.00",
        "total": "₹7,635.00"
    },
    {
        "transactionId": "564738291034",
        "orderAmount": "₹12,350.00",
        "transactionFees": "₹1,750.00",
        "total": "₹10,580.00"
    },
    {
        "transactionId": "785634920172",
        "orderAmount": "₹6,890.00",
        "transactionFees": "₹750.00",
        "total": "₹6,140.00"
    },
    {
        "transactionId": "102938475606",
        "orderAmount": "₹14,200.00",
        "transactionFees": "₹2,000.00",
        "total": "₹12,150.00"
    },
    {
        "transactionId": "457812930645",
        "orderAmount": "₹9,750.00",
        "transactionFees": "₹1,100.00",
        "total": "₹8,645.00"
    },
    {
        "transactionId": "673829104567",
        "orderAmount": "₹11,480.00",
        "transactionFees": "₹1,280.00",
        "total": "₹10,200.00"
    }
]

const PayoutTable = () => {

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
                    arr?.map((el, ind) => {
                        return <tr className={`flex gap-10 w-full  px-3 py-[14px] ${arr.length == ind + 1 ? '' : 'shadow-sm'}`}>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D]"></td>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D] flex gap-1 items-center"><div className={`h-[8px] w-[8px] ${ind == 0 ? 'bg-[#999999]' : 'bg-[#33b73c]'} ] rounded-full`}></div><p>{ind == 0 ? 'Proccessing' : 'Successful'}</p></td>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                {el.transactionId}
                            </td>
                            <td scope="col" class="text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                {el.orderAmount}
                            </td>
                            <td scope="col" class="text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">

                                {el.transactionFees}
                            </td>
                            <td scope="col" class=" text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">{el.total}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default PayoutTable
