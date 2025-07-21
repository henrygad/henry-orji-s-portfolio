import Button from "../../components/Button";
import type { contactFormProps } from "../../types/contactForm.type";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    useForm,
    type FieldErrors,
    type UseFormSetError,
    type UseFormSetValue,
} from "react-hook-form";
import contactForm from "../../validators/contactForm.validators";

type Props = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    handleOnSubmit: (
        data: contactFormProps,
        setValue: UseFormSetValue<contactFormProps>,
        setError: UseFormSetError<contactFormProps>
    ) => void;
};

const Contact = ({ isLoading, handleOnSubmit }: Props) => {

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm<contactFormProps>({ resolver: yupResolver(contactForm) });

    const isError = (
        errors: FieldErrors<contactFormProps>
    ): { isError: boolean; message: string } => {
        if (errors.name || errors.email || errors.message) {
            return {
                isError: true,
                message:
                    errors.name?.message ||
                    errors.email?.message ||
                    errors.message?.message ||
                    "",
            };
        }

        return {
            isError: false,
            message: "",
        };
    };

    return (
        <form
            id="contact-form"
            method="POST"
            action="#contact"
            className="space-y-4 w-full sm:w-auto"
            onSubmit={handleSubmit((data) =>
                handleOnSubmit(data, setValue, setError)
            )}
        >
            <label className="flex flex-col min-w-[240px] sm:min-w-[480px] flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                    Name
                </p>
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#92adc8] p-4 text-base font-normal leading-normal"
                    {...register("name")}
                />
            </label>
            <label className="flex flex-col min-w-[240px] sm:min-w-[480px] flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                    Email
                </p>
                <input
                    type="text"
                    id="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#92adc8] p-4 text-base font-normal leading-normal"
                    {...register("email")}
                />
            </label>
            <label className="flex flex-col min-w-[240px] sm:min-w-[480px] flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                    Message
                </p>
                <textarea
                    id='message'
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none min-h-36 placeholder:text-[#92adc8] p-4 text-base font-normal leading-normal"
                    {...register("message")}
                ></textarea>
            </label>
            <div className="flex flex-col items-start gap-3 px-4 py-3">
                <Button
                    id="submit-button"
                    className="flex items-center justify-center w-full sm:max-w-48 truncate disabled:opacity-50 disabled:cursor-not-allowed"
                    html={<>
                        {
                            isLoading ? (
                                <>
                                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <span className='inline-block'>Send Message</span>
                                </>
                            )
                        }
                    </>}
                    disabled={isError(errors).isError || isLoading}
                />
                <span className="inline-block">
                    {isError(errors).isError && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-red-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0 1 1 0 01-2 0zm.25-6a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0V7z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {isError(errors).message}
                        </p>
                    )}
                </span>
            </div>
        </form>
    );
};

export default Contact;
