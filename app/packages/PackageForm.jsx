'use client';
import { Button, Checkbox, Select, Textarea, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form";;
import { useDispatch, useSelector } from "react-redux";
import { getInTouchPackages } from "../reducers/ContactSlice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const PackageForm=()=>{
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
        watch,
        reset,
        formState: { errors },
      } = useForm();
      const isAgreed = watch("agree_terms", false);
      const dispatch=useDispatch()
      const onSubmit=(data)=>{
        console.log(data);
        dispatch(getInTouchPackages(data)).then((res)=>{
            console.log("res",res);
            
            if(res?.payload?.status_code===200){
                  setIsCaptchaVerified(false);
                toast.success(res?.payload?.message)
                reset();
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form_area'>
                        <div className='lg:flex gap-4 mb-3'>
                            <div className='w-full mb-2'>
                                <TextInput id="base" type="text" placeholder='First Name' sizing="md" 
                                {...register("first_name",{required:"First name is required"})}
                                />
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
                        <div className='lg:flex gap-4 mb-3'>
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
                        <div className='lg:flex gap-4 mb-3'>
                            <div className='w-full mb-2'>
                                <TextInput
                                 {...register("organization_name",{required:"organization name is required"})}
                                id="base" type="text" placeholder='Company / Organization' sizing="md" />
                                {
                                    errors?.organization_name&&(
                                         <span className="text-red-500">
                                      {errors?.organization_name?.message}
                                    </span>
                                    )
                                }

                            </div>
                            <div className='w-full mb-2'>
                                <Select {...register("package_name",{required:"Package is required"})}>
                                  <option value="" disabled>Package</option>
                                  <option value="Educational Institutions">Educational Institutions</option>
                                  <option value="Corporate Training">Corporate Training </option>
                                  <option value="Employee Wellbeing">Employee Wellbeing</option>
                                   <option value="Old-Age Mental Care">Old-Age Mental Care</option>
                                </Select>
                                {errors?.package_name && (
                                <span className="text-red-500">
                                    {errors.package_name.message}
                                </span>
                                )}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <Textarea 
                             {...register("message",{required:"Message is required",

                                minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters",
                                },
                                maxLength: {
                                value: 2000,
                                message: "Message cannot exceed 2000 characters",
                                },
                             })}
                            id="comment" placeholder="Your message"  rows={6} />
                             {
                                    errors?.message&&(
                                         <span className="text-red-500">
                                      {errors?.message?.message}
                                    </span>
                                    )
                                }
                        </div>
                        <div className='mb-5'>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                {...register("agree_terms", {
                                    required: "You must agree to the terms",
                                })}
                                className='checkmark' id="remember" />
                                <p className='text-[#7E7E7E] text-[12px]' htmlFor="remember">I agree to the privacy policy and terms of service.</p>
                            {errors?.agree_terms && (
                            <span className="text-red-500 text-xs">
                                {errors.agree_terms.message}
                            </span>
                            )}
                            </div>
                        </div>
                                 <div className="mt-2 mb-2">
              
                     <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={handleCaptchaChange}
                            />
              </div>
                        
                        <Button
                        disabled={(!isAgreed||!isCaptchaVerified)}
                        type="submit">{loading?"Wating...":"Submit"} </Button>
                    </div>
                    </form>
        </>
    )
}
export default PackageForm