import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Proyectos from "./components/Proyectos/Proyectos";
import Clientes from "./components/Clientes/Clientes";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/ChatBot/ChatBot";
import Productos from "./components/Productos/Producto";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Productos />
        <Proyectos />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
