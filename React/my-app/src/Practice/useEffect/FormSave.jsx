import React, { useState, useEffect } from 'react';

function FormSave() {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  // Load saved form data on mount
  useEffect(() => {
    const savedForm = localStorage.getItem('formData');
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  // Save to localStorage on every change to form
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Optional: clear form and localStorage on submit
    // setForm({ name: '', email: '' });
    // localStorage.removeItem('formData');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Live Form Data:</h3>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default FormSave;
