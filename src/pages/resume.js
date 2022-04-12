import React, { useState } from 'react'
import resumePDF from '../assets/HamzaSalman-Resume.pdf'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

  return (
    <div className='resumeBody'>
        <Button variant="warning" href={resumePDF} size="lg" target='_blank'>
            Download CV
        </Button>
        <div class='pages'>
            <Document file="https://raw.githubusercontent.com/Hamza-Salman/PortfolioWebsite/df5af198a0812327d9889c5986cc1c9c72711149/src/assets/HamzaSalman-Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} scale={window.innerWidth > 786 ? 1.7 : 0.6}/>
            </Document>
            <p>
                Page {1} of {numPages}
            </p>
        </div>
        <div class='pages'>
            <Document file="https://raw.githubusercontent.com/Hamza-Salman/PortfolioWebsite/df5af198a0812327d9889c5986cc1c9c72711149/src/assets/HamzaSalman-Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={2} scale={window.innerWidth > 786 ? 1.7 : 0.6}/>
            </Document>
            <p>
                Page {2} of {numPages}
            </p>
        </div>
        <Button variant="warning" href={resumePDF} size="lg" target='_blank'>
            Download CV
        </Button>
    </div>
  )
}

export default Resume