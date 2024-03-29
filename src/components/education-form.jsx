import { useState } from 'react';
import { Input } from './input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ListItem({ list, handleInputChange, handleDeleteEducation, isNewList }) {
    const [showItem, setShowItem] = useState(isNewList);

    return (
        <ul style={{ listStyle: 'none' }}>
            {showItem ? (
                <>
                    <div>
                        <button onClick={() => handleDeleteEducation(list.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <span onClick={() => setShowItem(false)}>
                            <FontAwesomeIcon icon={faCaretUp} />
                        </span>
                    </div>
                    <li>
                        <Input
                            label='School'
                            placeholder='Enter School'
                            value={list.school}
                            onChange={(e) => {
                                handleInputChange(e, list.id, 'school');
                            }}
                        ></Input>
                    </li>
                    <li>
                        <Input
                            label='Degree'
                            placeholder='Enter Degree'
                            value={list.degree}
                            onChange={(e) => {
                                handleInputChange(e, list.id, 'degree');
                            }}
                        ></Input>
                    </li>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '9px',
                        }}
                    >
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
                    </div>
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <h4 style={{ margin: 0 }}>
                        {list.degree ? list.degree : `Education ${list.id}`}
                    </h4>
                    <span onClick={() => setShowItem(true)}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>
            )}
        </ul>
    );
}

export function EducationForm({ initialEducationData, onFormDataChange }) {
    const [educationList, setEducationList] = useState(initialEducationData);
    const [showEdu, setShowEdu] = useState(false);

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
        <ListItem
            key={list.id}
            list={list}
            handleInputChange={handleInputChange}
            handleDeleteEducation={handleDeleteEducation}
            isNewList={!list.degree ?? true}
        ></ListItem>
    ));

    return (
        <section style={{ padding: !showEdu ? '0.5rem 2rem' : '1.5rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Education </h2>
                <span onClick={() => (showEdu ? setShowEdu(false) : setShowEdu(true))}>
                    {!showEdu ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                    )}
                </span>
            </div>
            <div style={{ display: !showEdu ? 'none' : 'block' }}>{listItems}</div>
            <button style={{ display: !showEdu ? 'none' : 'block' }} onClick={handleAddEducation}>
                Add Education
            </button>
        </section>
    );
}
