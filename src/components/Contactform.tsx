import { useState } from "react";
import Form from "../ui/form/Contact";
import toast, { Toaster } from "react-hot-toast";
import type { contactFormProps } from "../types/contactForm.type";
import { type UseFormSetValue } from "react-hook-form";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const SERVICE_ID = import.meta.env.SERVICE_ID;
const TEMPLATE_ID = import.meta.env.TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;

const Contactform = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (
    data: contactFormProps,
    setValue: UseFormSetValue<contactFormProps>
  ) => {

    setIsLoading(true);

    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...data },
        {
          publicKey: PUBLIC_KEY
        }
      );

      if (res) {
        setValue("name", "");
        setValue("email", "");
        setValue("message", "");

        toast.success("Message sent successfully!", {
          duration: 3000,
          position: "top-right",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {

      if (error instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', error);
        toast.error("Failed to send message. Please try again later.", {
          duration: 3000,
          position: "top-right",
          style: {
            background: "#f44336",
            color: "#fff",
          },
        });
        setValue("email", "");
      }

      console.log('ERROR', error);
    } finally {
      setIsLoading(false);
    }


  };

  return (
    <>
      <Form handleOnSubmit={handleOnSubmit} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Contactform;
