import { NextResponse } from 'next/server';
import { accidentSchema } from '@/models/Schema';
import { db } from '@/libs/Db';
import { AccidentValidation, DeleteAccidentValidation } from '@/validations/AccidentValidation';
import { eq } from 'drizzle-orm';
import { logger } from '@/libs/Logger';

// GET all accidents
export const GET = async (request: Request) => {
  try {
    return NextResponse.json({ hi: "hi" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// POST a new accident
export const POST = async (request: Request) => {
    const json = await request.json();
    const parse = AccidentValidation.safeParse(json);

    if (!parse.success) {
      return NextResponse.json(parse.error.format(), { status: 422 });
    }

    try {
      const accident = await db
        .insert(accidentSchema)
        .values(parse.data)
        .returning();

      logger.info('A new guestbook has been created');

      return NextResponse.json({
        id: accident[0]?.accident_no,
      });
    } catch (error) {
      logger.error(error, 'An error occurred while creating an accident');

      return NextResponse.json({}, { status: 500 });
    }
};

// PUT (update) an accident
export const PUT = async (request: Request) => {
    const json = await request.json();
    const parse = AccidentValidation.safeParse(json);

    if (!parse.success) {
      return NextResponse.json(parse.error.format(), { status: 422 });
    }

    try {
      await db
        .update(accidentSchema)
        .set({})
        .where(eq(accidentSchema.accident_no, parse.data.accident_no));
  
      logger.info('An accident entry has been updated');
  
      return NextResponse.json({});
    } catch (error) {
      logger.error(error, 'An error occurred while updating an accident');
  
      return NextResponse.json({}, { status: 500 });
    }
  };

// DELETE an accident
export const DELETE = async (request: Request) => {
    const json = await request.json();
    const parse = DeleteAccidentValidation.safeParse(json);
  
    if (!parse.success) {
      return NextResponse.json(parse.error.format(), { status: 422 });
    }
  
    try {
      await db
        .delete(accidentSchema)
        .where(eq(accidentSchema.accident_no, parse.data.accident_no));
  
      logger.info('An accident entry has been deleted');
  
      return NextResponse.json({});
    } catch (error) {
      logger.error(error, 'An error occurred while deleting a accident');
  
      return NextResponse.json({}, { status: 500 });
    }
};
