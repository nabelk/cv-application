import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { GeneralInfoForm } from './components/general-form';
import { EducationForm } from './components/education-form';
import { WorkForm } from './components/work-form';
import generalInfo from './assets/generalInfo.json';
import education from './assets/education.json';

function App() {
    return (
        <>
            {/*   <Section title='General Information' listInput={generalInfo}></Section>
            <Section title='Education' listInput={education}></Section> */}
            <GeneralInfoForm></GeneralInfoForm>
            <EducationForm></EducationForm>
            <WorkForm></WorkForm>
        </>
    );
}

export default App;
