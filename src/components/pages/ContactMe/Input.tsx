import React from "react";
import { Controller } from "react-hook-form";

export const Input = ({ control, errors, name, place, ml, classTag }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input className={errors.firstName ? `${classTag} ${ml} border-red-500` : `${classTag} ${ml}`} id={name} placeholder={place} {...field} />}
      />
      {errors[name] && <p className={`${ml} text-red-500`}>{errors[name].message}</p>}
    </div>
  )
}