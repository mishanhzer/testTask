import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import { FormItem } from "react-hook-form-antd";
import { DevTool } from "@hookform/devtools";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const { TextArea } = Input;

import { ButtonComponent } from "../../UI_kits/LinkAndButton";
import { Label } from "../ContactMe/Label";

import { testForm } from '../../../assets/images/Images'
import '../ContactMe/styles/changeStyleAnt.scss'
import { classInputAnt, classLabelAnt } from '../ContactMe/styles/stylesContactMe'

const schema = yup.object().shape({
  firstName: yup.string().required('Это поле обязательно!'),
  lastName: yup.string().required('Это поле обязательно!'),
  email: yup.string().email('Вы ввели неверный e-mail').required('Это поле обязательно!'),
  message: yup.string().required('Это поле обязательно!')
})

export const ContactMeAnt = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={`flex w-1200 mt-36 mx-auto`}>
        <img
          className={`w-128 h-15`}
          src={testForm}
          alt="test" />
        <Form
          style={{ maxWidth: 600, marginLeft: 70 }}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className={`flex`}>
            <FormItem
              control={control}
              name="firstName"
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
              rows={4}
              style={{ minHeight: 160, fontSize: 18, color: '#636363', fontFamily: 'Lora, serif, sans-serif', fontWeight: 400 }} />
          </FormItem>

          <Form.Item>
            <ButtonComponent mt='mt-5' h='h-16' fz='text-sm' />
          </Form.Item>
        </Form>
      </div>
      <DevTool control={control} />
    </>
  );
}
