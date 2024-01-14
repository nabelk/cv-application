import { useState } from 'react';
import { Input } from './input';

export function EducationForm({ initialEducationData, onFormDataChange }) {
    const [educationList, setEducationList] = useState(initialEducationData);

    const handleAddEducation = () => {
        const newEducationList = [
            ...educationList,
            {
                id: educationList.length + 1,
                degree: '',
                school: '',
                start_date: new Date(),
                end_date: new Date(),
            },
        ];
        setEducationList(newEducationList);
        onFormDataChange(newEducationList, 1);
    };

    const handleDeleteEducation = (id) => {
        const newEducationList = educationList.filter((list) => list.id !== id);
        setEducationList(newEducationList);
        onFormDataChange(newEducationList, 1);
    };

    const handleInputChange = (e, listId, field) => {
        const newEducationList = educationList.map((edu) =>
            edu.id === listId
                ? { ...edu, [field]: field.includes('date') ? e : e.target.value }
                : edu,
        );
        setEducationList(newEducationList);
        onFormDataChange(newEducationList, 1);
    };

    const listItems = educationList.map((list) => (
        <ul key={list.id} style={{ listStyle: 'none' }}>
            <button onClick={() => handleDeleteEducation(list.id)}>Delete</button>
            <li>
                <Input
                    label='School'
                    placeholder='Enter School'
                    value={list.school}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'school');
                    }}
                ></Input>
                <Input
                    label='Degree'
                    placeholder='Enter Degree'
                    value={list.degree}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'degree');
                    }}
                ></Input>
                <Input
                    label='Start date'
                    value={list.start_date}
                    onChange={(date) => {
                        handleInputChange(date, list.id, 'start_date');
                    }}
                ></Input>
                <Input
                    label='End date'
                    value={list.end_date}
                    onChange={(date) => {
                        handleInputChange(date, list.id, 'end_date');
                    }}
                ></Input>
            </li>
        </ul>
    ));

    return (
        <section>
            <h2>Education</h2>
            <div>{listItems}</div>
            <button onClick={handleAddEducation}>Add Education</button>
        </section>
    );
}
