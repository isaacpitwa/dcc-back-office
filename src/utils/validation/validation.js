import { useForm } from "react-hook-form";
const { handleSubmit, register, errors } = useForm();

export const validateEmail = () =>register({
    required: "Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "invalid email address"
    }
  })
  