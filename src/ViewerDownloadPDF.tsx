import { Document, Image, Page } from '@react-pdf/renderer';
// tslint:disable-next-line
import React from 'react';
// import axios from 'axios';
// const blobToBase64 = (data) => new Promise((response, reject) => {

//     const reader =  new FileReader();
//     reader.onerror = (err) => reject(err);
//     reader.onload = (result) => {
//         response(result.target.result);
//     };

//     reader.readAsDataURL(data);

// });
// const getBase64 = async (src) => {
//     const {data} = await axios.get(src);
//     const base64 = await blobToBase64(new Blob([data]));
//     console.log('base64', base64);
//     return base64;
// };

const ViewerDownloadPDF = ({ images }) => {
    return (
        <Document>
            {images.map(({ src }) => {
                return (
                    <Page key={src} size="A4">
                        <Image src={src}/>
                    </Page>
                );
            })}
        </Document>
    );
};

export { ViewerDownloadPDF };
