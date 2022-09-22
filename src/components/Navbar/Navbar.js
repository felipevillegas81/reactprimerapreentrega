import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <nav style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>Optimax</h1>
            </div>
            <div>
                <button>Inicio</button>
                <button>Quienes Somos</button>
                <button>Tus Gafas</button>
                <button>Tus Lentes</button>
                <button>Ingresa</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
)
}

export default Navbar