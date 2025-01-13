import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {  

const { name, phone,address,city,state,country,pincode} = await req.json(); 
const school = await prisma.school.create({
  data: {
    name,
    phone,
    address,
    city,
    state,
    country,
    pincode
  }
    
});
console.log(school);
return NextResponse.json({ message: "School registered successfully" }, { status: 200 });

}

// get all schools

export async function GET( ) {
  const schools = await prisma.school.findMany();
  return NextResponse.json(schools, { status: 200 });
}