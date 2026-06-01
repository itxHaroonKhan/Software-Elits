import { NextRequest, NextResponse } from "next/server";

const CRM_URL = process.env.CRM_BASE_URL ?? "https://softwareelits.com";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const res = await fetch(`${CRM_URL}/crm_inc/core/pricingManagement`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
