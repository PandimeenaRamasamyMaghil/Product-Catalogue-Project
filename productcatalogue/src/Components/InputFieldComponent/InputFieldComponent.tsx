import React from 'react'
import './InputFieldComponent.scss'
import { UseFormRegister ,FieldError,UseFormTrigger} from 'react-hook-form';


interface Inputfieldinterface
{
    name:string;
    type?: string;
    register: UseFormRegister<any>;
    required?: boolean;
    validation?: any; 
    error?: FieldError; 
    trigger:UseFormTrigger<any>;
    placeholder?:string
}

const InputFieldComponent:React.FC<Inputfieldinterface> = ({name,type='text',register,required = false,validation,
  error,trigger,placeholder}) => {

    const handleBlur=()=>{
      trigger(name);

    }



   
  return (
    <div>
      <div className='input-and-spantext'>
        <input {...register(name,validation)} type={type} autoComplete='off' name={name} onBlur={handleBlur}   className='Input-Filed'/>
         <span className='placeholder'>{placeholder}</span></div>
        {error && <p className='Input-Field-Error-message'>{error.message}</p>}
    </div>
  )
}

export default InputFieldComponent