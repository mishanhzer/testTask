// import React from "react";
// import { Form, Button, Input, Row, Tooltip, Radio } from "antd";
// import { useForm, Controller } from "react-hook-form";

// import { testForm } from '../../../assets/images/Images'
// import '../ContactMe/test.scss'

// export const ContactMeRhf = (props) => {
//   const { handleSubmit, reset, watch, control, formState: { errors }, getValues } = useForm()

//   const onSubmut = (data) => {
//     console.log(data)
//   }
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className={`flex w-1200 mt-20 mx-auto`}>
//       <img
//         className={`w-128 h-15`}
//         src={testForm}
//         alt="test" />
//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 24,
//         }}
//         style={{
//           maxWidth: 600,
//           marginLeft: 50
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <div className={`flex`}>
//           <Form.Item
//             label="Name"
//             layout="vertical"
//             name="name"
//             style={{ width: 500 }}
//             rules={[
//               {
//                 required: true,
//                 message: 'Обязательное поле!',
//               },
//             ]}
//           >
//             <Input placeholder="Name" size="large" />
//           </Form.Item>

//           <Form.Item
//             label="Last Name"
//             layout="vertical"
//             name="lastName"
//             style={{ width: 500, alignSelf: 'flex-end', marginLeft: 30 }}
//             rules={[
//               {
//                 required: true,
//                 message: 'Обязательное поле!',
//               },
//             ]}
//           >
//             <Input placeholder="Last Name" size="large" />
//           </Form.Item>
//         </div>
//         <div className={`flex`}>
//           <Form.Item
//             label="Email"
//             layout="vertical"
//             name="email"
//             style={{ width: '100%', marginTop: 50 }}
//             rules={[
//               {
//                 required: true,
//                 message: 'Обязательное поле!'
//               },
//             ]}
//           >
//             <Input size="large" />
//           </Form.Item>
//         </div>
//         <Form.Item
//           label={null}>
//           <Button type='primary' htmlType="submit" size='large' variant="solid">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }


// import React from "react";
// import {
//   Controller,
//   useForm,
// } from "react-hook-form";

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { Input } from '../ContactMe/Input'

// import { testForm } from "../../../assets/images/Images";
// import { ButtonComponent } from "../../UI_kits/LinkAndButton";

// import { classInput, classMailAndMessage, classFlex } from "../ContactMe/styles/stylesContactMe";
// import { UseFormRegister, FieldErrors } from "react-hook-form";

// interface PropsMessageTypes {
//   name: string
//   register: UseFormRegister<InputTypes>;
//   errors: FieldErrors<InputTypes>;
// }

// interface InputTypes extends PropsMessageTypes {
//   placeholder: string;
//   ml: string;
// }

// const schema = yup.object().shape({
//   firstName: yup.string().required('Это поле обязательно!'),
//   lastName: yup.string().required('Это поле обязательно!'),
//   email: yup.string().email('Вы ввели неверный e-mail').required('Это поле обязательно!'),
//   message: yup.string().required('Это поле обязательно!')
// })

// export const ContactMeRhf = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   })

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
//         <div className={`${classFlex} mb-8`}>
//           <label className={`text-gray-500 text-fz15`}>Name *</label>
//           <div className={`flex`}>
//             <div className={`flex`}>
//               <Input name='firstName' control={control} place={'First Name'} errors={errors} ml='ml-0' classTag={classInput} />
//               <Input name='lastName' control={control} place={'Last Name'} errors={errors} ml='ml-4' classTag={classInput} />
//             </div>
//           </div>
//         </div>
//         <div className={`${classFlex} mb-8`}>
//           <label className={`text-gray-500 text-fz15`}>Email *</label>
//           <Input name='email' control={control} place={''} errors={errors} ml='ml-0' classTag={classMailAndMessage} />
//         </div>
//         <div className={classFlex}>
//           <label className={`text-gray-500 text-fz15`}>Message *</label>
//           <Controller
//             name="message"
//             control={control}
//             render={({ field }) => <textarea className={errors.message ? `${classMailAndMessage} border-red-500 min-h-36` : `${classMailAndMessage} min-h-36`} id="message" {...field} />}
//           />
//           {errors.message && <p className={`text-red-500`}>{errors.message.message}</p>}
//         </div>
//         <ButtonComponent mt='mt-10' h='h-16' fz='text-sm' />
//       </form>
//     </div>
//   );
// };


