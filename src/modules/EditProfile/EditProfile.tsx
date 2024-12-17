import ProfileFormInput from "./components/ProfileFormInput/ProfileFormInput";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import SaveChanges from "./components/SaveChanges/SaveChanges";
import classes from "./EditProfile.module.scss";

interface Props {
    user: {
        firstName: string,
        lastName: string,
        email: string,
        address: string,
    }
}

export function EditProfile({user}: Props) {
    return (
        <div className={classes["form-container"]}>
            <ProfileHeader>
                Edit Your Profile
            </ProfileHeader>
            <form action="" className={classes["form"]}>
                <div className={classes["inputs-container__grid"]}>
                    <ProfileFormInput 
                        label="First Name"
                        name="first-name"
                        placeholder={user.firstName}
                    />
                    <ProfileFormInput 
                        label="Last Name"
                        name="last-name"
                        placeholder={user.lastName}
                    />
                </div>
                <div className={classes["inputs-container__grid"]}>
                    <ProfileFormInput 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder={user.email}
                    />                
                    <ProfileFormInput 
                        label="Address"
                        name="main-address"
                        placeholder={user.address}
                    />
                </div>
                <div className={classes["inputs-container__flex"]}>
                    <ProfileFormInput 
                        label="Password Changes" 
                        name="current-password" 
                        type="password" 
                        placeholder="Current Password"
                    />
                    <ProfileFormInput 
                        name="new-password" 
                        type="password" 
                        placeholder="New Password"
                    />
                    <ProfileFormInput 
                        name="confirm-password" 
                        type="password" 
                        placeholder="Confirm New Password"
                    />
                </div>
                <SaveChanges />
            </form>
        </div>
        
    )
}