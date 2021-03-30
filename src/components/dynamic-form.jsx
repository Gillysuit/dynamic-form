import React, { useState } from 'react';
import FormData from '../data/formData';
import './dynamic-form.css';

const DynamicForm = (props) => {
  const dataSchema = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    job_title: '',
    date_of_birth: {},
    parental_consent: null,
  };

  const [formState, setFormState] = useState(dataSchema);

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonForm = JSON.stringify(formState);
    console.log(jsonForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DynamicForm;
