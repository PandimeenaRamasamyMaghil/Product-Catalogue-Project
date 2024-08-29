import React from 'react'
import './InputFieldComponent.scss'
import { UseFormRegister } from 'react-hook-form';


interface Inputfieldinterface
{
    name:string;
    // value:string;
    // onChange:(param:string)=>void
    blurfunction:()=>void
    type?: string;
    register: UseFormRegister<any>;
    required?: boolean;
}

const InputFieldComponent:React.FC<Inputfieldinterface> = ({name,blurfunction,type='text',register, required = false}) => {


    const handleclick=()=>{
        console.log("hi hello");

    }
  return (
    <div>
        <input {...register(name, { required })} type={type} autoComplete='off' name={name}  onBlur={blurfunction} className='Input-Filed'/>

    </div>
  )
}

export default InputFieldComponent