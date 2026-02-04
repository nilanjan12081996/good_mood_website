'use client';
import { Button, Textarea, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getIntouch } from "../reducers/ContactSlice";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm=()=>{
    const{loading}=useSelector((state)=>state?.contact)
      const recaptchaRef = useRef(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); 
    const handleCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const dispatch=useDispatch()
  const onSubmit=(data)=>{
dispatch(getIntouch(data)).then((res)=>{
if(res?.payload?.status_code===200){
     reset()
           setIsCaptchaVerified(false);
    toast.success(res?.payload?.message)
    if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
}
else{
     reset()
           setIsCaptchaVerified(false);
    toast.error("Something went wrong")
}
})
  }
    return(
        <>
         <div className="lg:w-7/12 bg-[#ffffff] rounded-[10px] shadow-xl p-5 lg:p-10">
                <div className='my-5'>
                    <h3 className='text-[#0B8843] text-xl lg:text-[24px] leading-[26px] font-semibold pb-3'>Get In Touch</h3>
                    <p className='text-[#424242] text-sm lg:text-[14px] leading-[20px]'>We&lsquo;re here to help! If you have any questions or would like to discuss how our automation tools can enhance your product and streamline your operations, feel free to reach out.</p>
                </div>
                <div className='w-full'>
                    <div className='form_area'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-4 mb-3'>
                            <div className='w-full mb-2'>
                                <TextInput
                                {...register("first_name",{required:"First name is required"})}
                                id="base" type="text" placeholder='First Name' sizing="md" />
                              {
                                errors?.first_name&&(
                                    <span className="text-red-500">
                                      {errors?.first_name?.message}
                                    </span>
                                )
                              }
                            </div>
                            <div className='w-full mb-2'>
                                <TextInput 
                                     {...register("last_name",{required:"Last name is required"})}
                                id="base" type="text" placeholder='Last Name' sizing="md" />
                                {
                                    errors.last_name&&(
                                          <span className="text-red-500">
                                      {errors?.last_name?.message}
                                    </span>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex gap-4 mb-3'>
                            <div className='w-full mb-2'>
                                <TextInput
                                     {...register("email",{required:"Email is required"})}
                                id="base" type="email" placeholder='Email Address' sizing="md" />
                                {
                                    errors?.email&&(
                                         <span className="text-red-500">
                                      {errors?.email?.message}
                                    </span>
                                    )
                                }
                            </div>
                            <div className='w-full mb-2'>
                                <TextInput
                                     {...register("phone_no",{required:"Phone number is required"})}
                                id="base" type="text" placeholder="Phone Number" sizing="md" />
                                   {
                                    errors?.phone_no&&(
                                         <span className="text-red-500">
                                      {errors?.phone_no?.message}
                                    </span>
                                    )
                                }
                            </div>
                        </div>
                        <div className='mb-5'>
                            <Textarea
                                 {...register("message",{required:"Message is required"})}
                            id="comment" placeholder="Your message"  rows={6} />
                                {
                                    errors?.message&&(
                                         <span className="text-red-500">
                                      {errors?.message?.message}
                                    </span>
                                    )
                                }
                        </div>
                            <div className="mt-2 mb-2">
              
                     <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={handleCaptchaChange}
                            />
              </div>
                        <Button  disabled={loading ||!isCaptchaVerified}
                                className={(loading||!isCaptchaVerified) ? "opacity-60 cursor-not-allowed" : ""}
                                type="submit">
                        {loading?"Waiting":"Get to Know"} 
                        </Button>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}
export default ContactForm