export default async function getAllProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
