import { Button } from 'antd'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const OrderCard = ({ order }) => {
    return (
        <div className="flex relative flex-col justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm min-h-32">
            <span className='absolute right-2 top-2 text-xs leading-none py-[2px] px-1 bg-green-700 rounded-xl shadow-sm text-white'>{order.ostatus}</span>
            <div>
                <h2 className="text-base font-semibold">Order ID : {order.order_key}</h2>
                <p className="text-sm text-gray-600">Total Amount : Rs : {order.oamount}</p>
            </div>
            <Link target='_blank' to={`/orderdetails/${order.order_key}`}>
                <Button type='primary'>
                    Order Details
                </Button>
            </Link>
        </div>
    )
}

export default memo(OrderCard);