import { PdfDownload } from './pdf-download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ReactSVG } from 'react-svg';

export function Header({ togglesideBar }) {
    return (
        <header>
            <div>
                <button onClick={togglesideBar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <h4 style={{ margin: 0, whiteSpace: 'nowrap' }}>CV Builder</h4>
            </div>
            <div>
                <a href='https://github.com/nabelk'>
                    <button title='Check my github profile'>
                        <ReactSVG src='../../public/github-logo.svg'></ReactSVG>
                    </button>
                </a>
                <PdfDownload></PdfDownload>
            </div>
        </header>
    );
}
