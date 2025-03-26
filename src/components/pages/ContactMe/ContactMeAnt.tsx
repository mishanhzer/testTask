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

import { divContainer, styleForm, classInputAnt, classLabelAnt, classMessageAnt, firstItem, secondItem, thirdItem, fourthItem } from '../ContactMe/styles/stylesContactMe'

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
      <div className={divContainer}>
        <MainPicture />
        <Form
          style={styleForm}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className={`flex`}>
            <FormItem
              control={control}
              name="name"
              style={firstItem}>
              <Label classLabel={classLabelAnt} nameLabel='Name' />
              <Input style={classInputAnt} />
            </FormItem>
            <FormItem
              control={control}
              name="lastName"
              style={secondItem}>
              <Label classLabel={classLabelAnt} nameLabel='Last Name' />
              <Input style={classInputAnt} />
            </FormItem>
          </div>
          <FormItem
            control={control}
            name="email"
            style={thirdItem}>
            <Label classLabel={classLabelAnt} nameLabel='Email' />
            <Input style={classInputAnt} />
          </FormItem>
          <FormItem
            control={control}
            name="message"
            style={fourthItem}>
            <Label classLabel={classLabelAnt} nameLabel='Message' />
            <TextArea
              style={classMessageAnt} />
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

