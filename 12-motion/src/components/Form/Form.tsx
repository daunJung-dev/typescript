import { css, Theme, useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import useModal from "../../hooks/useModal";
import { TextForm, UrlForm } from "./components";

interface Props {}

type Inputs = {
  title: string;
  url: string;
};

const Form = (props: Props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [, handleToggleModal, formType] = useModal();
  const theme = useTheme();
  const onSubmit = (data: any) => {
    console.log(data);
    handleToggleModal();
  };
  console.log(formType);

  return (
    <form css={formStyle(theme)} onSubmit={handleSubmit(onSubmit)}>
      {formType === "url" ? (
        <UrlForm
          errors={errors}
          titleRef={register}
          onToggle={handleToggleModal}
          urlRef={register({ required: true })}
          onSubmit={handleSubmit(onSubmit)}
        />
      ) : (
        <TextForm
          errors={errors}
          titleRef={register}
          onToggle={handleToggleModal}
          bodyRef={register({ required: true })}
          onSubmit={handleSubmit(onSubmit)}
        />
      )}
    </form>
  );
};

const formStyle = (theme: Theme) =>
  css({
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "100%",
    label: {
      paddingTop: "1rem",
      paddingBottom: "0.5rem",
    },
    "input:last-of-type": {
      alignSelf: "flex-end",
      marginTop: "1rem",
      width: "5rem",
      height: "2.5rem",
      background: theme.color.secondary,
      color: "white",
      border: `1px solid ${theme.color.primary}`,
      borderRadius: "0.5rem",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  });

export default Form;
