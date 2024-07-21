import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {

    const headerMean = [

        {
            id: 1,
            name: "Ride",
            icon: "/taxi.png"
        },
        {
            id: 2,
            name: "Package",
            icon: "/box.png"
        },

    ]
    return (
        <div className='p-4 pb-3 pl-10 border-b-[$20px] border-gray-200 flex items-center justify-between'>
            <div className='flex gap-20 items-center'>
                <Image src='/easydrop.png'
                    width={50} height={50}
                    alt='logo' />
                <div className='flex gap-6 items-center'>
                    {headerMean.map((item, index) => (
                        <div key={index} className='flex gap-2 items-center'>
                            <Image src={item.icon}
                                width={25} height={25} />
                            <h2 className='text-[14px] font-medium'> {item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{width:"36px",height:"35px"}}>

            <UserButton />
            </div>
        </div>
    )
}

export default Header
