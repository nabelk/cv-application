import { useState, useEffect } from 'react';
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
                degree: 'Bachelor in Computer Science',
                school: "Taylor's University",
                start_date: new Date('2015-05-02'),
                end_date: new Date('2017-12-31'),
            },
        ],
        [
            {
                id: 1,
                title: 'Frontend Developer',
                company_name: 'Google',
                employment_type: 'Contract',
                description:
                    '- Implemented and maintained front-end web applications, resulting in a 10% increase in website traffic and conversion rates.\n - Developed and executed front-end development strategies, resulting in a 15% increase in website performance.',
                start_date: new Date('2019-05-02'),
                end_date: new Date('2020-12-31'),
            },
        ],
    ]);
    // State for tablet/mobile sidebar
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setSidebarVisible(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const togglesideBar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleFormData = (newDataChange, idx) => {
        setFormData((prevFormData) => {
            const newFormData = [...prevFormData];
            newFormData[idx] = newDataChange;
            return newFormData;
        });
    };

    return (
        <>
            <div style={{ display: sidebarVisible ? 'flex' : 'none' }}>
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
            {/* Id pdf-content is a reference for jsPDF */}
            <div id='pdf-content'>
                <DisplayCV formData={formData}></DisplayCV>
            </div>
            <Header togglesideBar={togglesideBar}></Header>
        </>
    );
}

export default App;
