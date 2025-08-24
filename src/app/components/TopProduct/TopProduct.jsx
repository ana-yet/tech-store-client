import ClientProductGrid from "./ClientProductGrid";

const TopProduct = async () => {
  let error = null;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/top`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();

  // 2. It renders the Client Component, passing the fetched data as a prop.
  return <ClientProductGrid initialProducts={data} error={error} />;
};

export default TopProduct;
