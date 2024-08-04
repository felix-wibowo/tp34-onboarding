// Based on example from https://github.com/visgl/react-google-maps/tree/main/examples/marker-clustering
import {InfoWindow, useMap} from '@vis.gl/react-google-maps';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {type Marker, MarkerClusterer} from '@googlemaps/markerclusterer';
import {Accident} from './accidents';
import {AccidentMarker} from './accident-marker';

export type ClusteredAccidentMarkersProps = {
  accidents: Accident[];
};

/**
 * The ClusteredTreeMarkers component is responsible for integrating the
 * markers with the markerclusterer.
 */
export const ClusteredAccidentMarkers = ({accidents}: ClusteredAccidentMarkersProps) => {
  const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  const [selectedTreeKey, setSelectedTreeKey] = useState<string | null>(null);

  const selectedAccident = useMemo(
    () =>
      accidents && selectedTreeKey
        ? accidents.find(t => t.accident_no === selectedTreeKey)!
        : null,
    [accidents, selectedTreeKey]
  );

  // create the markerClusterer once the map is available and update it when
  // the markers are changed
  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({map});
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  // this callback will effectively get passsed as ref to the markers to keep
  // tracks of markers currently on the map
  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
    setMarkers(markers => {
      if ((marker && markers[key]) || (!marker && !markers[key]))
        return markers;

      if (marker) {
        return {...markers, [key]: marker};
      } else {
        const {[key]: _, ...newMarkers} = markers;

        return newMarkers;
      }
    });
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedTreeKey(null);
  }, []);

  const handleMarkerClick = useCallback((accident: Accident) => {
    setSelectedTreeKey(accident.accident_no);
  }, []);

  return (
    <>
      {accidents.map(acc => (
        <AccidentMarker
          key={acc.accident_no}
          accident={acc}
          onClick={handleMarkerClick}
          setMarkerRef={setMarkerRef}
        />
      ))}

      {selectedTreeKey && (
        <InfoWindow style={{fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '1.5',
          padding: '2px',
          backgroundColor: '#fff',
          borderRadius: '2px',}}
          anchor={markers[selectedTreeKey]}
          onCloseClick={handleInfoWindowClose}>
          <div style={{}}>
            <h2 style={{margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold'}}>Accident Details</h2>
            <p style={{}}>
              <strong>Accident No:</strong> {selectedAccident?.accident_no}
            </p>
            <p style={{}}>
              <strong>Date &amp; Time:</strong> {selectedAccident?.accident_datetime}
            </p>
            <p style={{}}>
              <strong>Type:</strong> {selectedAccident?.accident_type}
            </p>
            <p style={{}}>
              <strong>Severity:</strong> {selectedAccident?.severity}
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
