import classes from "./Message.module.scss";
import { MessageType } from "./types/messageTypes";

export default function makeClass(status: MessageType["status"]): string {
    switch (status) {
        case "simple": return classes["message-simple"];
        default: return classes["message"]
    }
}