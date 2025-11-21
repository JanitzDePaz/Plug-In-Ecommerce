import { Link } from "react-router"
export const Footer = () => {
    return(
        <footer className="flex justify-around py-5 border-t border-black">
            <section className="footerSections">
                <h3 className="footerSectionTitles">Contacto</h3>
                <div className="footerDivs">
                    <p>+34 634 65 12 32</p>
                    <p>info@plugin.net</p>
                    <Link to="/Contacto">Formulario</Link>
                </div>
                
            </section>
            <section className="footerSections">
                <h3 className="footerSectionTitles">Redes</h3>
                <ul className="flex-center gap-4">
                    <li><a href=""><img src="/footer/Facebook.png" alt="Facebook logo"  /></a></li>
                    <li><a href=""><img src="/footer/Instagram.png" alt="Instagram logo"  /></a></li>
                    <li><a href=""><img src="/footer/Whatsapp.png" alt="Whatsapp logo"  /></a></li>
                    <li><a href=""><img src="/footer/X.png" alt="X logo"  /></a></li>
                </ul>
            </section>
            <section className="footerSections">
                <h3 className="footerSectionTitles">Politicas</h3>
                <div className="footerDivs">
                    <Link to="/PoliticaDePrivacidad">Privacidad</Link>
                    <Link to="/Cookies">Cookies</Link>
                    <Link to="/Terminos">Términos</Link>
                </div>
            </section>
        </footer>
    )
}