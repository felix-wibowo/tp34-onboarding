"use client";

import { MapComponent } from '@/components/BikeMap';
import herobackground from '/public/herobackground-cycleroutes.png'
import { AutocompleteCustom } from '@/components/AutocompletePlaces';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

const PLACES_INPUT_NAME = {
    STARTING: "starting",
    DESTINATION: "destination"
}

interface MarkerTypes {
    lat: number; 
    lng: number
};

export default function Page({bikeRoutes}: any) {
    const [startingPlace, setStartingPlace] = useState<google.maps.places.PlaceResult | null>(null);
    const [destinationPlace, setDestinationPlace] = useState<google.maps.places.PlaceResult | null>(null);
    const [markers, setMarkers] = useState<MarkerTypes[]>([]);

    const onPlaceSelect = (place: google.maps.places.PlaceResult | null, inputName: string) => {
        switch (inputName) {
            case PLACES_INPUT_NAME.STARTING:
                setStartingPlace(place);
                break;
            case PLACES_INPUT_NAME.DESTINATION:
                setDestinationPlace(place);
                break;
        }
    };

    useEffect(() => {
        const startingMarker: any = startingPlace ? {lat: startingPlace.geometry?.location?.lat(),lng: startingPlace.geometry?.location?.lng()} : null;

        const destinationMarker: any = destinationPlace ? {lat: destinationPlace.geometry?.location?.lat(),lng: destinationPlace.geometry?.location?.lng()} :  null;
        
        const markers: MarkerTypes[] = [];
        if (startingMarker) markers.push(startingMarker);
        if (destinationMarker) markers.push(destinationMarker);

        setMarkers(markers);
    }, [startingPlace, destinationPlace])
    
    return (
    <>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ""} region="AU">
            <section id="hero">
                <div
                    className="relative h-[50vh] w-full flex items-center justify-start text-left bg-cover bg-center bg-no-repeat"
                    style={{
                    backgroundImage:
                        `url(${herobackground.src})`
                    }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-65" />
                    <main className="px-10 lg:px-24 z-10">
                    <div className="text-middle">
                        <h2 className="font-sans text-6xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
                        Plan your next
                        <span className="text-orange-400"> safe ride</span>
                        </h2>
                        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                        Community Safe Bicycling Information
                        </p>
                    </div>
                    </main>
                </div>
            </section>
            <section id="routeform" className='bg-white-200'>
                <div className='flex flex-1 justify-center py-10'>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap mb-2">
                            <div className="w-full px-2 mb-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-start-from"
                            >
                                Start From
                            </label>
                            <AutocompleteCustom onPlaceSelect={onPlaceSelect} inputName={PLACES_INPUT_NAME.STARTING}></AutocompleteCustom>

                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full px-2 mb-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-destination"
                            >
                                Destination
                            </label>

                            <AutocompleteCustom onPlaceSelect={onPlaceSelect} inputName={PLACES_INPUT_NAME.DESTINATION}></AutocompleteCustom>
                            
                            </div>
                        </div>
                        <div className='px-2'>
                            <button
                                type="button"
                                className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                Find Route
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section id='routemap' className='bg-white-200 flex flex-1 justify-center' style={{marginBottom: "20px"}}>
                <div>
                    <MapComponent markers={markers} bikeRoutes={bikeRoutes}/>
                </div>
            </section>
        </APIProvider>
    </>
    );
}