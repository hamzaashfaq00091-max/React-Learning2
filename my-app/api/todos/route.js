import { NextResponse } from "next/server";


export async function GET(){
    const data = 

    [
  { "id": 1, "title": "Complete project proposal" },
  { "id": 2, "title": "Buy groceries" },
  { "id": 3, "title": "Schedule dentist appointment" },
  { "id": 4, "title": "Review pull requests" },
  { "id": 5, "title": "Clean the apartment" },
  { "id": 6, "title": "Prepare presentation slides" },
  { "id": 7, "title": "Pay utility bills" },
  { "id": 8, "title": "Exercise - 30 min cardio" },
  { "id": 9, "title": "Read a book" },
  { "id": 10, "title": "Call mom" }
]




return NextResponse.json(data)
};



export async function POST(request){


    try{

        const body = await request.json()

        const {id ,title}= body;

        if(!title){
            return NextResponse.json({error: "Missing fields Requires"},{status:400})
        }

         const newItem={id:Date.now(),title}

         return NextResponse.json({message:"Success",data:newItem},{status:201})

    }catch (error) {
    return NextResponse.json({ error: 'Invalid JSON request payload' }, { status: 500 });
  }

   
}




