import ProductCardBtn from "./ProductCardBtn"
export default function ProductCard({ product,handleProductSelect }) {
    return (
        <>
            <article>
                <header>{product.name}</header>
                <img src={product.thumbNail} alt="" />
                <footer> < ProductCardBtn productId={product.id}    handleProductSelect={handleProductSelect}/> </footer>
            </article>
        </>
    )
}
