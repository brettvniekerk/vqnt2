import React, { forwardRef, LegacyRef, TextareaHTMLAttributes } from "react";

type PickedInputProps = Pick<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "name" | "required" | "placeholder" | "value" | "onChange"
>;

type RequiredProps = Required<Pick<PickedInputProps, "name">>;

type Props = PickedInputProps & RequiredProps;

const _TextAreaInput = (
  { name, required, placeholder, value, onChange }: Props,
  ref: LegacyRef<HTMLTextAreaElement>
) => {
  return (
    <textarea
      ref={ref}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-oldschool-black px-1 block rounded-[2px]"
    />
  );
};

const TextAreaInput = forwardRef(_TextAreaInput);

export default TextAreaInput;
