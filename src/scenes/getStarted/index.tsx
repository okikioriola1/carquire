import React from 'react'
import './getstarted.css'
import GetStartedImage from '../../assets/pngs/white-car.png'
import { useForm } from "react-hook-form";
import useMediaQuery from '../../hooks/useMediaQuery';

interface Props  {
    setSelectedPage: (value: SelectedPage) => void;
  };

const GetStarted = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
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
    <section id="getstarted" className="getstarted mt-12 bg-[#F5F5F5]">

        <div className='getstarted-wrapper w-11/12 m-auto  md:flex md:flex-row justify-center pt-5 pb-32'>
            <div className='get-started-content flex flex-col justify-center'>
                <div className='get-started-text py-10 md:py-8'>
                    <h2>Find a Great Price on the Vehicle You Want</h2>
                    <p>Looking for luxury, economy, or a family vehicle you can use for a short period? Get the best prices at Carquire.</p>

                </div>
               { isAboveMediumScreens&& (

                   <div className='get-started-image'>
                    <img src={GetStartedImage} className="w-[400px]" alt="get-started" />
                </div>
                    )}

            </div>

            <div className='get-started-form-wrapper basis-3/5 w-full'>
                <div className='get-started-form-container bg-white pt-12 h-full w-4/5 m-auto'>
                    <h2 className='text-center pb-12'>Search Vehicles</h2>

               
            <form
              target="_blank"
              onSubmit={onSubmit}
            //   action="https://formsubmit.co/38561154e40bcf2daceba311d90b4b24"
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
                <p className="mt-1 text-red">
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
                <p className="mt-1 text-red">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
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
                <p className="mt-1 text-red">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
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
                <p className="mt-1 text-red">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
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
                <p className="mt-1 text-red">
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
                <p className="mt-1 text-red">
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



    </section>
  )
}

export default GetStarted