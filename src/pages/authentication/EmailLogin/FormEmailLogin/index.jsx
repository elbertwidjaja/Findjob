import { Button, FormGroup, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useHttpReq from "../../../../hooks/useHttpReq";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext/context";
import loginAPI from "../../../../api/authentication/login";

const FormEmailLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setIsLoggedIn } = useContext(AuthContext);

  const { request, isLoading } = useHttpReq({
    method: "post",
    path: loginAPI,
  });

  const onSubmit = async (values) => {
    const { data: res, error } = await request({ body: values });

    if (error || !res) console.log(res, error);

    if (res.type === "error") console.log(res);

    setIsLoggedIn(true);
  };

  return (
    <FormGroup sx={{ width: "100%" }}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            key={field.name}
            helperText={
              Boolean(errors[field.name]) && errors[field.name]?.message
            }
            label="Email Address"
            type="email"
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            key={field.name}
            helperText={
              Boolean(errors[field.name]) && errors[field.name]?.message
            }
            sx={{ mt: 3 }}
            label="Password"
            type="password"
            {...field}
          />
        )}
      />
      <Button
        variant="contained"
        sx={{ mt: 6, py: 1.5 }}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
    </FormGroup>
  );
};

export default FormEmailLogin;
