import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import logo from './assets/logo.png'
import ig from './assets/ig.svg'
import fb from './assets/fb.svg'

const Navbar = () => <nav>
        <div className="container">
          <ul>
            <li className="left"><img src={logo}/></li>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/servicios'>Servicios</Link></li>
            <li><Link to='/galeria'>Galeria</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
            <li><Link to='/clientes'>Clientes</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
          </ul>
        </div>
      </nav>
      
const Footer = () => <footer>
        <div className='container'>
          <div>
            <p className='strong space-under'>Mantenimiento de Espacios Verdes</p>
            <p className='font-color-2'>Calle Siempreviva 123</p>
            <p className='space-under font-color-2'>Movil: +54 9 312323231231</p>
            <p className='font-color-2'>Copyright ©2022. Todos los derechos Reservados</p>
            <p>Desarrollado por <a href="#">Ombu Desarrollo</a></p>
          </div>
          
          <div>
            <p className='strong space-under'>Servicios</p>

            <p>Mantenimiento de espacios verdes</p>
            <p>Poda en altura</p>
            <p>Fumigación</p>
            <p>Paisajismo</p>
            <p>Cercos perimetrales</p>
                    
          </div>
          
          <div class="socials-container">
            <p className='strong'>Tambien estamos en</p>
            <a className='socials' href="https://www.instagram.com/valentino_matas_/" target="_blank" rel="noopener noreferrer"><img src={ig}/></a>
            <a className='socials' href="https://www.instagram.com/valentino_matas_/" target="_blank" rel="noopener noreferrer"><img src={fb}/></a>
          </div>
        
        </div>
      </footer>

const Home = () => <h1>Pagina de Tino dea</h1>
const Services = () => <h1>Servicios</h1>
const Gallery = () => <h1>Galeria</h1>
const AboutUs = () => <h1>Sobre Nosotros</h1>
const Clients = () => <h1>Clientes</h1>
const Contact = () => <h1><a href="https://wa.me/+5493814144832" target="_blank" rel="noopener noreferrer">Click para charlar con tino</a></h1>
const NotFound = () => <h1>Not Found</h1>

function App() {

  return (
    <div className="App">
      <Navbar/>
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/servicios' element={<Services/>}/>
          <Route path='/galeria' element={<Gallery/>}/>
          <Route path='/nosotros' element={<AboutUs/>}/>
          <Route path='/clientes' element={<Clients/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
      
      <Footer/>
    </div>
  )
}

export default App
