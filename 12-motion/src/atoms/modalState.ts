import { atom } from "recoil";

type ModalState = {
  isOpen: boolean;
};

const modalState = atom<ModalState>({
  key: "modal",
  default: {
    isOpen: true,
  },
});

export default modalState;
