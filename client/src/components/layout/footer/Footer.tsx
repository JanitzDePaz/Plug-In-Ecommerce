import { Link } from "react-router"
import facebookLogo from "../../../assets/icons/social/Facebook.png"
import instagramLogo from "../../../assets/icons/social/Instagram.png"
import xLogo from "../../../assets/icons/social/X.png"
import whatsappLogo from "../../../assets/icons/social/Whatsapp.png"
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
                <ul className="flex-center gap-2 xl:gap-10 w-full ">
                    <li className="flex-1 max-w-[60px]"><a href=""><img src={facebookLogo} alt="Facebook logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src={instagramLogo} alt="Instagram logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src={whatsappLogo} alt="Whatsapp logo" className="imageLink" /></a></li>
                    <li className="flex-1 max-w-[60px]"><a href=""><img src={xLogo} alt="X logo" className="imageLink" /></a></li>
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