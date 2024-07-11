// Styles
import "./Form.scss";
// Icons
import { IconMail, Logo, IconPassword } from "../../icons";
// Libs
import React from "react";
import { useForm } from "react-hook-form";
// Constants
import { FormTextConfig } from "../../constants/formTextConfig";
// Components
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { FormHeader } from "./FormHeader";

export const Form = ({ mode,onSubmit,authError }) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  return (
    <div className="layout">
      <div className="form">
        <Logo width="184px" height="40px" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form__wrap"
        >
          <FormHeader
            title={FormTextConfig[mode].title}
            subtitle={FormTextConfig[mode].subtitle}
          />
          <FormInput
            labelName={"Email address"}
            typeInput={"email"}
            icon={<IconMail width="16px" height="16px" />}
            error={errors.email}
            {...register("email", { required: true })}
          />
          <FormInput
            labelName={mode === "reg" ? "Create password" : "Password"}
            typeInput={"password"}
            icon={<IconPassword width="14px" height="12px" />}
            error={errors.password}
            {...register("password", { required: true })}
          />
          {mode === "reg" && (
            <FormInput
              labelName={"Confirm password"}
              typeInput={"password"}
              icon={<IconPassword width="14px" height="12px" />}
              error={errors.confirmPassword}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />
          )}
          {authError && (
            <span className="error">
              {authError}
            </span>
          )}
          <FormButton className="btn-purple">
            {FormTextConfig[mode].buttonText}
          </FormButton>
          <p style={{ textAlign: "center" }}>
            {FormTextConfig[mode].bottomText}
          </p>
        </form>
      </div>
    </div>
  );
};
