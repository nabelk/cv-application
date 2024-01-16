import { useState } from 'react';
import { Input } from './input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export function WorkForm({ initialWorkData, onFormDataChange }) {
    const [workList, setWorkList] = useState(initialWorkData);
    const [showWork, setShowWork] = useState(false);

    const handleAddExperience = () => {
        const newWorkList = [
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
        ];
        setWorkList(newWorkList);
        onFormDataChange(newWorkList, 2);
    };

    const handleDeleteExperience = (id) => {
        const newWorkList = workList.filter((list) => list.id !== id);
        setWorkList(newWorkList);
        onFormDataChange(newWorkList, 2);
    };
    const handleInputChange = (e, listId, field, checkNewLine) => {
        const checkValue = checkNewLine ? e.target.value + '\n' : e.target.value;
        const newWorkList = workList.map((work) =>
            work.id === listId
                ? {
                      ...work,
                      [field]: field.includes('date') ? e : checkValue,
                  }
                : work,
        );
        setWorkList(newWorkList);
        onFormDataChange(newWorkList, 2);
    };

    const handleKeyDown = (e, listId, field) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleInputChange(e, listId, field, true);
        }
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
            </li>
            <li>
                <Input
                    label='Company Name'
                    placeholder='Enter company name'
                    value={list.company_name}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'company_name');
                    }}
                ></Input>
            </li>
            <li>
                <Input
                    label='Employment Type'
                    placeholder='Ex: Full-time'
                    value={list.employment_type}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'employment_type');
                    }}
                ></Input>
            </li>
            <li>
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    placeholder='Enter description about the job'
                    cols='30'
                    rows='10'
                    value={list.description}
                    onChange={(e) => {
                        handleInputChange(e, list.id, 'description');
                    }}
                    onKeyDown={(e) => handleKeyDown(e, list.id, 'description')}
                ></textarea>
            </li>
            <li>
                <Input
                    label='Start date'
                    value={list.start_date}
                    onChange={(date) => {
                        handleInputChange(date, list.id, 'start_date');
                    }}
                ></Input>
            </li>
            <li>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Work Experience </h2>
                <span onClick={() => (showWork ? setShowWork(false) : setShowWork(true))}>
                    {!showWork ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                    )}
                </span>
            </div>
            <div style={{ display: !showWork ? 'none' : 'block' }}>{listItems}</div>
            <button style={{ display: !showWork ? 'none' : 'block' }} onClick={handleAddExperience}>
                Add Experience
            </button>
        </section>
    );
}
