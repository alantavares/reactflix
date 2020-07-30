import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  value, onChange, name, type, label,
}) {
  const fieldId = `id_${name}`;
  const input = (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  const textArea = (
    <textarea
      name={name}
      onChange={onChange}
      defaultValue={value}
    />
  );

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        {type === 'textarea' ? textArea : input}
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormField;
