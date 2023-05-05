import './cardWidget.css'
import carrito from './assets/carrito.png'

export default function CardWidget(){
    return(
        <div>
            <img src={carrito} alt="carrito" />
            0
        </div>
    )
}