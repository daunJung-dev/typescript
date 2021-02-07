import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { ModalType } from "../@types/types";
import modalState from "../stores/modalState";

export const useModal = () => {
  const [state, setState] = useRecoilState(modalState);

  const { isOpen, modalType } = state;

  const onToggleModal = useCallback(() => {
    setState({
      ...state,
      isOpen: !state.isOpen,
    });
  }, [state, setState]);

  const onChangeModalType = useCallback(
    (type: ModalType) => {
      setState({
        ...state,
        modalType: type,
      });
    },
    [state, setState]
  );

  return [isOpen, modalType, onToggleModal, onChangeModalType] as const;
};

export default useModal;
