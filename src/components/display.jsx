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
                <div style={{ marginTop: '13.5px', justifySelf: 'start' }}>
                    {work.map((info) => (
                        <div key={info.id}>
                            <h4 style={{ marginTop: '0' }}>{info.title}</h4>
                            <h4>
                                <span>{info.company_name}</span> -{' '}
                                <span>{info.employment_type}</span>
                            </h4>
                            <h4>
                                <span>
                                    {info.start_date.toLocaleString('en-US', { month: 'long' })}{' '}
                                    {info.start_date.getFullYear()}
                                </span>{' '}
                                -{' '}
                                <span>
                                    {info.end_date.toLocaleString('en-US', { month: 'long' })}{' '}
                                    {info.end_date.getFullYear()}
                                </span>
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
