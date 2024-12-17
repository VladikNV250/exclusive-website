import { useCallback, useState } from "react";
import MethodRadio from "./components/MethodRadio/MethodRadio";
import classes from "./PaymentMethod.module.scss";
import { PaymentMethod, PaymentMethodRadio } from "./types/types";
import CardForm from "./components/CardForm/CardForm";


export function PaymentMethod() {
    const methods: PaymentMethodRadio[] = [
        {name: "Cash on delivery", method: "on-delivery"},
        {name: "Bank", method: "by-card"},
    ]
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("on-delivery")

    const handleChange = (method: PaymentMethod) => {
        setSelectedMethod(method);
    }

    return (
        <div>
            <MethodRadio 
                methods={methods} 
                selectedMethod={selectedMethod} 
                onChange={handleChange}
            />
            {selectedMethod === "by-card" &&
            <CardForm />
            }
        </div>
        
    )
}