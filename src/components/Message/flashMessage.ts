import { Dispatch, SetStateAction } from "react";
import { MessageType } from "./types/messageTypes";

interface Props {
    message: MessageType["messageBody"];
    setMessage: Dispatch<SetStateAction<MessageType>>;
    delay: number;
}

export default function flashMessage({message, setMessage, delay = 2000}: Props) {
    setTimeout(() => {
        setMessage({status: "none", messageBody: message});
    }, delay)
}