import React from "react";
import { Controller } from "react-hook-form";

import { Label } from "./Label";
import { classInputAnt, classLabelAnt } from '../ContactMe/styles/stylesContactMe'

// Инпут для компонента ContactMeRhf
// export const InputRhf = ({ control, errors, name, place, ml, classTag }) => {
//   return (
//     <div>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => <input className={errors.firstName ? `${classTag} ${ml} border-red-500` : `${classTag} ${ml}`} id={name} placeholder={place} {...field} />}
//       />
//       {errors[name] && <p className={`${ml} text-red-500`}>{errors[name].message}</p>}
//     </div>
//   )
// }