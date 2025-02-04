import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  chartData?: any[];
}

const UserDataForm: React.FC<{ onUpdate: (data: UserData) => void }> = ({ onUpdate }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserData>();
  const [, setIsFormDirty] = useState(false);

  const onSubmit = (data: UserData) => {
    const userDataWithId = { ...data, id: uuidv4() };

    const updatedUserData = {
      ...userDataWithId,
      chartData: [
        { name: 'January', value: 50 },
        { name: 'February', value: 75 },
        { name: 'March', value: 100 },
        { name: 'April', value: 40 },
        { name: 'May', value: 65 },
      ],
    };

    // Save updated data to localStorage
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    // Pass the data back to the parent
    onUpdate(updatedUserData);
    reset();
    setIsFormDirty(false);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">User Information Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} onChange={() => setIsFormDirty(true)}>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="form-input"
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              } 
            })}
            className="form-input"
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number'
              }
            })}
            className="form-input"
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error-message">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="form-input"
            placeholder="Enter your address"
          />
          {errors.address && <span className="error-message">{errors.address.message}</span>}
        </div>

        <button type="submit" className="submit-button">Save User Data</button>
      </form>
    </div>
  );
};

export default UserDataForm;
