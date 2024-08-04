// Based on example from https://github.com/visgl/react-google-maps/tree/main/examples/marker-clustering
'use client'
import React, {useEffect, useState, useMemo} from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

import {ControlPanel} from './control-panel';
import {getCategories, loadAccidentDataset, Accident} from './accidents';
import {ClusteredAccidentMarkers} from './clustered-accident-markers';
import './style.css';

export default function AccidentMap() {
    const [accidents, setAccidents] = useState<Accident[]>();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // load data asynchronously
    useEffect(() => {
        loadAccidentDataset().then(data => setAccidents(data));
    }, []);

    // get category information for the filter-dropdown
    const categories = useMemo(() => getCategories(accidents), [accidents]);
    const filteredTrees = useMemo(() => {
        if (!accidents) return null;

        return accidents.filter(
        t => !selectedCategory || t.severity === selectedCategory
        );
    }, [accidents, selectedCategory]);

    return (
        <div className='flex flex-row h-[75vh]'>
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ""} region="AU">
            <div className='basis-9/12 px-5'>
            <Map
                mapId={'bf51a910020fa25a'}
                defaultCenter={{lat: -37.7675396, lng: 144.8821606}}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI>
                {filteredTrees && <ClusteredAccidentMarkers accidents={filteredTrees} />}
            </Map>
            </div>
            <div className=''>
            <ControlPanel
                categories={categories}
                onCategoryChange={setSelectedCategory}
            />
            </div>
            </APIProvider>
        </div>
    );
}