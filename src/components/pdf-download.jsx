import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function PdfDownload() {
    const handleDownloadPDF = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input, {
            useCORS: true,
            allowTaint: true,
            scrollY: -window.scrollY,
        }).then((canvas) => {
            const image = canvas.toDataURL('image/jpeg', 1.0);
            const doc = new jsPDF('p', 'px', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const widthRatio = pageWidth / canvas.width;
            const heightRatio = pageHeight / canvas.height;
            const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
            const canvasWidth = canvas.width * ratio;
            const canvasHeight = canvas.height * ratio;
            const marginX = (pageWidth - canvasWidth) / 2;
            const marginY = (pageHeight - canvasHeight) / 2;

            doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
            doc.output('dataurlnewwindow');
        });
    };
    return (
        <div>
            <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}
