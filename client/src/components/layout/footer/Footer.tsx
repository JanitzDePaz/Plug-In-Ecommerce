import { Link } from "react-router"
export const Footer = () => {
    return(
        <footer className="flex-center gap-[5vw] py-5 border-t border-black">
            <section className="footerSections">
                <h3 className="footerSectionTitles">Contacto</h3>
                <div className="footerDivs">
                    <p className="text-lg"><span className="sr-only">Teléfono: </span>+34 634 65 12 32</p>
                    <p className="text-lg"><span className="sr-only">Correo: </span>info@plugin.net</p>
                    <Link className="footerLinks" to="/Contacto">Formulario</Link>
                </div>
                
            </section>
            <section className="footerSections">
                <h3 className="footerSectionTitles">Redes</h3>
                <ul className="flex-center gap-10 w-full">
                    <li className="flex-1 max-w-[60px]"><a href=""><img src="/footer/Facebook.png" alt="Facebook logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src="/footer/Instagram.png" alt="Instagram logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src="/footer/Whatsapp.png" alt="Whatsapp logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src="/footer/X.png" alt="X logo" className="imageLink" /></a></li>
                </ul>
            </section>
            <section className="footerSections">
                <h3 className="footerSectionTitles">Politicas</h3>
                <div className="footerDivs">
                    <Link className="footerLinks" to="/PoliticaDePrivacidad">Privacidad</Link>
                    <Link className="footerLinks" to="/Cookies">Cookies</Link>
                    <Link className="footerLinks" to="/Terminos">Términos</Link>
                </div>
            </section>
        </footer>
    )
}