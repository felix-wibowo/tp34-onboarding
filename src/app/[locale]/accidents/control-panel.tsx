// Based on example from https://github.com/visgl/react-google-maps/tree/main/examples/marker-clustering
import React, {useCallback} from 'react';
import {CategoryData} from './accidents';

type ControlPanelProps = {
  categories: Array<CategoryData>;
  onCategoryChange: (value: string | null) => void;
};

export const ControlPanel = ({
  categories,
  onCategoryChange
}: ControlPanelProps) => {
  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onCategoryChange(e.target.value || null);
    },
    [onCategoryChange]
  );
  return (
    <div>
      <p>
        Select Accident Type
      </p>
      <p>
        <select onChange={handleCategoryChange}>
          <option value={''}>All Accidents</option>

          {categories.map(category => (
            <option key={category.key} value={category.key}>
              {category.label} ({category.count})
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};
