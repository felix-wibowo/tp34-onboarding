// Based on example from https://github.com/visgl/react-google-maps/tree/main/examples/marker-clustering
// import accidents from './accidentdata.json';

export type Accident = {
  accident_no: string;
  accident_datetime: string;
  accident_type: string;
  severity: string;
  speed_zone: string;
  road_name: string;
  road_type: string;
  latitude: number;
  longitude: number;
  bicyclist: number;
  serious_injury: number;
  other_injury: number;
  non_injured: number;
  fatality: number;
  post_code: number;
};

export type CategoryData = {
  key: string;
  label: string;
  count: number;
};

export async function loadAccidentDataset(): Promise<Accident[]> {
  return new Promise(resolve => {
    fetch('/api/accidentdata')
      .then((res) => res.json())
      .then((data: Accident[]) => {
        // console.log("Data = ", data);
        resolve(data);
      })
      .catch((error) => {
        console.error("Error fetching accident data:", error);
        resolve([]); // Resolve with an empty array on error
      });
  });
}

export function getCategories(accidents?: Accident[]): CategoryData[] {
  if (!accidents) return [];

  const countByCategory: {[c: string]: number} = {};
  for (const t of accidents) {
    if (!countByCategory[t.severity]) countByCategory[t.severity] = 0;
    countByCategory[t.severity] = (countByCategory[t.severity] ?? 0) + 1;

  }

  return Object.entries(countByCategory).map(([key, value]) => {
    const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return {
      key: key,
      label,
      count: value
    };
  });
}

// export default Accident[];
