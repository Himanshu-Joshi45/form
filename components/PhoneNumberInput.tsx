import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div>
        <PhoneInput
          id="phone-number"
          international
          defaultCountry="US"
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value || '')}
          className="w-full md:w-96 p-2 border rounded-md"
       
        />
      </div>

  );
}