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

  const onSubmit = (data: DataForm) => {
    console.log(data);
  };

  return (
    <>
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
            <ButtonComponent disabled={isSubmitting} mt='mt-3' h='h-16' fz='text-sm' />
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default ContactMeAnt

