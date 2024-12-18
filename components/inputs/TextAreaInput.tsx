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
      className="border-b border-app-white placeholder-shown:border-app-white/10 bg-app-black text-app-white placeholder:text-app-white/50 py-2 w-full"
    />
  );
};

const TextAreaInput = forwardRef(_TextAreaInput);

export default TextAreaInput;
