export default function ProductDetails( {
    params,
}: {
    params: {productId: String};
}) {
    return <h1>Details about product {params.productId}</h1>;
}