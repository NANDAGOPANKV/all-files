import React, { useContext } from "react";
import "../App.css";
// react-hook-form and yup and resolvers
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Context
import { AppContext } from "../App";

function Form() {
  // context
  const { setUserName } = useContext(AppContext);
  // schema
  const schema = yup.object().shape({
    fullname: yup.string().required("Your Full Name is Required"),
    email: yup
      .string()
      .email()
      .required("Email is Required"),
    age: yup
      .number()
      .positive()
      .min(18)
      .max(100)
      .required("Age is Required"),
    password: yup
      .string()
      .min(5)
      .max(20)
      .required("Password is Required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Dont Match")
      .required("ConfirmPassword is Required"),
  });

  // useForm here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // onsubmit data
  const onSubmit = (data) => {
    console.log(data);
    setUserName(data);
  };

  // return
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="FullName..."
          {...register("fullname")}
        />
        {errors.fullname ? <p>{errors.fullname.message}</p> : <></>}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email...."
          {...register("email")}
        />
        {errors.email ? <p>{errors.email.message}</p> : ""}
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Age..."
          {...register("age")}
        />
        {errors.age ? <p>{errors.age.message}</p> : ""}
        <input
          type="password"
          placeholder="Password..."
          name="password"
          id="password"
          {...register("password")}
        />
        {errors.password ? <p>{errors.password.message}</p> : ""}
        <input
          name="confirmpassword"
          id="confirmpassword"
          type="password"
          placeholder="confirmpassword..."
          {...register("confirmpassword")}
        />
        {errors.confirmpassword ? <p>{errors.confirmpassword.message}</p> : ""}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
