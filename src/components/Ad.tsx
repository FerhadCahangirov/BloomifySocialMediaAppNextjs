import React from 'react'
import Image from 'next/image'

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
            {/* TOP */}
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>Sponsored Ad</span>
                <Image
                    src="/more.png"
                    alt=''
                    width={16}
                    height={16}
                />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
                <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
                    <Image
                        src="https://images.pexels.com/photos/29705625/pexels-photo-29705625/free-photo-of-stunning-aerial-view-of-quebec-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=''
                        fill
                        className='rounded-lg object-cover'
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <Image
                        src="https://images.pexels.com/photos/29705625/pexels-photo-29705625/free-photo-of-stunning-aerial-view-of-quebec-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=''
                        width={24}
                        height={24}
                        className='rounded-full w-6 h-6 object-cover'
                    />
                    <span className='text-blue-500 font-medium'>Most Fascinating Views</span>
                </div>
                <p className={`${size === "sm" ? 'text-xs' : 'text-sm'}`}>
                    {size === "sm" ? "  Lorem ipsum dolor sit amet consectetur, adipisicing elit." : size === "md" ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci consequuntur, quia omnis porro fugit tempora?" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci consequuntur, quia omnis porro fugit tempora? Laboriosam dolorem atque facilis similique beatae vel minus perferendis, sed aspernatur blanditiis eum sit nam?"}
                </p>
                <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
            </div>
        </div>
    )
}

export default Ad