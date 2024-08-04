/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'
import {Map, Marker, useApiIsLoaded} from '@vis.gl/react-google-maps';
import {MapViewState} from '@deck.gl/core';
import {GeoJsonLayer} from '@deck.gl/layers';
import { DeckGlOverlay } from './maps/deckgl-overlay';
import type {Feature, GeoJSON} from 'geojson';
import { useEffect } from 'react';

interface Props {
  markers: {lat: number, lng: number}[];
  bikeRoutes: any;
  isLargeScreen: any;
}

function getDeckGlLayers(data: GeoJSON | null) {
  if (!data) return [];

  return [
    new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      stroked: false,
      opacity: 0.5,
      filled: true,
      extruded: true,
      pointType: 'circle',
      lineWidthScale: 20,
      lineWidthMinPixels: 4,
      getFillColor: [160, 160, 180, 200],
      getLineColor: (f: Feature) => {
        const hex = f?.properties?.color;

        if (!hex) return [20, 52, 164];

        return hex.match(/[0-9a-f]{2}/g)!.map((x: string) => parseInt(x, 16));
      },
      getPointRadius: 200,
      getLineWidth: 1,
      getElevation: 30
    })
  ];
}

const MapComponent = ({markers, bikeRoutes, isLargeScreen}: Props) => {
  const apiIsLoaded = useApiIsLoaded();

  useEffect(() => {
    if (!apiIsLoaded) return;
  }, [apiIsLoaded]);

  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 144.964463,
    latitude: -37.809458,
    zoom: 14
  };
    
  return (
    <div style={isLargeScreen ? { height: '100vh', width: '75vw', position: 'relative' } : { height: '75vh', width: '100vw', position: 'relative' }}>
      <Map
        defaultZoom={INITIAL_VIEW_STATE.zoom}
        defaultCenter={{lat:INITIAL_VIEW_STATE.latitude, lng: INITIAL_VIEW_STATE.longitude}}
        mapId={"c8995fccea74e4d5"}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {
          markers.map((value, key) => <Marker key={key} position={{lat: value.lat, lng: value.lng}}></Marker>)
        }
        
        <DeckGlOverlay layers={getDeckGlLayers(bikeRoutes)} />
      </Map>
    </div>
  )
};

export { MapComponent };
