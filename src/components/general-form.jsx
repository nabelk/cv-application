import { Input } from './input';
import generalInfo from '../assets/generalInfo.json';

// export function Section({ title, listInput }) {
//     console.table(listInput);
//     const listItems = listInput.map((input) => (
//         <li key={input.id}>
//             <Input label={input.label} placeholder={input.placeholder} />
//         </li>
//     ));

//     return (
//         <section>
//             <h2>{title}</h2>
//             <ul style={{ listStyle: 'none' }}>{listItems}</ul>
//         </section>
//     );
// }

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
