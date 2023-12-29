import React from 'react'

let arr = [
    {
      "orderId": "#572391",
      "transactionId": "764829105639",
      "refundDate": "Today, 10:45 AM",
      "orderAmount": "₹8,250.00"
    },
    {
      "orderId": "#193847",
      "transactionId": "502938475601",
      "refundDate": "Yesterday, 6:30 PM",
      "orderAmount": "₹11,550.00"
    },
    {
      "orderId": "#894562",
      "transactionId": "346781290534",
      "refundDate": "Today, 2:15 PM",
      "orderAmount": "₹7,890.00"
    },
    {
      "orderId": "#657812",
      "transactionId": "920384756123",
      "refundDate": "Yesterday, 5:00 PM",
      "orderAmount": "₹12,750.00"
    },
    {
      "orderId": "#435678",
      "transactionId": "609283475618",
      "refundDate": "Today, 12:00 PM",
      "orderAmount": "₹10,480.00"
    },
    {
      "orderId": "#768490",
      "transactionId": "159273846205",
      "refundDate": "Yesterday, 4:45 PM",
      "orderAmount": "₹13,200.00"
    }
  ]
  
const RefundsTable = () => {
 
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
                            <td className=' text-[#146EB4] text-left w-full text-sm leading-5 font-normal'>{el.orderId}</td>
                            <td scope="col" class=" w-full text-sm leading-5 font-normal text-[#4D4D4D] flex gap-1 items-center"><div className={`h-[8px] w-[8px] ${ind == 1 ? 'bg-[#999999]' : 'bg-[#33b73c]'} ] rounded-full`}></div><p>{ind == 1 ? 'Proccessing' : 'Successful'}</p></td>
                            <td scope="col" class="text-left w-full text-sm leading-5 font-normal text-[#4D4D4D]">
                                {el.transactionId}
                            </td>
                            <td scope="col" class="text-left w-full text-sm leading-5 font-normal text-[#4D4D4D]">
                                {el.refundDate}
                            </td>

                            <td scope="col" class=" text-right w-full text-sm leading-5 font-normal text-[#4D4D4D]">{el.orderAmount}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default RefundsTable