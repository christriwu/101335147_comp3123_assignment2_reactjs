import React, { useState } from 'react';


const LoginForm = () => {

 const [user, setUser] = useState({

    username: '',

    password: ''

 });


 const handleChange = (e) => {

    const { name, value } = e.target;

    setUser(prevState => ({

      ...prevState,

      [name]: value

    }));

 };


 const handleSubmit = (e) => {

    e.preventDefault();

    console.log(user);



 };


 const formStyle = {

    display: 'flex',

    flexDirection: 'column',

    alignItems: 'center',

    width: '300px',

    margin: '0 auto',

    padding: '20px',

    border: '1px solid #ddd',

    borderRadius: '5px'

 };


 const labelStyle = {

    marginBottom: '5px',

    fontWeight: 'bold'

 };


 const inputStyle = {

    marginBottom: '15px',

    padding: '5px',

    border: '1px solid #ddd',

    borderRadius: '3px'

 };


 const buttonStyle = {

    backgroundColor: '#007bff',

    color: 'white',

    padding: '8px 16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer'

 };


 return (

    <form onSubmit={handleSubmit} style={formStyle}>

      <label style={labelStyle}>

        Username:

        <input

          type="text"

          name="username"

          value={user.username}

          onChange={handleChange}

          style={inputStyle}

        />

      </label>

      <label style={labelStyle}>

        Password:

        <input

          type="password"

          name="password"

          value={user.password}

          onChange={handleChange}

          style={inputStyle}

        />

      </label>

      <button type="submit" style={buttonStyle}>Login</button>

    </form>

 );

};


export default LoginForm;