import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json(); // get the posted data
    const data = body;

    const client = await clientPromise;
    const db = client.db("TechStore");
    const collection = db.collection("products");

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: true, productId: result.insertedId }),
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("TechStore");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
