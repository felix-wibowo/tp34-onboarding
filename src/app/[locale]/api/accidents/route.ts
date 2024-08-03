import { db } from "@/libs/Db";
import { accidentSchema } from "@/models/Schema";
import { NextResponse } from 'next/server';


export const GET = async () => {
  const data = await db.select({
    accident_no: accidentSchema.accident_no
  }).from(accidentSchema);

  // Or if you need to select all
  // const data = await db.select().from(accidentSchema);

  return NextResponse.json({...data}, { status: 200 });
}