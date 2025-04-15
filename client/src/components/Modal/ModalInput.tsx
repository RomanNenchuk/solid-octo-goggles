import { forwardRef } from "react";

type CustomInputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  pattern?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
};

const ModalInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      id,
      label,
      placeholder,
      type = "text",
      pattern,
      required = false,
      className = "",
      labelClassName = "",
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className={`block mb-1 text-sm font-medium text-[#333] ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          pattern={pattern}
          placeholder={placeholder}
          className={`mb-4 p-3 border border-[#000] rounded-md bg-[#fff] w-[100%]
              placeholder-[#666] focus:outline-none focus:ring-1 focus:ring-[#000] ${className}`}
          required={required}
        />
      </div>
    );
  }
);

export default ModalInput;
