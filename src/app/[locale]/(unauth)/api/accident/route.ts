import { logger } from "@/libs/Logger";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const json = await request.json();

  try {
    logger.info('A new guestbook has been created');

    return NextResponse.json(json);
  } catch (error) {
    logger.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};
