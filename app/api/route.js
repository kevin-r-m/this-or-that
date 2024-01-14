import { NextResponse } from 'next/server';

async function GET(request) {
    return NextResponse.json({ hello: 'world' })
}

export {GET}