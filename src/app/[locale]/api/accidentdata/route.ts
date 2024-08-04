import { db } from "@/libs/Db";
import { accidentSchema } from "@/models/Schema";
import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await db.select().from(accidentSchema);
  
  const accidents = data.map((d) => {
    return {
      accident_no: d.accident_no,
      accident_datetime: d.accident_datetime,
      accident_type: d.accident_type,
      severity: d.severity,
      speed_zone: d.speed_zone,
      road_name: d.road_name,
      road_type: d.road_type,
      latitude: d.latitude,
      longitude: d.longitude,
      bicyclist: d.bicyclist,
      serious_injury: d.serious_injury,
      other_injury: d.other_injury,
      non_injured: d.non_injured,
      fatality: d.fatality,
      post_code: d.post_code
    }
  })

  return NextResponse.json(accidents, { status: 200 });
}
