import React, { useEffect }  from 'react';

import PreviewItem from './preview-item.component';

import {DATA} from '../data/picData';

import { convertCollectionsSnapshotToMap, firestore } from '../firebase/firebase.utils';

import './preview.styles.scss';


const Preview = () => {

    const previewElements = DATA.activities;


    useEffect(()=> {
        const collectionRef = firestore.collection('activities')
        
         collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        })
    });
    
    
    
    return (
        <div className='preview'>
            <h2>Select things that interest you and match with others</h2>
            <div className='preview-container'>
                {previewElements.map(({ id, title, url, category}) => (
                    <PreviewItem key={id} title={title} url={url} category={category}/>
                ))}
            </div>
        </div>
    )
}

export default Preview