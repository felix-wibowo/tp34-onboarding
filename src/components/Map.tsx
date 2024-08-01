/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'
import {Map, limitTiltRange, Marker} from '@vis.gl/react-google-maps';
import {MapViewState} from '@deck.gl/core';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';

interface Props {
  markers: {lat: number, lng: number}[];
}

const MapComponent = ({markers}: Props) => {
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 144.964463,
    latitude: -37.809458,
    zoom: 14
  };
    
  type DataType = {
    from: [longitude: number, latitude: number];
    to: [longitude: number, latitude: number];
  };
  
  const layers = [
    new LineLayer<DataType>({
      id: 'line-layer',
      data: '/path/to/data.json',
      getSourcePosition: (d: DataType) => d.from,
      getTargetPosition: (d: DataType) => d.to,
    })
  ];

  return (
    <div style={{ height: '75vh', width: '75vw', position: 'relative' }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        layers={layers}
        controller={true}
        onViewStateChange={limitTiltRange}
      >
        <Map
          defaultZoom={INITIAL_VIEW_STATE.zoom}
          defaultCenter={{lat:INITIAL_VIEW_STATE.latitude, lng: INITIAL_VIEW_STATE.longitude}}
        >
          {
            markers.map((value, key) => <Marker key={key} position={{lat: value.lat, lng: value.lng}}></Marker>)
          }
        </Map>
      </DeckGL>
    </div>
  )
};

export { MapComponent };
