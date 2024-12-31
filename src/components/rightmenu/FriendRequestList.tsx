"use client"

import React, { useOptimistic, useState } from 'react'
import Image from 'next/image'
import { FollowRequest, User } from '@prisma/client'
import { acceptFollowRequest, declineFollowRequest } from '@/lib/action'

type RequestWithUser = FollowRequest & {
    sender: User
}

function FriendRequestList({ requests }: { requests: RequestWithUser[] }) {

    const [requestState, setRequestState] = useState<RequestWithUser[]>(requests);

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequests(requestId);
        try {
            await acceptFollowRequest(userId);
            setRequestState(prev => prev.filter(req => req.id !== requestId));
        }
        catch (err) { }
    }

    const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequests(requestId);
        try {
            await declineFollowRequest(userId);
            setRequestState(prev => prev.filter(req => req.id !== requestId));
        }
        catch (err) { }
    }

    const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
        requestState,
        (state, value: number) => state.filter(req => req.id !== value)
    );

    return (
        <>
            {
                optimisticRequests.map(request => (
                    <div className='flex items-center justify-between ' key={request.id}>
                        <div className='flex items-center gap-4'>
                            <Image
                                src={request.sender.avatar || "/noAvatar.png"}
                                alt=""
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full object-cover" />
                            <span>{(request.sender?.name && request.sender.surname) ? request.sender.name + " " + request.sender.surname : request.sender?.username}</span>
                        </div>
                        <div className="flex justify-end gap-4">
                            <form action={() => accept(request.id, request.senderId)}>
                                <button>
                                    <Image
                                        src="/accept.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="cursor-pointer" />
                                </button>

                            </form>
                            <form action={() => decline(request.id, request.senderId)}>
                                <button>
                                    <Image
                                        src="/reject.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="cursor-pointer" />
                                </button>
                            </form>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default FriendRequestList