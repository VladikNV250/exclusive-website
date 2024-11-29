import classes from "./ModalVideo.module.scss";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export default function ModalVideo({isOpen, setIsOpen, children}: Props) {
    const modal = isOpen ? classes["modal-open"] : classes.modal;

  return (
    <div onClick={() => setIsOpen(false)} className={modal}>
      {children}
    </div>
  )
}
