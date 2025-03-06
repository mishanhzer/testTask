import React from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { testForm } from "../../../assets/images/Images";
import { ButtonComponent } from "../../UI_kits/LinkAndButton";

import { classInput, classMailAndMessage, classFlex } from "./stylesContactMe";
import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { register } from "module";

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

// export const ContactMe = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={`flex w-1200 mt-20 mx-auto`}>
//       <img className={`w-128 h-15`} src={testForm} alt="test" />
//       <FormProvider >
//         <form className={`ml-20`} onSubmit={handleSubmit(onSubmit)}>
//           <div className={`${classFlex} mb-8`}>
//             <div className={`flex items-end`}>
//               <div className={`flex flex-col`}>
//                 <label className={`text-gray-500 text-fz15`}>Name *</label>
//                 <Controller
//                   name="firstName"
//                   control={control}
//                   render={({ field }) => <input className={errors.firstName ? `${classInput} border-red-500` : classInput} id="firstName" placeholder='First Name' {...field} />}
//                 />
//                 {errors.firstName && <p className={`text-red-500`}>{errors.firstName.message}</p>}
//               </div>

//               <div className={`flex flex-col`}>
//                 <Controller
//                   name="lastName"
//                   control={control}
//                   render={({ field }) => <input className={errors.lastName ? `${classInput} ml-4 border-red-500` : `${classInput} ml-4`} id="lastName" placeholder='Last Name' {...field} />}
//                 />
//                 {errors.lastName && <p className={`ml-4 text-red-500`}>{errors.lastName.message}</p>}
//               </div>
//             </div>
//           </div>
//           <div className={`mb-8`}>
//             <label className={`text-gray-500 text-fz15`}>Email *</label>
//             <Controller
//               name="email"
//               control={control}
//               render={({ field }) => <input className={errors.email ? `${classMailAndMessage} border-red-500` : `${classMailAndMessage}`} id="email" {...field} />}
//             />
//             {errors.email && <p className={`text-red-500`}>{errors.email.message}</p>}
//           </div>
//           <div>
//             <label className={`text-gray-500 text-fz15`}>Message *</label>
//             <Controller
//               name="message"
//               control={control}
//               render={({ field }) => <textarea className={errors.message ? `${classMailAndMessage} border-red-500 min-h-36` : `${classMailAndMessage} min-h-36`} id="message" {...field} />}
//             />
//             {errors.message && <p className={`text-red-500`}>{errors.message.message}</p>}
//           </div>
//           <ButtonComponent mt="mt-10" h="h-16" fz="text-sm" />
//         </form>
//       </FormProvider>
//     </div>
//   );
// };





export const ContactMe = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  // register - регистрация поля ввода и применение правил валидации
  // handleSubmit - функция получит данные формы, если проверка формы прошла успешно
  const navigate = useNavigate();

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
            <div>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <input className={errors.firstName ? `${classInput} border-red-500` : classInput} id="firstName" placeholder='First Name' {...field} />}
              />
              {errors.firstName && <p className={`text-red-500`}>{errors.firstName.message}</p>}
            </div>
            <div>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <input className={errors.lastName ? `${classInput} ml-4 border-red-500` : `${classInput} ml-4`} id="lastName" placeholder='Last Name' {...field} />}
              />
              {errors.lastName && <p className={`ml-4 text-red-500`}>{errors.lastName.message}</p>}
            </div>
          </div>
        </div>
        <div className={`${classFlex} mb-8`}>
          <label className={`text-gray-500 text-fz15`}>Email *</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input className={errors.email ? `${classMailAndMessage} border-red-500` : `${classMailAndMessage}`} id="email" {...field} />}
          />
          {errors.email && <p className={`text-red-500`}>{errors.email.message}</p>}
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


// const InputTest = ({ id, placeholder }) => {
//   return (
//     <input
//       id={name}
//       placeholder={placeholder}
//       className={
//         errors[name]
//           ? `${classMailAndMessage} border-red-500`
//           : classMailAndMessage
//       }
//     />
//   );
// };

// const InputСomponent = ({ name, placeholder, ml, register, errors }: InputTypes) => {
//   return (
//     <div>
//       <input
//         id={name}
//         className={
//           errors[name]
//             ? `${ml} ${classInput} border-red-500`
//             : `${ml} ${classInput}`
//         }
//         {...register(name, { required: true })}
//         placeholder={placeholder}
//       />
//       {errors[name] && (
//         <div className={`${ml} mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const EmailComponent = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <div className={`${classFlex} mb-8`}>
//       <label className={`text-gray-500 text-fz15`}>Email *</label>
//       <Input name={name} register={register} errors={errors} />
//       {errors[name] && (
//         <div className={`mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const MessageComponent = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <div className={`${classFlex}`}>
//       <label className={`text-gray-500 text-fz15`}>Message *</label>
//       <TextArea
//         name={name}
//         register={register}
//         errors={errors}
//       />
//       {errors[name] && (
//         <div className={`mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const Input = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <input
//       id={name}
//       className={
//         errors[name]
//           ? `${classMailAndMessage} border-red-500`
//           : classMailAndMessage
//       }
//       {...register(name, { required: true })}
//     />
//   );
// };

