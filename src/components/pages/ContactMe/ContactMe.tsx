import React from "react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

import { testForm } from "../../../assets/images/Images";
import { ButtonComponent } from "../../UI_kits/LinkAndButton";

import { classInput, classMailAndMessage, ClassFlex } from "./stylesContactMe";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { register } from "module";

export const ContactMe = () => {
  const methods = useForm<InputTypes>();

  const { control, handleSubmit, formState: {errors}, register } = methods;

  const onSave = (data) => {
    console.log(data);
  };

  return (
    <div className={`flex w-1200 mt-20 mx-auto`}>
      <img className={`w-128 h-15`} src={testForm} alt="test" />
     <FormProvider {...methods}>
     <form
        className={`ml-20`}
        onSubmit={handleSubmit(onSave)}>
        <div className={`${ClassFlex} mb-8`}>
          <label className={`text-gray-500 text-fz15`}>Name *</label>
          <div className={`flex`}>
            <TestInput name='firstName' placeholder='First Name' ml='ml-0' register={register} errors={errors}/>
            <TestInput name='lastName' placeholder='Last Name' ml='ml-4' register={register} errors={errors}/>
          </div>
        </div>
        <TestEmail name='email' label='Email *' register={register} errors={errors} />
        <TestMessage name='message' mb='mb-0' label='Message *' register={register} errors={errors} />
        <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
      </form>
     </FormProvider>
    </div>
  );
};

interface InputTypes {
  name: string
  placeholder: string
  ml: string
  register: UseFormRegister<InputTypes>
  errors: FieldErrors<InputTypes>
}

const TestInput = ({name, placeholder, ml, register, errors}: InputTypes) => {
  return (
    <div>
    <input
        id={name}
        className={errors[name] ? `${ml} ${classInput} border-red-500` : `${ml} ${classInput}`}
        {...register(name, { required: true })}
        placeholder={placeholder}
      />
    {errors[name] && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
  </div>
  )
}

const TestEmail = ({name, label, register, errors}) => {
  return (
    <div className={`${ClassFlex} mb-8`}>
    <label className={`text-gray-500 text-fz15`}>{label}</label>
    <Input name={name} register={register} errors={errors} />
    {errors.email && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
  </div>
  )
}

const TestMessage = ({name, mb, label, register, errors}) => {
  return (
    <div className={`${ClassFlex} ${mb}`}>
    <label className={`text-gray-500 text-fz15`}>{label}</label>
    <TextArea name={name} h='h-36' mh='min-h-36' register={register} errors={errors} />
    {errors.email && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
  </div>
  )
}

const Input = ({name, register, errors}) => {
  return (
    <input
      id={name}
      className={errors[name] ? `${classMailAndMessage} border-red-500` : classMailAndMessage}
      {...register(name, { required: true })}
    />
  )
}

const TextArea = ({name, h, mh, register, errors}) => {
  return (
    <textarea
      id={name}
      className={`${h} ${mh} ${errors[name] ? `${classMailAndMessage} border-red-500` : classMailAndMessage}`}
      {...register(name, { required: true })}
    >
    </textarea>
  )
}



// export const ContactMe = () => {
//   const { register, handleSubmit, formState: {errors} } = useForm();
//   // register - регистрация поля ввода и применение правил валидации
//   // handleSubmit - функция получит данные формы, если проверка формы прошла успешно
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={`flex w-1200 mt-20 mx-auto`}>
//       <img
//         className={`w-128 h-15`}
//         src={testForm}
//         alt="test" />
//       <form
//         className={`ml-20`}
//         onSubmit={handleSubmit(onSubmit)}>
//         <div className={`${ClassFlex} mb-8`}>
//           <label className={`text-gray-500 text-fz15`}>Name *</label>
//           <div className={`flex`}>
//             <div>
//               <input
//                   id='firstName'
//                   className={errors.firstName ? `${classInput} border-red-500` : classInput}
//                   {...register("firstName", { required: true })}
//                   placeholder="First Name"
//                 />
//               {errors.firstName && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//             </div>
//               <div>
//                 <input
//                   id='lastName'
//                   className={`ml-4 ${errors.lastName ? `${classInput} border-red-500` : classInput}`}
//                   {...register("lastName", { required: true })}
//                   placeholder="Last Name"
//                 />
//                {errors.lastName && <div className={`ml-4 mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//               </div>
//           </div>
//         </div>
//         <div className={`${ClassFlex} mb-8`}>
//           <label className={`text-gray-500 text-fz15`}>Email *</label>
//           <input
//             id='email'
//             className={errors.email ? `${classMailAndMessage} border-red-500` : classMailAndMessage}
//             {...register("email", { required: true })}
//           />
//            {errors.email && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//         </div>
//         <div className={ClassFlex}>
//           <label className={`text-gray-500 text-fz15`}>Message *</label>
//           <textarea
//             className={`h-36 min-h-36 ${errors.message ? `${classMailAndMessage} border-red-500` : classMailAndMessage}`}
//             {...register("message", { required: true })}
//             >
//           </textarea>
//           {errors.message && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//         </div>
//         <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
//       </form>
//     </div>
//   );
// };
