import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./Account.module.scss";
import { EditProfile } from "@/modules/EditProfile";
import Greeting from "./components/Greeting/Greeting";
import AccountNavigation from "./components/AccountNavigation/AccountNavigation";
import useTabs from "./hooks/useTabs";

export default function Account() {
    const links = [
        {name: "Home", url: "/"},
        {name: "My account", url: "/account"},
    ]
    const [accountTabs, currentTab, changeTab] = useTabs([
        {
            tabName: "Manage My Account",
            subTabs: ["My Profile", "Address Book", "My Payment Options"],
        },
        {
            tabName: "My Orders",
            subTabs: ["My Returns", "My Cancellations"],
        },
        {
            tabName: "My Wishlist",
            url: "/wishlist",
        }
    ]);

    const user = {
        firstName: "Vlad",
        lastName: "Nemichev",
        email: "vladiknemichev@gmail.com",
        address: "Kingston, 5236, United State",
    }
    
    return (
        <main className={classes["account"]}>
            <Roadmap links={links}>
                <Greeting 
                    firstName={user.firstName} 
                    lastName={user.lastName} 
                />
            </Roadmap>
            <section className={classes["account-section"]}>
                <div className={classes["account-container"]}>
                    <AccountNavigation 
                        accountTabs={accountTabs}
                        currentTab={currentTab}
                        onClick={changeTab}
                    />
                    <EditProfile user={user} />
                </div>
            </section>
        </main>
    )
}