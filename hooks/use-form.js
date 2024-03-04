import { useState } from "react";

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleFormChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return {
    state,
    handleFormChange,
    resetForm: () => setState(initialState),
    setForm: setState,
  };
};

export default useForm;
