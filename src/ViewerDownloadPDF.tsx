import { Document, Image, Page, StyleSheet } from '@react-pdf/renderer';
// tslint:disable-next-line
import React from 'react';
import axios from 'axios';
const blobToBase64 = (data) => new Promise((response, reject) => {

    const reader =  new FileReader();
    reader.onerror = (err) => reject(err);
    reader.onload = (result) => {
        response(result.target.result);
    };

    reader.readAsDataURL(data);

});
const getBase64 = async (src) => {
    const {data} = await axios.get(src, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    });
    const base64 = await blobToBase64(new Blob([data]));
    console.log('src', src);
    console.log('base64', base64);
    return base64;
};

const styles = StyleSheet.create({
    image: { width: '100px', height: '100px'},
});

const ViewerDownloadPDF = ({ images }) => {
    return (
        <Document>
            {images.map(({ src }) => {
                getBase64(src);
                return (
                    <Page key={src} size="A4">
                        <Image style={styles.image} src={src}/>
                    </Page>
                );
            })}
        </Document>
    );
};

export { ViewerDownloadPDF };
