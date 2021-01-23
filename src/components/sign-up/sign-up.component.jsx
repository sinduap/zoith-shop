import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert('passwords dont match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      state: { displayName, email, password, confirmPassword },
      handleChange,
      handleSubmit,
    } = this;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="username"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            label="email"
            name="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            label="confirm password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
