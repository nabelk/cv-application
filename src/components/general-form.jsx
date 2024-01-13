import { Input } from './input';
import generalInfo from '../assets/generalInfo.json';

export function GeneralInfoForm() {
    const listItems = generalInfo.map((info) => (
        <li key={info.id}>
            <Input label={info.label} placeholder={info.placeholder} />
        </li>
    ));

    return (
        <section>
            <h2>General Information</h2>
            <ul style={{ listStyle: 'none' }}>{listItems}</ul>
        </section>
    );
}
