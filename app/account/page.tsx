import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

const Account = () => {
    return ( 
        <div className="h-full w-full rounded-lg bg-neutral-900 overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white font-semibold text-3xl">
                        Account Settings
                    </h1>
                </div>
            </Header>
            <AccountContent />
        </div>
     );
}
 
export default Account;