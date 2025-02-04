import { abortOnSynchronousPlatformIOAccess } from "next/dist/server/app-render/dynamic-rendering";

type ProductPageProps = {
    params: {
        slug: string;
    };
};

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;

    return (
        <>
            <div>
                <h1>Product Details</h1>
                <h2>Product ID: {slug}</h2>
            </div>
        </>
    );
}
