import React, { useState, useEffect } from 'react';
import FormData from '../data/formData';
import './dynamic-form.css';

const DynamicForm = (props) => {
  const [customData, setCustomData] = useState([]);

  useEffect(() => {
    // set loading/fetching state
    // fetch data and parse json

    setCustomData(FormData);
  }, []);

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

  const handleInput = (event) => {
    const { value, valueAsDate, name, type, checked } = event.target;

    // The default value from date wouldn't work on the function provided and as well as the check's value.
    switch (type) {
      case 'checkbox':
        setFormState({ ...formState, [name]: checked });
        break;

      case 'date':
        setFormState({ ...formState, [name]: valueAsDate });
        break;

      default:
        setFormState({ ...formState, [name]: value });
        break;
    }
  };

  const formFromData = customData.map((element, index) => {
    const { name, type, human_label, tag, conditional } = element;
    const DynamicTag = tag;

    const CustomTag = (
      <div key={name} className="input-section">
        <label className="human-label">{human_label}</label>
        <DynamicTag
          autoFocus={index === 0}
          type={type}
          name={name}
          onChange={handleInput}
        />
      </div>
    );

    if (conditional) {
      const meetsConditions = conditional?.show_if(formState[conditional.name]);

      return meetsConditions ? CustomTag : null;
    }

    return CustomTag;
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonForm = JSON.stringify(formState);
    console.log(jsonForm);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {formFromData}
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DynamicForm;
