import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { FormType } from "../@types/types";
import formState from "../atoms/formState";
import modalState from "../atoms/modalState";

export const useModal = () => {
  const [_modalState, setModalState] = useRecoilState(modalState);
  const [_formState, setFormState] = useRecoilState(formState);
  const { isOpen } = _modalState;
  const { formType } = _formState;

  const onToggleModal = useCallback(() => {
    setModalState({
      isOpen: !_modalState.isOpen,
    });
  }, [_modalState, setModalState]);

  const onChangeFormType = useCallback(
    (type: FormType) => {
      setFormState({ formType: type });
    },
    [setFormState]
  );

  return [isOpen, onToggleModal, formType, onChangeFormType] as const;
};

export default useModal;
