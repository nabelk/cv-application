export function DisplayCV({ formData }) {
    const [general, education, work] = [formData[0][0], formData[1], formData[2]];

    return (
        <>
            <div>
                <h1 style={{ marginBottom: '15px ' }}>
                    {general.firstName} {general.lastName}
                </h1>
                <h2>{general.jobTitle}</h2>
                <ul
                    style={{
                        listStyle: 'none',
                        paddingLeft: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                    }}
                >
                    <li>{general.email}</li>
                    <li>{general.phoneNumber}</li>
                </ul>
            </div>
            <hr></hr>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '25px',
                    width: '90%',
                }}
            >
                <h4 style={{ marginTop: '15px', justifySelf: 'start' }}>EXPERIENCE</h4>
                <div style={{ marginTop: '13.5px', justifySelf: 'start', textAlign: 'left' }}>
                    {work.map((info, idx) => (
                        <div
                            key={info.id}
                            style={{ marginBottom: idx < work.length - 1 ? '2.5rem' : '1.3rem' }}
                        >
                            <h4 style={{ marginTop: '0', marginBottom: '0' }}>{info.title}</h4>
                            <p style={{ marginBottom: '0', marginTop: '3px', fontSize: '0.95rem' }}>
                                <span>{info.company_name}</span> -{' '}
                                <span>{info.employment_type}</span>
                            </p>
                            <p
                                style={{
                                    marginBottom: '12px',
                                    marginTop: '3px',
                                    fontSize: '0.95rem',
                                }}
                            >
                                <span>
                                    {info.start_date.toLocaleString('en-US', { month: 'long' })}{' '}
                                    {info.start_date.getFullYear()}
                                </span>{' '}
                                -{' '}
                                <span>
                                    {info.end_date.toLocaleString('en-US', { month: 'long' })}{' '}
                                    {info.end_date.getFullYear()}
                                </span>
                            </p>
                            {info.description.split('\n').map((paragraph, index) => (
                                <p
                                    key={index}
                                    style={{
                                        margin: index !== 0 ? '-2px 0' : 'initial',
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '25px',
                    width: '90%',
                }}
            >
                <h4 style={{ marginTop: '15px', justifySelf: 'start' }}>EDUCATION</h4>
                <div style={{ marginTop: '13.5px', justifySelf: 'start', textAlign: 'left' }}>
                    {education.map((edu, idx) => (
                        <div
                            key={edu.id}
                            style={{ marginBottom: idx < work.length - 1 ? '2.5rem' : '1.3rem' }}
                        >
                            <h4 style={{ marginTop: '0', marginBottom: '0' }}>{edu.degree}</h4>
                            <p
                                style={{
                                    marginTop: '6px',
                                    fontSize: '0.95rem',
                                    display: edu.school === '' ? 'none' : 'block',
                                }}
                            >
                                <span>{edu.school}</span> |{' '}
                                <span>
                                    {edu.start_date.getFullYear()} {'  '}-{'  '}
                                    {edu.end_date.getFullYear()}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
