import { db } from "@/libs/Db";
import { logger } from "@/libs/Logger";
import { accidentSchema } from "@/models/Schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const accidents = await db.select().from(accidentSchema).limit(10);

    return NextResponse.json({ accidents }, { status: 200 });
  } catch (error) {
    logger.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};
