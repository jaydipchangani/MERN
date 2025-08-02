import React, { useState } from 'react';

function UserDetailForm() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''  // ✅ Correct spelling
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div><br />
      <form onSubmit={handleSubmit}>
        Name: <input
          type='text'
          name='name'
          value={userDetails.name}
          onChange={handleChange}
        /><br />

        Email: <input
          type='email'
          name='email'
          value={userDetails.email}
          onChange={handleChange}
        /><br />

        Password: <input
          type='password'
          name='password'
          value={userDetails.password}
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserDetailForm;
