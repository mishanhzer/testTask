import React from "react";
import {
  Controller,
  useForm,
} from "react-hook-form";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../ContactMe/Input'

import { testForm } from "../../../assets/images/Images";
import { ButtonComponent } from "../../UI_kits/LinkAndButton";

import { classInput, classMailAndMessage, classFlex } from "./stylesContactMe";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PropsMessageTypes {
  name: string
  register: UseFormRegister<InputTypes>;
  errors: FieldErrors<InputTypes>;
}

interface InputTypes extends PropsMessageTypes {
  placeholder: string;
  ml: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required('Это поле обязательно!'),
  lastName: yup.string().required('Это поле обязательно!'),
  email: yup.string().email('Вы ввели неверный e-mail').required('Это поле обязательно!'),
  message: yup.string().required('Это поле обязательно!')
})

export const ContactMe = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`flex w-1200 mt-20 mx-auto`}>
      <img
        className={`w-128 h-15`}
        src={testForm}
        alt="test" />
      <form
        className={`ml-20`}
        onSubmit={handleSubmit(onSubmit)}>
        <div className={`${classFlex} mb-8`}>
          <label className={`text-gray-500 text-fz15`}>Name *</label>
          <div className={`flex`}>
            <div className={`flex`}>
              <Input name='firstName' control={control} place={'First Name'} errors={errors} ml='ml-0' classTag={classInput} />
              <Input name='lastName' control={control} place={'Last Name'} errors={errors} ml='ml-4' classTag={classInput} />
            </div>
          </div>
        </div>
        <div className={`${classFlex} mb-8`}>
          <label className={`text-gray-500 text-fz15`}>Email *</label>
          <Input name='email' control={control} place={''} errors={errors} ml='ml-0' classTag={classMailAndMessage} />
        </div>
        <div className={classFlex}>
          <label className={`text-gray-500 text-fz15`}>Message *</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => <textarea className={errors.message ? `${classMailAndMessage} border-red-500 min-h-36` : `${classMailAndMessage} min-h-36`} id="message" {...field} />}
          />
          {errors.message && <p className={`text-red-500`}>{errors.message.message}</p>}
        </div>
        <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
      </form>
    </div>
  );
};


