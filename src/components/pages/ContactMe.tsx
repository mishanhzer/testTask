import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { testForm } from "../../assets/images/Images";
import { ButtonComponent } from "../UI_kits/LinkAndButton";

export const ContactMe = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleNext = (data) => {
    onSubmit(data);
  };
  return (
    <div className={`flex w-1200 mt-20 mx-auto`}>
      <img 
        className={`w-128 h-15`}
        src={testForm} 
        alt="test" />
      <form className={`ml-20`}>
        <div className={`flex flex-col mb-8`}>
          <label className={`text-gray-600 text-base`} htmlFor="">Name *</label>
          <div className={`flex`}>
            <input
                className={`border w-72 p-2.5 outline-none rounded placeholder-gray-600`}
                {...register("firsName", { required: true })}
                placeholder="First Name"
              />
              <input
                className={`ml-4 w-72 border p-2.5 outline-none rounded placeholder-gray-600`}
                {...register("lastName", { required: true })}
                placeholder="Last Name"
              />
          </div>
        </div>
        <div className={`flex flex-col mb-8`}>
          <label className={`text-gray-600 text-base`} htmlFor="">Email *</label>
          <input 
            className={`w-full border p-2.5 outline-none rounded`}
            {...register("email", { required: true })} 
          />
        </div>
        <div className={`flex flex-col`}>
          <label className={`text-gray-600 text-base`} htmlFor="">Message *</label>
          <textarea 
            className={`w-full h-36 min-h-36 border p-2.5 outline-none rounded`}
            name="" 
            id=""
            >
            
          </textarea>
        </div>
        <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
      </form>
    </div>
  );
};
