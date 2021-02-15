import React from "react";
import { DeepMap, FieldErrors } from "react-hook-form";

type UrlInputs = {
  title: string;
  url: string;
};

interface UrlFormProps {
  titleRef?: React.LegacyRef<HTMLInputElement>;
  urlRef?: React.LegacyRef<HTMLInputElement>;
  errors?: DeepMap<UrlInputs, FieldErrors>;
  onToggle: () => void;
  onSubmit: React.MouseEventHandler<HTMLInputElement>;
}

class UrlForm extends React.Component<UrlFormProps> {
  render() {
    const { titleRef, urlRef, errors, onSubmit } = this.props;
    return (
      <>
        <label about="title" htmlFor={"title"}>
          Title
        </label>
        <input id="title" name="title" defaultValue={""} ref={titleRef} />
        <label about="url" htmlFor={"url"}>
          URL
        </label>
        {errors && errors.url && <span>This is Required field</span>}
        <input id="url" name="url" defaultValue={""} ref={urlRef} />

        <input type="submit" onClick={onSubmit} value="ADD" />
      </>
    );
  }
}

export default UrlForm;
