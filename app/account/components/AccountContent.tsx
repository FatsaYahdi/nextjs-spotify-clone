'use client'

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AccountContent = () => {
    const router = useRouter()
    const {isLoading, user} = useUser()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!loading && !user) router.replace('/')

    }, [isLoading, user, router])
    // const redirect = async () => {
    //     setLoading(true)
    //     try {
    //         const {url, error} = await postData({
    //             url: '/api/create-portal-link'
    //         })
    //         window.location.assign(url)
    //     } catch (error) {
    //         if (error) toast.error((error as Error).message)
    //     }
    //     setLoading(false)
    // }
    return ( 
        <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                <p>Hello</p>
                {/* <Button className="w-[300px]" disabled={loading || isLoading} onClick={redirect}>
                    Open Customer Portal
                </Button> */}
            </div>
        </div>
    );
}
 
export default AccountContent;