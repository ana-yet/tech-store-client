import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("TecthStore");

    const users = await db.collection("users").find({}).toArray();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("TecthStore");
    const body = await req.json();

    const result = await db.collection("users").insertOne({
      name: body.name,
      email: body.email,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "User added", id: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
