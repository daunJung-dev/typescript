import { ModalType } from "./../@types/types";
import { atom, selector } from "recoil";

type ModalState = {
  isOpen: boolean;
  modalType: ModalType;
};

const modalState = atom<ModalState>({
  key: "modal",
  default: {
    isOpen: true,
    modalType: "url",
  },
});

export const getModalType = selector({
  key: "getModalType",
  get: ({ get }) => {
    const { modalType } = get(modalState);
    return modalType;
  },
});

export default modalState;
