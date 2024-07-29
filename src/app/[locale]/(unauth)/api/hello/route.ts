import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  return NextResponse.json({
    "Hello": "hello get world"
  });
};

export const POST = async (request: Request) => {
  return NextResponse.json({
    "Hello": "hello"
  });
};
