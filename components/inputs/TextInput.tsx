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
        "border border-oldschool-black px-1 block rounded-[2px]",
        {
          hidden
        }
      )}
    />
  );
};

const TextInput = forwardRef(_TextInput);

export default TextInput;
