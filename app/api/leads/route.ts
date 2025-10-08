import { NextRequest, NextResponse } from "next/server";
import { addLead, getAllLeads } from "@/lib/leads";

export async function GET() {
  try {
    const leads = getAllLeads();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.businessName) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLead = addLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      businessName: data.businessName,
      message: data.message || "",
      timestamp: data.timestamp || new Date().toISOString()
    });

    return NextResponse.json(
      { success: true, lead: newLead },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create lead" },
      { status: 500 }
    );
  }
}