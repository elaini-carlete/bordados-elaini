import { Link } from "react-scroll";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function Header() {
    return (
        <header className="font-inter flex flex-col desktop:flex-row desktop:justify-around desktop:items-center">
            <a className="flex justify-center">
                <img className="w-52" src="/logo-bordados-elaini-preview.png" alt="Logo" />
            </a>

            <div className="flex justify-around items-center desktop:gap-20">
                <nav className="p-6 rounded-lg flex justify-between">
                    <ul className="flex flex-col gap-3 tablet:flex tablet:flex-row tablet:items-center tablet:gap-10">
                        <li className="border-l-2 border-dark pl-2 cursor-pointer tablet:border-none">
                            <Link to="perfil" smooth={true} duration={500}>Sobre Mim</Link>
                        </li>
                        <li className="border-l-2 border-dark pl-2 cursor-pointer tablet:border-none">
                            <Link to="trabalhos" smooth={true} duration={500}>Meus Trabalhos</Link>
                        </li>
                        <li className="border-l-2 border-dark pl-2 cursor-pointer tablet:border-none">
                            <Link to="valores" smooth={true} duration={500}>Valores</Link>
                        </li>
                        <li className="border-l-2 border-dark pl-2 cursor-pointer tablet:border-none">
                            <Link to="atendimentos" smooth={true} duration={500}>Atendimento</Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <ul className="flex gap-5 mobile:flex-row">
                        <li className="border-double border-4 border-dark p-2 rounded-full">
                            <a className="text-2xl" href="https://www.instagram.com/bordados_elaini/" target="_blank"><FaInstagram /></a>
                        </li>
                        <li className="border-double border-4 border-dark p-2 rounded-full">
                            <a className="text-2xl" href="https://wa.me/qr/H6QSKNMQNLDYI1" target="_blank"><FaWhatsapp /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}