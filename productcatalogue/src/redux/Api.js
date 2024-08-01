import axios from "axios"
export const itemCustomizationAPI= async(payload)=>{
    try{
        await axios.post("https://jsonplaceholder.typicode.com/todos",payload);
        console.log(payload)

    }catch(error){
        throw error;

    }
}


export const primarypageAPI= async(payload)=>{
    try{
        await axios.post("https://jsonplaceholder.typicode.com/todos",payload);
        console.log(payload)

    }catch(error){
        throw error;

    }
}
export const PricingDetailApi= async(payload)=>{
    try{
        await axios.post("https://jsonplaceholder.typicode.com/todos",payload);
        console.log(payload)

    }catch(error){
        throw error;

    }
}
