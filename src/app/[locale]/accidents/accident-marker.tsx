// Based on example from https://github.com/visgl/react-google-maps/tree/main/examples/marker-clustering
import {Accident} from './accidents';
import type {Marker} from '@googlemaps/markerclusterer';
import React, {useCallback} from 'react';
import {AdvancedMarker} from '@vis.gl/react-google-maps';
import Image from 'next/image';
import accidentmarker from "/public/accidentmarker.svg";

export type TreeMarkerProps = {
  accident: Accident;
  onClick: (tree: Accident) => void;
  setMarkerRef: (marker: Marker | null, key: string) => void;
};

/**
 * Wrapper Component for an AdvancedMarker for a single accident.
 */
export const AccidentMarker = (props: TreeMarkerProps) => {
  const {accident, onClick, setMarkerRef} = props;

  const handleClick = useCallback(() => onClick(accident), [onClick, accident]);
  const ref = useCallback(
    (marker: google.maps.marker.AdvancedMarkerElement) =>
      setMarkerRef(marker, accident.accident_no),
    [setMarkerRef, accident.accident_no]
  );

  return (
    <AdvancedMarker position={{ lat: accident.latitude, lng: accident.longitude }} ref={ref} onClick={handleClick}>
      <span className="marker-clustering-tree">
        <Image
          src={accidentmarker}
          alt='Accident Marker'
          height={20}
          width={20}
          >
        </Image>
      </span>
    </AdvancedMarker>
  );
};
