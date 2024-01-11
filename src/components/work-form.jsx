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
            start_date: new Date(),
            end_date: new Date(),
        },
    ]);

    const listItems = workList.map((list) => (
        <ul key={list.id} style={{ listStyle: 'none' }}>
            <button onClick={() => handleDeleteExperience(list.id)}>Delete</button>
            <li>
                <Input
                    label='Title'
                    placeholder='Enter job title'
                    value={list.title}
                    // onChange={(e) => {
                    //     handleInputChange(e, list.id, 'title');
                    // }}
                ></Input>
                <Input
                    label='Company Name'
                    placeholder='Enter company name'
                    value={list.company_name}
                    // onChange={(e) => {
                    //     handleInputChange(e, list.id, 'company_name');
                    // }}
                ></Input>
                <Input
                    label='Employment Type'
                    placeholder='Ex: Full-time'
                    value={list.employment_type}
                    // onChange={(e) => {
                    //     handleInputChange(e, list.id, 'employment_type');
                    // }}
                ></Input>
                <Input label='Start date'></Input>
                <Input label='End date'></Input>
            </li>
        </ul>
    ));

    return (
        <section>
            <h2>Work Experience</h2>
            <div>{listItems}</div>
            {/* <button onClick={handleAddExperience}>Add Experience</button> */}
        </section>
    );
}
