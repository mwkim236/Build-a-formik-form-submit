import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  function validateEmail(email) {
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    return (regx.test(email));
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    
    onSubmit: values => {
      console.log('form: ', values);
      alert("Login Successful")
    },
    
    validate: values => {
      let errors = {};
      
      if(!validateEmail(values.email)) {
        errors.email = 'Username should be an email'
      }
      if (!values.email){
        errors.email = 'Required'
      }
      if (!values.password) errors.password = 'Required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input 
          id="emailField" 
          type="text" 
          name="email"
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{color:'red'}}>{
            formik.errors.email}
          </div> 
        ): null}

        <div>Password</div>
        <input 
          id="password" 
          type="text" 
          name="password"
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{color:'red'}}>
            {formik.errors.password}
          </div> 
        ): null}

        <button type="submit">Submit</button>
        {console.log('test: ', validateEmail(formik.values.email))}
      </form>
    </div>
  );
}

export default App;
