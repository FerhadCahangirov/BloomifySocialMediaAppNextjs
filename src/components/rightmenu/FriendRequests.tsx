import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function FriendRequests() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-gray-500'>Friends Request</span>
                <Link href="/" className='text-blue-500 text-xs'>See All</Link>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-4'>
                    <Image
                        src="https://images.pexels.com/photos/29076255/pexels-photo-29076255/free-photo-of-vibrant-indoor-market-scene-with-stalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover" />
                    <span>Thomas Hudson</span>
                </div>
                <div className="flex justify-end gap-4">
                    <Image
                        src="/accept.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image
                        src="/reject.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                </div>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-4'>
                    <Image
                        src="https://images.pexels.com/photos/29076255/pexels-photo-29076255/free-photo-of-vibrant-indoor-market-scene-with-stalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover" />
                    <span>Thomas Hudson</span>
                </div>
                <div className="flex justify-end gap-4">
                    <Image
                        src="/accept.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image
                        src="/reject.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                </div>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-4'>
                    <Image
                        src="https://images.pexels.com/photos/29076255/pexels-photo-29076255/free-photo-of-vibrant-indoor-market-scene-with-stalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover" />
                    <span>Thomas Hudson</span>
                </div>
                <div className="flex justify-end gap-4">
                    <Image
                        src="/accept.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image
                        src="/reject.png"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default FriendRequests