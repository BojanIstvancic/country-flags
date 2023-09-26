import {
  ReactNode,
  Ref,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/features/theme/themeSlice";
import { Theme } from "../../shared/types";

export interface ModalRefType {
  openModal: () => void;
}

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps, ref: Ref<ModalRefType>) => {
  const { theme } = useAppSelector(selectTheme);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
  }));

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full
      ${!isOpen && "hidden"} `}
    >
      <div
        className={`relative h-screen w-screen opacity-80 
        ${theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"}`}
        onClick={closeModal}
      ></div>
      <div
        className={`absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 p-4
        ${theme === Theme.DARK ? "bg-slate-700" : "bg-white"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default forwardRef(Modal);
