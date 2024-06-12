import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../Components/InputField';

describe('InputField Component', () => {
  it('renders correctly and calls onChange with correct value', () => {
    const mockOnChange = jest.fn();
    const label = 'Test Label';
    const id = 'test-input';
    const placeholder = 'Enter text';
    const value = 'Initial value';

    render(
      <InputField 
        label={label} 
        id={id} 
        placeholder={placeholder} 
        value={value} 
        onChange={mockOnChange} 
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);

    // Simulate changing input value
    const newValue = 'New value';
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(mockOnChange).toHaveBeenCalledWith(newValue);
  });
});
