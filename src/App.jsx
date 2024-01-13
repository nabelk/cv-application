import './App.css';
import { GeneralInfoForm } from './components/general-form';
import { EducationForm } from './components/education-form';
import { WorkForm } from './components/work-form';

function App() {
    return (
        <>
            <GeneralInfoForm></GeneralInfoForm>
            <EducationForm></EducationForm>
            <WorkForm></WorkForm>
        </>
    );
}

export default App;
