import { Link } from "react-scroll";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function Header() {
    return (
        <header className="flex flex-col desktop:flex-row desktop:items-center">
            <a className="flex justify-center align-center">
                <img className="w-52" src="../../public/logo-bordados-elaini-preview.png" alt="Logo" />
            </a>
            
            <div className="relative before:absolute before:top-[-5px] before:w-[85%] before:left-1/2 before:-translate-x-1/2 before:h-[calc(100%+10px)] before:border-2 before:z-[-1] before:animate-colorPulse desktop:justify-around w-full">
                <div className="bg-light p-5 rounded-lg flex justify-around items-center">
                    <nav>
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
                        <ul className="flex flex-col gap-5 mobile:flex-row">
                            <li className="border-double border-4 border-dark p-2 rounded-full">
                                <a className="text-2xl" href="https://www.instagram.com/bordados_elaini/" target="_blank"><FaInstagram /></a>
                            </li>
                            <li className="border-double border-4 border-dark p-2 rounded-full">
                                <a className="text-2xl" href="https://wa.me/qr/H6QSKNMQNLDYI1" target="_blank"><FaWhatsapp /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}