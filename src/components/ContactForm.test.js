import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('if form renders', () => {
    render(<ContactForm />);
});

test('testing to see if it accepts inputs/submit', () => {
    let {getByLabelText, findAllByText, getByText} = render(<ContactForm />);
    
    //grabbing inputs/submit from form

    let firstName = getByLabelText(/first name/i),
        lastName = getByLabelText(/last name/i),
        email = getByLabelText(/email/i);
    
    fireEvent.change(firstName, { target: {name: 'firstName', value: 'John'}});
    fireEvent.change(lastName, {target: {name: 'lastName', value: 'Smith'}});
    fireEvent.change(email, {target: {name: 'email', value: 'someemail@email.com'}});

    let submit = getByText(/submit/i);

    fireEvent.click(submit);

    // findAllByText(/john/i);



});