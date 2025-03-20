import ProductName from "@/app/components/ProductName";
import { fetchProduct } from "@/lib/api";


export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return <ProductName product={product} />;
}
