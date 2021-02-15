import React from "react";
import { DeepMap, FieldErrors } from "react-hook-form";

type TextInputs = {
  title: string;
  body: string;
};

interface TextFormProps {
  titleRef?: React.LegacyRef<HTMLInputElement>;
  bodyRef?: React.LegacyRef<HTMLInputElement>;
  errors?: DeepMap<TextInputs, FieldErrors>;
  onToggle: () => void;
  onSubmit: React.MouseEventHandler<HTMLInputElement>;
}

type MotionTextFormState = { content: string };

class TextForm extends React.Component<TextFormProps, MotionTextFormState> {
  render() {
    const { titleRef, bodyRef, errors, onSubmit } = this.props;
    return (
      <>
        <label about="title" htmlFor={"title"}>
          Title
        </label>
        <input id="title" name="title" defaultValue={""} ref={titleRef} />
        <label about="body" htmlFor={"body"}>
          Body
        </label>
        {errors && errors.body && <span>This is Required field</span>}
        <input id="body" name="body" defaultValue={""} ref={bodyRef} />

        <input type="submit" onClick={onSubmit} value="ADD" />
      </>
    );
  }
}

export default TextForm;
