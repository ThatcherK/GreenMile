import React, { FunctionComponent } from 'react';
import instance from '../config/axiosConfig';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type SignUpProps = {
  hideSignUp: () => void;
};

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  inviteCode: string;
};

const SignUp: FunctionComponent<SignUpProps> = ({ hideSignUp }) => {
  const initialValues: SignUpFormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Required!'),
      email: Yup.string().email('Wrong email format').required('Required'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password is not a match')
        .required('Required!'),
      inviteCode: Yup.string().required('Required'),
    }),
    onSubmit: (values, onSubmitProps) => {
      handleSignUp();
      onSubmitProps.resetForm();
    },
  });

  const payload = {
    name: formik.values.name,
    email: formik.values.email,
    password: formik.values.password,
    invite_code: formik.values.inviteCode,
  };
  const handleSignUp = () => {
    instance
      .post('http://127.0.0.1:5000/users', payload)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
    hideSignUp();
  };

  return (
    <form className="signUpContainer" onSubmit={formik.handleSubmit}>
      <form className="signUpForm">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          placeholder="Name"
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="email"
          value={formik.values.email}
          placeholder="Email"
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="inviteCode"
          value={formik.values.inviteCode}
          placeholder="Invite code"
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          value={formik.values.password}
          placeholder="Password"
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          placeholder="Confirm password"
          onChange={formik.handleChange}
        />
        <br />
        <button className="authBtn" type="submit">
          Sign Up
        </button>
      </form>
    </form>
  );
};

export default SignUp;
