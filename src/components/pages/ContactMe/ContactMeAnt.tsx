import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input } from "antd";

import { FormItem } from "react-hook-form-antd";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const { TextArea } = Input;

import { ButtonComponent, Title } from "../../UI_kits/LinkAndButton";
import { MainPicture } from "../../../assets/images/Images";
import { Label } from "../ContactMe/Label";
import { WhatsApp } from "../../whatsapp/WhatsApp";

import styles from './styles/stylesContactMe.module.scss'

import '../ContactMe/styles/changeStyleAnt.scss'

interface DataForm {
  name: string
  lastName: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required('Это поле обязательно!'),
  lastName: yup.string().required('Это поле обязательно!'),
  email: yup.string().email('Вы ввели неверный e-mail').required('Это поле обязательно!'),
  message: yup.string().required('Это поле обязательно!')
})

const ContactMeAnt = () => {
  const { control, handleSubmit, reset, formState, formState: { isSubmitSuccessful, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '', lastName: '', email: '', message: '' })
    }
  }, [formState, reset])

  const onSubmit = async (data: DataForm) => {
    // fetch('/mailer/smart.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.text())
    //   .then(data => console.log(data));
    console.log(data)
  };

  return (
    <div className="mb-[50px]">
      <Title name='Elena Kozyutenko' content='Main page' />
      <div className={styles.divContainer}>
        <MainPicture />
        <Form
          className={styles.styleForm}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className={`flex`}>
            <FormItem
              control={control}
              name="name"
              className={`w-[500px] ${styles.item}`}
            >
              <Label
                classLabel={styles.classLabelAnt}
                nameLabel='Name'
              />
              <Input className={styles.classInputAnt} />
            </FormItem>
            <FormItem
              control={control}
              name="lastName"
              className={`w-[500px] ml-[30px] ${styles.item}`}
            >
              <Label classLabel={styles.classLabelAnt} nameLabel='Last Name' />
              <Input className={styles.classInputAnt} />
            </FormItem>
          </div>
          <FormItem
            control={control}
            name="email"
            className={`w-full mt-[15px] ${styles.item}`}
          >
            <Label classLabel={styles.classLabelAnt} nameLabel='Email' />
            <Input className={styles.classInputAnt} />
          </FormItem>
          <FormItem
            control={control}
            name="message"
            className={`w-full mt-[35px] ${styles.item}`}
          >
            <Label classLabel={styles.classLabelAnt} nameLabel='Message' />
            <TextArea
              className={styles.classMessageAnt}
            />
          </FormItem>

          <Form.Item>
            <ButtonComponent
              disabled={isSubmitting}
              mt='mt-3'
              h='h-16'
              fz='text-sm'
              textBtn="Отправить"
              turn='rotate-0'
              translateX='translate-x-1' />
          </Form.Item>
        </Form>
        <WhatsApp />
      </div>
    </div>
  );
}

// const ContactMeAnt = () => { // Альтернативный вариант 
//   return (
//     <div className={`text-center mt-[30px]`}>
//       <h1 className="text-3xl text-[rgb(119,119,119)] mb-3">Контакты</h1>
//       <div className="text-[rgb(119,119,119)] mb-1">email: Kozyutenko@mail.ru</div>
//       <a href='https://vk.com/id264614153' className="text-[rgb(119,119,119)] mb-1">VK: vk.com/id264614153</a>
//       <div className="text-[rgb(119,119,119)] mb-1">Телефон: +79222636130</div>
//     </div>
//   )
// }

export default ContactMeAnt

