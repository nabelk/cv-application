import { useState } from 'react';
import { Input } from './input';

export function GeneralInfoForm({ initialGeneralData, onFormDataChange }) {
    const [personalInfo, setPersonalInfo] = useState(initialGeneralData);

    const handleInputChange = (e, field) => {
        const newPersonalInfo = [{ ...personalInfo[0], [field]: e.target.value }];
        setPersonalInfo(newPersonalInfo);
        onFormDataChange(newPersonalInfo, 0);
    };

    const listItems = personalInfo.map((info, idx) => (
        <ul key={idx} style={{ listStyle: 'none' }}>
            <li>
                <Input
                    label='First Name'
                    placeholder='Enter first name'
                    value={info.firstName}
                    onChange={(e) => handleInputChange(e, 'firstName')}
                ></Input>
            </li>
            <li>
                <Input
                    label='Last Name'
                    placeholder='Enter last name'
                    value={info.lastName}
                    onChange={(e) => handleInputChange(e, 'lastName')}
                ></Input>
            </li>
            <li>
                <Input
                    label='Email'
                    placeholder='Enter email'
                    value={info.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                ></Input>
            </li>
            <li>
                <Input
                    label='Phone number'
                    placeholder='Enter phone number'
                    value={info.phoneNumber}
                    onChange={(e) => handleInputChange(e, 'phoneNumber')}
                ></Input>
            </li>
            <li>
                <Input
                    label='Job title'
                    placeholder='Enter job title'
                    value={info.jobTitle}
                    onChange={(e) => handleInputChange(e, 'jobTitle')}
                ></Input>
            </li>
        </ul>
    ));

    return (
        <section>
            <h2>General Information</h2>
            {listItems}
        </section>
    );
}
