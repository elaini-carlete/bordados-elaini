export default function Perfil() {
    return (
        <div className="flex justify-center items-center text-center mt-16">
            <div className="w-10/12 p-6 rounded-2xl shadow-lg desktop:w-6/12">
                <h1 className="font-anaheim text-xl font-bold mb-4 italic">Elaini Arte em Fios</h1>

                <div className="flex justify-center items-center">
                    <div className="relative w-[180px] h-[180px] rounded-full p-1 bg-gradient-to-r from-light via-medium to-dark tablet:w-[300px] tablet:h-[300px]">
                        <img 
                            src="/public/perfil/foto-perfil.png" 
                            alt="Foto de Perfil"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                <p className="font-comme bg-white rounded-xl p-4 mt-4 text-sm">
                    Meu nome é Elaini e aprendi a arte do bordado na adolescência, influenciada por minha família. Desde então, continuei aprendendo novas técnicas e me aperfeiçoando. Hoje, além de bordar toalhas, também faço chaveiros e brincos personalizados em ponto cruz! Por fim, fico feliz em compartilhar a grande paixão que tenho pela Arte em Fios.
                </p>
            </div>
        </div>
    );
}