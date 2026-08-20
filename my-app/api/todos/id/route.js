import { NextResponse } from "next/server";

const data = [
  { id: 1, title: "Complete project proposal" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Schedule dentist appointment" },
  { id: 4, title: "Review pull requests" },
  { id: 5, title: "Clean the apartment" },
  { id: 6, title: "Prepare presentation slides" },
  { id: 7, title: "Pay utility bills" },
  { id: 8, title: "Exercise - 30 min cardio" },
  { id: 9, title: "Read a book" },
  { id: 10, title: "Call mom" },
];

export async function GET(
  request, { params }) {
  const { id } = await params;

  const todoId = Number(id);

  const todo = data.find((item) => item.id === todoId);

  if (!todo) {
    return NextResponse.json(
      { error: "Todo not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}