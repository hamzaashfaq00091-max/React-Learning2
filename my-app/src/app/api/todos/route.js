import { NextResponse } from "next/server";
import { addTodo, getTodos } from "@/lib/todos";

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request) {
  try {
    const { title } = await request.json();
    if (typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "A title is required" }, { status: 400 });
    }
    return NextResponse.json(addTodo(title.trim()), { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON request payload" }, { status: 400 });
  }
}