// const TextArea = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <textarea
//       id={name}
//       className={`h-36 min-h-36 ${errors[name]
//         ? `${classMailAndMessage} border-red-500`
//         : classMailAndMessage
//         }`}
//       {...register(name, { required: true })}
//     ></textarea>
//   );
// };

// export const ContactMe = () => {
//   const methods = useForm<InputTypes>();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     register,
//   } = methods;

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={`flex w-1200 mt-20 mx-auto`}>
//       <img className={`w-128 h-15`} src={testForm} alt="test" />
//       <FormProvider {...methods}>
//         <form className={`ml-20`} onSubmit={handleSubmit(onSubmit)}>
//           <div className={`${classFlex} mb-8`}>
//             <label className={`text-gray-500 text-fz15`}>Name *</label>
//             <div className={`flex`}>
//               <InputСomponent
//                 name="firstName"
//                 placeholder="First Name"
//                 ml="ml-0"
//                 register={register}
//                 errors={errors}
//               />
//               <InputСomponent
//                 name="lastName"
//                 placeholder="Last Name"
//                 ml="ml-4"
//                 register={register}
//                 errors={errors}
//               />
//             </div>
//           </div>
//           <EmailComponent
//             name="email"
//             register={register}
//             errors={errors}
//           />
//           <MessageComponent
//             name="message"
//             register={register}
//             errors={errors}
//           />
//           <ButtonComponent mt="mt-10" h="h-16" fz="text-sm" />
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// const InputСomponent = ({ name, placeholder, ml, register, errors }: InputTypes) => {
//   return (
//     <div>
//       <input
//         id={name}
//         className={
//           errors[name]
//             ? `${ml} ${classInput} border-red-500`
//             : `${ml} ${classInput}`
//         }
//         {...register(name, { required: true })}
//         placeholder={placeholder}
//       />
//       {errors[name] && (
//         <div className={`${ml} mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const EmailComponent = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <div className={`${classFlex} mb-8`}>
//       <label className={`text-gray-500 text-fz15`}>Email *</label>
//       <Input name={name} register={register} errors={errors} />
//       {errors[name] && (
//         <div className={`mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const MessageComponent = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <div className={`${classFlex}`}>
//       <label className={`text-gray-500 text-fz15`}>Message *</label>
//       <TextArea
//         name={name}
//         register={register}
//         errors={errors}
//       />
//       {errors[name] && (
//         <div className={`mt-1 text-fz13 text-red-600`}>
//           Это поле обязательно!
//         </div>
//       )}
//     </div>
//   );
// };

// const Input = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <input
//       id={name}
//       className={
//         errors[name]
//           ? `${classMailAndMessage} border-red-500`
//           : classMailAndMessage
//       }
//       {...register(name, { required: true })}
//     />
//   );
// };

// const TextArea = ({ name, register, errors }: PropsMessageTypes) => {
//   return (
//     <textarea
//       id={name}
//       className={`h-36 min-h-36 ${
//         errors[name]
//           ? `${classMailAndMessage} border-red-500`
//           : classMailAndMessage
//       }`}
//       {...register(name, { required: true })}
//     ></textarea>
//   );
// };





// Cтарый код для работы
// export const ContactMe = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
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
//                 id='firstName'
//                 className={errors.firstName ? `${classInput} border-red-500` : classInput}
//                 {...register("firstName", { required: true })}
//                 placeholder="First Name"
//               />
//               {errors.firstName && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//             </div>
//             <div>
//               <input
//                 id='lastName'
//                 className={`ml-4 ${errors.lastName ? `${classInput} border-red-500` : classInput}`}
//                 {...register("lastName", { required: true })}
//                 placeholder="Last Name"
//               />
//               {errors.lastName && <div className={`ml-4 mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//             </div>
//           </div>
//         </div>
//         <div className={`${ClassFlex} mb-8`}>
//           <label className={`text-gray-500 text-fz15`}>Email *</label>
//           <input
//             id='email'
//             className={errors.email ? `${classMailAndMessage} border-red-500` : classMailAndMessage}
//             {...register("email", { required: true })}
//           />
//           {errors.email && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//         </div>
//         <div className={ClassFlex}>
//           <label className={`text-gray-500 text-fz15`}>Message *</label>
//           <textarea
//             className={`h-36 min-h-36 ${errors.message ? `${classMailAndMessage} border-red-500` : classMailAndMessage}`}
//             {...register("message", { required: true })}
//           >
//           </textarea>
//           {errors.message && <div className={`mt-1 text-fz13 text-red-600`}>Это поле обязательно!</div>}
//         </div>
//         <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
//       </form>
//     </div>
//   );
// };
