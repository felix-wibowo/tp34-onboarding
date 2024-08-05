"use client";

import { MapComponent } from '@/components/BikeMap';
import herobackground from '/public/herobackground-cycleroutes.png'
import { AutocompleteCustom } from '@/components/AutocompletePlaces';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2'
import { Chip } from "@material-tailwind/react";

const PLACES_INPUT_NAME = {
  STARTING: "starting",
  DESTINATION: "destination"
}

interface MarkerTypes {
  lat: number; 
  lng: number
};

export default function Page({bikeRoutes}: any) {
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Assuming 'medium' starts at 768px
  const [startingPlace, setStartingPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [destinationPlace, setDestinationPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [markers, setMarkers] = useState<MarkerTypes[]>([]);
  const [displayedBikeRoutes, setDisplayedBikeRoutes] = useState(bikeRoutes);
  const [directionSteps, setDirectionSteps] = useState<google.maps.DirectionsStep[]>([]);

  const map = useMap();
  const routes = useMapsLibrary('routes');

  const [directionService, setDirectionService] = useState<google.maps.DirectionsService | null>();
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>();

  // UI references
  const bottomMostRef: any = useRef(null);

  const showSwal = () => {
    Swal.fire({
      title: "Finding your routes...",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
      },
      didClose: () => {
        
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
  
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

  const findRoute = async () => {
    if (!startingPlace && !destinationPlace) {
      console.log("No place found")
      return;
    }

    if (directionService && directionsRenderer) {
      showSwal();

      setMarkers([]);

      const startingGeo = { lat: startingPlace?.geometry?.location?.lat() ?? 0, lng: startingPlace?.geometry?.location?.lng() ?? 0}
      const destinationGeo = { lat: destinationPlace?.geometry?.location?.lat() ?? 0, lng: destinationPlace?.geometry?.location?.lng() ?? 0}
      
      const routeResult = await directionService.route({
        origin: new google.maps.LatLng(startingGeo.lat, startingGeo.lng),
        destination: new google.maps.LatLng(destinationGeo.lat, destinationGeo.lng),
        travelMode: google.maps.TravelMode.BICYCLING,
        unitSystem: google.maps.UnitSystem.METRIC
      });
      
      const routes = routeResult.routes as google.maps.DirectionsRoute[];
  
      const allSteps: google.maps.DirectionsStep[] = [];

      routes.forEach(route => {
        route.legs.forEach(leg => {
          allSteps.push(...leg.steps);
        });
      });

      setDirectionSteps(allSteps);
        
      setDisplayedBikeRoutes([])
  
      // Scroll to the bottom of the map container after updating the routes
      if (bottomMostRef) {
        bottomMostRef.current.scrollIntoView({ behavior: "smooth" });
      }
      
      directionsRenderer.setDirections(routeResult || null);
    }
  }

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 768);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      console.log("Resize")
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setDisplayedBikeRoutes(bikeRoutes);
  }, [bikeRoutes])

  useEffect(() => {
    const startingMarker: any = startingPlace ? {lat: startingPlace.geometry?.location?.lat(),lng: startingPlace.geometry?.location?.lng()} : null;

    const destinationMarker: any = destinationPlace ? {lat: destinationPlace.geometry?.location?.lat(),lng: destinationPlace.geometry?.location?.lng()} :  null;
    
    const markers: MarkerTypes[] = [];
    if (startingMarker) markers.push(startingMarker);
    if (destinationMarker) markers.push(destinationMarker);

    setMarkers(markers);
  }, [startingPlace, destinationPlace])

  useEffect(() => {
    if (!routes || !map) return;
    
    setDirectionService(new routes.DirectionsService)
    
    const directionsRenderer = new google.maps.DirectionsRenderer({
      suppressBicyclingLayer: true,
    });

    directionsRenderer.setMap(map);

    setDirectionsRenderer(directionsRenderer);
    
    return () =>{
      setDirectionService(null); 
      setDirectionsRenderer(null)
    };
  }, [map, routes]);
    
    return (
    <>
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

        <section id="map-display">
          <div className='flex flex-col md:flex-row'>
            <div className='p-5 h-screen flex flex-col'>
              <form className="w-full max-w-lg h-auto">
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
                <div className='px-2 pb-4'>
                  <button
                    onClick={findRoute}
                    type="button"
                    className="w-full text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                    Find Route
                  </button>
                </div>
              </form>

              <div className='flex-grow overflow-y-auto'>
                <hr />
                  {
                    directionSteps.length == 0 || 
                    <>
                      <div className="flex-1 text-center w-full my-2">
                        <h2 className="font-sans text-3xl tracking-tight leading-10 font-extrabold sm:text-2xl text-white sm:leading-none md:text-3xl">
                          <span className="text-orange-400">Route Details</span>
                        </h2>
                      </div>

                      <hr />
                      <div className="flex flex-row mt-2 justify-between">
                        <div className='flex'>
                          <Chip variant="outlined" value="Direction Steps"/>
                        </div>
                        <div className='flex'>
                          <Chip variant="outlined" value="Past Accidents"/>
                        </div>
                      </div>
                    </>
                  }
              </div>
            </div>
            <div >
              <MapComponent markers={markers} bikeRoutes={displayedBikeRoutes} isLargeScreen={isLargeScreen}/>
            </div>
            <div ref={bottomMostRef}>
            </div>
          </div>
        </section>
    </>
  );
}