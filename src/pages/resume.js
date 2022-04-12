import React, { useState, useEffect } from 'react'
import resumePDF from '../assets/HamzaSalman-Resume.pdf'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

  return (
    <div className='resumeBody'>
        <Button variant="warning" href={resumePDF} size="lg" target='_blank'>
            Download CV
        </Button>
        <Document file="temp" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
    </div>
  )
}

export default Resume