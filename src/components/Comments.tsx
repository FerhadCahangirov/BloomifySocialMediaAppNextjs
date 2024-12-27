import React from 'react'
import Image from 'next/image'

function Comments() {
    return (
        <div>
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image
                    className="w-8 h-8 rounded-full"
                    src="https://images.pexels.com/photos/2906849/pexels-photo-2906849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={32} height={32}
                    alt=''>
                </Image>
                <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                    <input type='text' placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                    <Image
                        src="/emoji.png"
                        alt=''
                        width={16}
                        height={16}
                        className='cursor-pointer'
                    />
                </div>
            </div>

            {/* COMMENTS */}
            <div className=''>
                {/* AVATAR */}
                <div className=""></div>
                {/* DESC */}
                <div className=""></div>
                {/* Icon */}
                <div className=""></div>
            </div>
        </div>
    )
}

export default Comments