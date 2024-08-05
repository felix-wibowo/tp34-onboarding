import { db } from "@/libs/Db";
import { accidentSchema } from "@/models/Schema";
import { sql } from "drizzle-orm";
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { stepsStartingLocs } = await req.json();

  let uniqueAccidents = new Set();

  // Perform a spatial query for each starting location
  for (const loc of stepsStartingLocs) {
    const { lat, lng } = loc;
    const accidents = await db.select().from(accidentSchema).where(sql`earth_distance(ll_to_earth(${lat}, ${lng}), ll_to_earth(latitude, longitude)) <= 100`);

    accidents.forEach(accident => uniqueAccidents.add(JSON.stringify(accident)));
  }

  const uniqueAccidentsArray: typeof accidentSchema.$inferSelect[] = Array.from(uniqueAccidents).map((accident: any) => JSON.parse(accident));

  // Formatting output
  let aggregatedSeverity: {
    serious_injury: {
      count: number;
      accidents: typeof accidentSchema.$inferSelect[];
    },
    other_injury: {
      count: number;
      accidents: typeof accidentSchema.$inferSelect[];
    },
    non_injured: {
      count: number;
      accidents: typeof accidentSchema.$inferSelect[]
    },
    fatality: {
      count: number;
      accidents: typeof accidentSchema.$inferSelect[]
    }
  } = {
    serious_injury: {
      count: 0,
      accidents: []
    },
    other_injury: {
      count: 0,
      accidents: []
    },
    non_injured: {
      count: 0,
      accidents: []
    },
    fatality: {
      count: 0,
      accidents: []
    }
  }

  uniqueAccidentsArray.forEach((accident) => {
    if (accident.fatality) {
      aggregatedSeverity.fatality.count += accident.fatality;
      aggregatedSeverity.fatality.accidents.push(accident);      
    }
    else if (accident.serious_injury) {
      aggregatedSeverity.serious_injury.count += accident.serious_injury;
      aggregatedSeverity.serious_injury.accidents.push(accident);      
    }
    else if (accident.other_injury) {
      aggregatedSeverity.other_injury.count += accident.other_injury;
      aggregatedSeverity.other_injury.accidents.push(accident);      
    }
    else if (accident.non_injured) {
      aggregatedSeverity.non_injured.count += accident.non_injured;
      aggregatedSeverity.non_injured.accidents.push(accident);      
    }
  });

  return NextResponse.json({ aggregatedSeverity }, { status: 200 });
};
