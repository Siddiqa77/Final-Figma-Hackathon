
import { NextRequest, NextResponse } from "next/server";
import { shipengine } from "../../../../lib/helper/shipEngine";


export async function POST(req: NextRequest) {
  try {
    const { rateId } = await req.json();
    const label = await shipengine.createLabelFromRate({ rateId });
    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating the label" },
      { status: 500 }
    );
  }
}