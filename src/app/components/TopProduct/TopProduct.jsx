import { ClientProductGrid } from "./ClientProductGrid";

export default async function TopProduct() {
  let products = [];
  let error = null;

  try {
    // 1. Data is fetched on the server.
    //    - Uncomment your actual fetch when your API is ready.
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/top`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    products = data;
  } catch (err) {
    console.error("Failed to fetch top products:", err);
    error = "Could not load top products at this time.";
  }

  // 2. It renders the Client Component, passing the fetched data as a prop.
  return <ClientProductGrid initialProducts={products} error={error} />;
}
