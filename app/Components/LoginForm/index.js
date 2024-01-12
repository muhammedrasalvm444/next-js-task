"use client";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuth } from "@/context/authContext";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters"),
  })
  .required();
const LoginForm = () => {
  const { login, loading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    login({ username: data?.username, password: data?.password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-blue-100 border rounded-md bg-gradient-to-r from-blue-500 to-blue-200">
        <h1 className="text-3xl font-medium text-center ">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="User name"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <LoadingButton
            type="submit"
            fullWidth
            loadingPosition="start"
            variant="contained"
            className="flex items-center mt-4 bg-black justify-self-center hover:bg-blue-900"
          >
            {loading ? "Loading" : "Submit"}
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
