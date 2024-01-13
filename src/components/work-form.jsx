import { useState } from 'react';
import { Input } from './input';

export function WorkForm() {
    const [workList, setWorkList] = useState([
        {
            id: 1,
            title: 'Frontend Developer',
            company_name: 'Google',
            employment_type: 'Contract',
            description: '',
            start_date: new Date('2022-05-02'),
            end_date: new Date('2022-12-31'),
        },
    ]);

    const handleAddExperience = () => {
        setWorkList([
            ...workList,
            {
                id: workList.length + 1,
                title: '',
                company_name: '',
                employment_type: '',
                description: '',
                start_date: new Date(),
                end_date: new Date(),
            },
        ]);
    };

    const handleDeleteExperience = (id) => {
        setWorkList(workList.filter((list) => list.id !== id));
    };

    const handleInputChange = (e, listId, field) => {
        setWorkList(
            workList.map((work) =>
                work.id === listId
                    ? {
                          ...work,
                          [field]: field.includes('date') ? e : e.target.value,
                      }
                    : work,
            ),
        );
    };

    const listItems = workList.map((list) => (
        <ul key={list.id} style={{ listStyle: 'none' }}>
            <button onClick={() => handleDeleteExperience(list.id)}>Delete</button>
            <li>
                <Input
                    label='Title'
                    placeholder='Enter job title'
                    value={list.title}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'title');
                    }}
                ></Input>
                <Input
                    label='Company Name'
                    placeholder='Enter company name'
                    value={list.company_name}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'company_name');
                    }}
                ></Input>
                <Input
                    label='Employment Type'
                    placeholder='Ex: Full-time'
                    value={list.employment_type}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'employment_type');
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
            <h2>Work Experience</h2>
            <div>{listItems}</div>
            <button onClick={handleAddExperience}>Add Experience</button>
        </section>
    );
}
