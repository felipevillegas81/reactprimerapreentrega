import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <nav style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className='card'>
                <h1>Optimax</h1>
            </div>
            <div className='botton'>
                <button>Inicio</button>
                <button>Quienes Somos</button>
                <button>Tus Gafas</button>
                <button>Tus Lentes</button>
                <button>Ingresa</button>
            </div>
            <div className='shopping'>
                <CartWidget />
            </div>
        </nav>
)
}

export default Navbar