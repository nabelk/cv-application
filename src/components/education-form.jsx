import { useState } from 'react';
import { Input } from './input';

export function EducationForm() {
    const [educationList, setEducationList] = useState([
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            school: 'University XYZ',
            start_date: new Date(),
            end_date: new Date(),
        },
    ]);

    const handleAddEducation = () => {
        setEducationList([
            ...educationList,
            {
                id: educationList.length + 1,
                degree: '',
                school: '',
                start_date: new Date(),
                end_date: new Date(),
            },
        ]);
    };

    const handleDeleteEducation = (id) => {
        setEducationList(educationList.filter((list) => list.id !== id));
    };

    const handleInputChange = (e, listId, field) => {
        setEducationList(
            educationList.map((edu) =>
                edu.id === listId ? { ...edu, [field]: e.target.value } : edu,
            ),
        );
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
                <Input label='Start date'></Input>
                <Input label='End date'></Input>
            </li>
        </ul>
    ));

    educationList.map((list) => {
        console.table(list);
    });

    return (
        <section>
            <h2>Education</h2>
            <div>{listItems}</div>
            <button onClick={handleAddEducation}>Add Education</button>
        </section>
    );
}
