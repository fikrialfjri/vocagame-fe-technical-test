"use client";

import { useState } from "react";

const Input = ({
  id,
  name,
  type = "text",
  placeholder = "",
  label = "",
  onChange,
  error = null,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e) => {
    setIsTouched(true);
    onChange(e);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-medium mb-2 ml-2 ${
          error?.status && isTouched
            ? "text-red-600 dark:text-red-500"
            : "dark:text-white"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`py-3 px-4 block w-full border rounded-full text-base duration-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-gray-600 ${
          error?.status && isTouched
            ? "border-red-600  focus:outline-red-600 dark:border-red-500"
            : "border-neutral-300 focus:outline-primary-400 dark:border-gray-600 dark:focus:outline-primary-400"
        }`}
        placeholder={placeholder}
      />
      {error?.status && isTouched && (
        <p class="ml-2 mt-1 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
