import React, { Component } from "react";
import {useForm} from "react-hook-form";
import { messages } from "./messages";

export default function Forms() {

    const {register,handleSubmit,errors} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        messages.push(`{
            id: 2,
            name: "Me",
            message: "${data}"
          }`);
    }


    
  return (
    <form onSubmit= {handleSubmit(onSubmit)}>
      <input type="text" placeholder="Type message..." name="ToSendMessage" ref= {register({required:true})}/>
      <input type="submit" value="Submit" />
      {errors.ToSendMessage && alert("Please input a message")}
    </form>
  );
}
