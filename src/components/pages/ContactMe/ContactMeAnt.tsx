import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input } from "antd";

import { FormItem } from "react-hook-form-antd";
import { DevTool } from "@hookform/devtools";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const { TextArea } = Input;

import { ButtonComponent, Title } from "../../UI_kits/LinkAndButton";
import { MainPicture } from "../../../assets/images/Images";
import { Label } from "../ContactMe/Label";

import { classInputAnt, classLabelAnt, classMessageAnt } from '../ContactMe/styles/stylesContactMe'

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

export const ContactMeAnt = () => {
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
      <div className={`flex w-1200 mt-36 mx-auto`}>
        <MainPicture />
        <Form
          style={{ maxWidth: 600, marginLeft: 70 }}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className={`flex`}>
            <FormItem
              control={control}
              name="name"
              style={{ width: 500, alignSelf: 'flex-end' }}>
              <label className={classLabelAnt}>{<Label name='Name' />}</label>
              <Input style={classInputAnt} />
            </FormItem>
            <FormItem
              control={control}
              name="lastName"
              style={{ width: 500, alignSelf: 'flex-end', marginLeft: 30 }}>
              <label className={classLabelAnt}>{<Label name='Last Name' />}</label>
              <Input style={classInputAnt} />
            </FormItem>
          </div>
          <FormItem
            control={control}
            name="email"
            style={{ width: '100%', alignSelf: 'flex-end', marginTop: 15 }}>
            <label className={classLabelAnt}>{<Label name='Email' />}</label>
            <Input style={classInputAnt} />
          </FormItem>
          <FormItem
            control={control}
            name="message"
            style={{ width: '100%', alignSelf: 'flex-end', marginTop: 35 }}>
            <label className={classLabelAnt}>{<Label name='Message' />}</label>
            <TextArea
              style={classMessageAnt} />
          </FormItem>

          <Form.Item>
            <ButtonComponent disabled={isSubmitting} mt='mt-5' h='h-16' fz='text-sm' />
          </Form.Item>
        </Form>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
}

