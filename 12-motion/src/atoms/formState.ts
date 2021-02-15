import { atom, selector } from "recoil";
import { FormType } from "../@types/types";

type FormState = {
  formType: FormType;
};
const formState = atom<FormState>({
  key: "form",
  default: {
    formType: "url",
  },
});
export const getFormType = selector({
  key: "getFormType",
  get: ({ get }) => {
    const { formType } = get(formState);
    return formType;
  },
});

export default formState;
