// import { ResponseType } from "@/modules/Application/api/types/formTypes";
import { Dispatch, SetStateAction } from "react";
import makeClass from "./makeClass";
import { MessageType } from "./types/messageTypes";

interface Props {
    message: MessageType;
    setMessage: Dispatch<SetStateAction<MessageType>>;
}

export default function Message({message, setMessage}: Props) {
    const {status, messageBody} = message;
    const classMesage = makeClass(status);

  return (
    <div className={classMesage}>
        {messageBody}
    </div>
  )
}
