import { NextRequest, NextResponse } from "next/server";

const CRM_URL = process.env.CRM_BASE_URL ?? "https://softwareelits.com";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  try {
    const res = await fetch(`${CRM_URL}/crm_inc/core/leadManagement`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { status: false, messages: ["Network error. Please try again."] },
      { status: 500 }
    );
  }
}
