import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image'
import React from 'react'

function AddPost() {

    const {userId} = auth();

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
            {/* AVATAR */}
            <Image
                src="https://images.pexels.com/photos/3427728/pexels-photo-3427728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={48}
                height={48}
                alt=""
                className="w-12 h-12 object-cover rounded-full"
            ></Image>

            {/* POST */}
            <div className="flex-1">

                {/* TEXT INPUTS */}
                <form action="" className="flex gap-4">
                    <textarea placeholder="What's on your mind?" className='flex-1 bg-slate-100 rounded-lg p-2' name='desc'></textarea>
                    <Image
                        src="/emoji.png"
                        width={20}
                        height={20}
                        alt=""
                        className="w-5 h-5 cursor-pointer self-end"
                    ></Image>
                    <button>Send</button>
                </form>

                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addImage.png"
                            width={20}
                            height={20}
                            alt=""
                        ></Image>
                        Photos
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addVideo.png"
                            width={20}
                            height={20}
                            alt=""
                        ></Image>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/poll.png"
                            width={20}
                            height={20}
                            alt=""
                        ></Image>
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addEvent.png"
                            width={20}
                            height={20}
                            alt=""
                        ></Image>
                        Event
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddPost