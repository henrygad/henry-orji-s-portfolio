import * as yup from "yup";

const contactForm = yup.object().shape({
  name: yup
    .string()
    .lowercase()
    .required("Your name is required"),
  email: yup
    .string()
    .lowercase()
    .email("Invalid email address")    
    .required("Your email is required"),
  message: yup
    .string()
    .required("Message field can't be empthy")
});

export default contactForm;
