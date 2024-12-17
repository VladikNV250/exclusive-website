import FormInput from "../../components/FormInput/FormInput";
import SaveCheckbox from "./components/SaveCheckbox/SaveCheckbox";
import classes from "./DetailsForm.module.scss";

export function DetailsForm() {
    return (
        <form className={classes["form"]} id="details-form" action="">
            <FormInput name="first-name" label="First Name" type="text" required />
            <FormInput name="company-name" label="Company Name" type="text" />
            <FormInput name="street-address" label="Street Address" type="text" required />
            <FormInput name="apartment" label="Apartment, floor, etc. (optional)" type="text" />
            <FormInput name="city" label="Town/City" type="text" required />
            <FormInput name="phone-number" label="Phone Number" type="number" required />
            <FormInput name="email" label="Email Address" type="email" required />
            <SaveCheckbox />
        </form>
    )
}