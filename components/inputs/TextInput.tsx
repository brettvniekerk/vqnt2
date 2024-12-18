import classNames from "classnames";
import React, { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

type InputTypes = {
  type?: "text" | "email" | "password";
};

type PickedInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "name"
  | "required"
  | "placeholder"
  | "value"
  | "onChange"
  | "defaultValue"
  | "hidden"
  | "readOnly"
  | "autoComplete"
>;

type RequiredProps = Required<Pick<PickedInputProps, "name">>;

type Props = PickedInputProps & InputTypes & RequiredProps;

const _TextInput = (
  {
    name,
    type = "text",
    required = false,
    placeholder = undefined,
    defaultValue = undefined,
    value = undefined,
    onChange = undefined,
    hidden = false,
    readOnly = false,
    autoComplete = undefined
  }: Props,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      hidden={hidden}
      readOnly={readOnly}
      autoComplete={autoComplete}
      className={classNames(
        "border-b border-app-white placeholder-shown:border-app-white/10 bg-app-black text-app-white placeholder:text-app-white/50 py-2 w-full",
        {
          hidden
        }
      )}
    />
  );
};

const TextInput = forwardRef(_TextInput);

export default TextInput;
