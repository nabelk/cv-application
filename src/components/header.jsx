import { PdfDownload } from './pdf-download';

export function Header() {
    return (
        <header>
            <h4 style={{ margin: 0 }}>CV Generator</h4>
            <PdfDownload></PdfDownload>
        </header>
    );
}
