import { useState } from 'react';
import './App.css';
import { GeneralInfoForm } from './components/general-form';
import { EducationForm } from './components/education-form';
import { WorkForm } from './components/work-form';
import { DisplayCV } from './components/display';
import { Header } from './components/header';

function App() {
    const [formData, setFormData] = useState([
        [
            {
                firstName: 'John',
                lastName: 'Doe',
                phoneNumber: '60189570810',
                email: 'johndoe@gmail.com',
                jobTitle: 'Software Engineer',
            },
        ],
        [
            {
                id: 1,
                degree: 'Bachelor of Science in Computer Science',
                school: 'University XYZ',
                start_date: new Date('2022-05-02'),
                end_date: new Date('2022-12-31'),
            },
        ],
        [
            {
                id: 1,
                title: 'Frontend Developer',
                company_name: 'Google',
                employment_type: 'Contract',
                description: '',
                start_date: new Date('2022-05-02'),
                end_date: new Date('2022-12-31'),
            },
        ],
    ]);

    const handleFormData = (newDataChange, idx) => {
        setFormData((prevFormData) => {
            const newFormData = [...prevFormData];
            newFormData[idx] = newDataChange;
            return newFormData;
        });
    };

    return (
        <>
            <div>
                <GeneralInfoForm
                    initialGeneralData={formData[0]}
                    onFormDataChange={handleFormData}
                ></GeneralInfoForm>
                <EducationForm
                    initialEducationData={formData[1]}
                    onFormDataChange={handleFormData}
                ></EducationForm>
                <WorkForm
                    initialWorkData={formData[2]}
                    onFormDataChange={handleFormData}
                ></WorkForm>
            </div>
            <div id='pdf-content'>
                <DisplayCV formData={formData}></DisplayCV>
            </div>
            <Header></Header>
        </>
    );
}

export default App;
