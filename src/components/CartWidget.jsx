import cart from "../assets/carro.png"

export const CartWidget = () => {
    
    return (
        <> 
            <img src={cart} alt="Carrito de compras" width={40}/>
            <span>0</span>
        </> 
    )
}