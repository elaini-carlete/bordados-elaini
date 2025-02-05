export default function Atendimentos() { 
    return (
        <div className="flex flex-col items-center align-center justify-center text-center mt-20">
            <h2 className="font-anaheim text-2xl font-bold">Atendimento</h2>

            <div className="mt-5 flex flex-col items-center justify-center">
                <p className="font-comme bg-white p-6 shadow-lg shadow-dark/50 mb-10 text-lg w-10/12 tablet:w-6/12">
                    Entre em contato comigo e faça seu pedido pelo Instagram ou pelo WhatsApp!
                </p>

                <ul className="font-inter flex flex-col gap-12">
                    <li>
                        <a className="bg-medium p-4 rounded-lg" href="https://www.instagram.com/bordados_elaini/" target="_blank">
                            @bordados_elaini
                        </a>
                    </li>
                    <li>
                        <a className="bg-medium p-4 rounded-lg" href="https://wa.me/qr/H6QSKNMQNLDYI1" target="_blank">
                            (028)99943-1731
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
