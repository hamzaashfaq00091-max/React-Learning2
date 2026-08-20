import { NextResponse } from "next/server";
import { getTodos, removeTodo, updateTodo } from "@/lib/todos";

export async function GET(request, { params }) {
  const { id } = await params;
  const todo = getTodos().find((item) => item.id === Number(id));
  return todo
    ? NextResponse.json(todo)
    : NextResponse.json({ error: "Todo not found" }, { status: 404 });
}

export async function PATCH(request, { params }) {
  const id = Number((await params).id);
  const { completed } = await request.json();
  const todo = updateTodo(id, { completed: Boolean(completed) });
  return todo
    ? NextResponse.json(todo)
    : NextResponse.json({ error: "Todo not found" }, { status: 404 });
}

export async function DELETE(request, { params }) {
  const removed = removeTodo(Number((await params).id));
  return removed
    ? new Response(null, { status: 204 })
    : NextResponse.json({ error: "Todo not found" }, { status: 404 });
}
