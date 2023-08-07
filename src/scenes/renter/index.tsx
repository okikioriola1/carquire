import * as React from 'react'
import { useForm } from "react-hook-form";
const Renter = () => {
    const inputStyles = `mb-5 w-3/4 flex justify-center items-center m-auto border border-2 border-gray-300 rounded-lg px-5 py-3 placeholder-grey`;
    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
      const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };

  return (
    <div>
    <div className='renter-form-wrapper basis-3/5 w-full'>
    <div className='renter-form-container bg-white pt-12 h-full w-4/5 m-auto'>
                    <h2 className='text-center pb-12'>Fill out the form below to get details on renting a vehicle of your choice.</h2>

               
            <form
              target="_blank"
              onSubmit={onSubmit}
             action="https://formsubmit.co/31351a9fa68096d6191cf49cbc20d632"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 characters "}
                </p>
              )}

            <input
                className={inputStyles}
                type="text"
                placeholder="PHONE NUMBER"
                {...register("phone", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.phone && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.phone.type === "required" && "This field is required."}
                  {errors.phone.type === "maxLength" &&
                    "Max Length is 100 characters "}
                </p>
              )}

            <input
                className={inputStyles}
                type="text"
                placeholder="LOCATION"
                {...register("location", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.location && (
                <p className="ml-20 -mt-4 mb-4  text-red-500">
                  {errors.location.type === "required" && "This field is required."}
                  {errors.location.type === "maxLength" &&
                    "Max Length is 100 characters "}
                </p>
              )}

            <input
                className={inputStyles}
                type="text"
                placeholder="TYPE OF CAR"
                {...register("car", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.car && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.car.type === "required" && "This field is required."}
                  {errors.car.type === "maxLength" &&
                    "Max Length is 100 characters "}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="DURATION OF RENT"
                {...register("duration", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.duration && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.duration.type === "required" && "This field is required."}
                  {errors.duration.type === "maxLength" &&
                    "Max Length is 100 characters "}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address "}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="ADDITIONAL DETAILS"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="ml-20 -mt-4 mb-4 text-red-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max Length is 2000 characters "}
                </p>
              )}
              <div className='flex justify-center items-center py-8'>
              <button
                type="submit"
                className="mt-5 text-white rounded-md bg-[#00AFF5] px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
              </div>
            </form>

            </div>
            </div>
    </div>
  )
}

export default Renter