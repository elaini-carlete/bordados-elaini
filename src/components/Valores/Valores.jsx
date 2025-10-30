import { useState, useEffect } from "react";

import chaveiroLetraL from '../../assets/chaveiros/chaveiro-letra-l.jpg';
import chaveiroLetraF from '../../assets/chaveiros/chaveiro-letra-f.jpg';
import chaveiroNomes from '../../assets/chaveiros/chaveiro-nomes.jpg';
import chaveiroShadow from '../../assets/chaveiros/chaveiro-shadow.jpg';
import borboletaAzul from '../../assets/chaveiros/chaveiro-borboleta-azul.png';
import chaveiroTodoroki from '../../assets/chaveiros/chaveiro-todoroki.png';
import chaveiroAaparecida from '../../assets/chaveiros/chaveiro-aparecida.png'; // Corrected typo here
import chaveiroLetraMLaranja from '../../assets/chaveiros/chaveiro-letra-m-laranja.png';
import chaveiroBts from '../../assets/chaveiros/chaveiro-bts.png';
import chaveiroLetraBRoxa from '../../assets/chaveiros/chaveiro-letra-b-roxa.png';
import chaveiroChopper from '../../assets/chaveiros/chaveiro-chopper.png';
import chaveiroBorboletaLaranja from '../../assets/chaveiros/chaveiro-borboleta-laranja.png';
import chaveiroDarthVader from '../../assets/chaveiros/chaveiro-darth-vader.png';
import chaveiroBorboletaRoxa from '../../assets/chaveiros/chaveiro-borboleta-roxa.png';
import chaveiroLetraGAzul from '../../assets/chaveiros/chaveiro-letra-g-azul.png';
import chaveiroBorboletaVerde from '../../assets/chaveiros/chaveiro-borboleta-verde.png';
import chaveiroLetraAAzul from '../../assets/chaveiros/chaveiro-letra-a-azul.png';
import enfeitePapaiNoel from '../../assets/chaveiros/enfeite-papai-noel.png';
import chaveiroCalopsita from '../../assets/chaveiros/chaveiro-calopsita.png';
import chaveiroGodzilla from '../../assets/chaveiros/chaveiro-godzilla.png';
import chaveiroNaruto from '../../assets/chaveiros/chaveiro-naruto.png';
import chaveiroNoiteEstrelada from '../../assets/chaveiros/chaveiro-noite-estrelada.png';
import chaveiroPokebola from '../../assets/chaveiros/chaveiro-pokebola.png';
import chaveiroStitch from '../../assets/chaveiros/chaveiro-stitch.png';
import chaveiroLetraERosa from '../../assets/chaveiros/chaveiro-letra-e-rosa.png';
import chaveiroLetraEPreta from '../../assets/chaveiros/chaveiro-letra-e-preta.png';
import chaveiroZoro from '../../assets/chaveiros/chaveiro-zoro.png';
import chaveiroLuffy from '../../assets/chaveiros/chaveiro-luffy.png';
import chaveiroAnya from '../../assets/chaveiros/chaveiro-anya.png';
import chaveiroLetraAAmarela from '../../assets/chaveiros/chaveiro-letra-a-amarela.png';

import brincoAbelha from '../../assets/brincos/brinco-abelha.png';
import brincoBorboletaVerde from '../../assets/brincos/brinco-borboleta-verde.png';
import brincoCogumelo from '../../assets/brincos/brinco-cogumelo.png';
import brincoBorboletaRoxa from '../../assets/brincos/brinco-borboleta-roxa.png';
import brincoPataDeGato from '../../assets/brincos/brinco-pata-de-gato.png';
import brincoCoracao from '../../assets/brincos/brinco-coracao.png';

import toalhaBrayan from '../../assets/toalhas/toalha-brayan.png';
import toalhaHugo from '../../assets/toalhas/toalha-hugo.jpg';
import toalhaElisa from '../../assets/toalhas/toalha-elisa.png';
import toalhaMaria from '../../assets/toalhas/toalha-maria.png';
import toalhaHenrique from '../../assets/toalhas/toalha-henrique.png';
import toalhaSophia from '../../assets/toalhas/toalha-sophia.png';
import toalhaFlorida from '../../assets/toalhas/toalha-florida.png';

const imageMap = {
    chaveiroLetraL,
    chaveiroLetraF,
    chaveiroNomes,
    chaveiroShadow,
    borboletaAzul,
    chaveiroTodoroki,
    chaveiroAaparecida,
    chaveiroLetraMLaranja,
    chaveiroBts,
    chaveiroLetraBRoxa,
    chaveiroChopper,
    chaveiroBorboletaLaranja,
    chaveiroDarthVader,
    chaveiroBorboletaRoxa,
    chaveiroLetraGAzul,
    chaveiroBorboletaVerde,
    chaveiroLetraAAzul,
    enfeitePapaiNoel,
    chaveiroCalopsita,
    chaveiroGodzilla,
    chaveiroNaruto,
    chaveiroNoiteEstrelada,
    chaveiroPokebola,
    chaveiroStitch,
    chaveiroLetraERosa,
    chaveiroLetraEPreta,
    chaveiroZoro,
    chaveiroLuffy,
    chaveiroAnya,
    chaveiroLetraAAmarela,

    brincoAbelha,
    brincoBorboletaVerde,
    brincoCogumelo,
    brincoBorboletaRoxa,
    brincoPataDeGato,
    brincoCoracao,

    toalhaBrayan,
    toalhaHugo,
    toalhaElisa,
    toalhaMaria,
    toalhaHenrique,
    toalhaSophia,
    toalhaFlorida,
};

const categorias = [
    { titulo: "Chaveiros P", preco: "10,00", imagens: ["chaveiroLetraERosa", "chaveiroLetraEPreta", "chaveiroLetraAAmarela", "chaveiroBts", "chaveiroLetraF", "chaveiroLetraL"] },
    { titulo: "Chaveiros M", preco: "15,00", imagens: ["borboletaAzul", "chaveiroLetraBRoxa", "chaveiroBorboletaLaranja", "chaveiroBorboletaRoxa", "chaveiroLetraMLaranja", "chaveiroLetraGAzul", "chaveiroBorboletaVerde", "chaveiroLetraAAzul", "chaveiroCalopsita", "chaveiroNaruto", "chaveiroZoro", "chaveiroLuffy", "chaveiroDarthVader", "enfeitePapaiNoel", "chaveiroPokebola"] },
    { titulo: "Chaveiros G", preco: "20,00", imagens: ["chaveiroChopper", "chaveiroTodoroki", "chaveiroAaparecida", "chaveiroShadow", "chaveiroNomes", "chaveiroGodzilla", "chaveiroNoiteEstrelada", "chaveiroAnya"] },
    { titulo: "Brincos P", preco: "5,00", imagens: ["brincoAbelha", "brincoBorboletaVerde", "brincoCogumelo", "brincoBorboletaRoxa", "brincoPataDeGato", "brincoCoracao"] },
    { titulo: "Toalhas de Mão", preco: "30,00", imagens: ["toalhaElisa", "toalhaMaria", "toalhaHenrique", "toalhaSophia"] },
    { titulo: "Chaveiros Casal", preco: "30,00", imagens: ["chaveiroStitch"] },
    { titulo: "Panos com Crochê", preco: "75,00", imagens: ["toalhaFlorida"] },
    { titulo: "Toalhas de Banho", preco: "150,00", imagens: ["toalhaBrayan", "toalhaHugo"] },
];

export default function Valores() {
    const [itemsPerView, setItemsPerView] = useState(1);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const handleNext = () => {
        if (index + itemsPerView < categorias.length) {
            setIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    };

    return (
        <div className="text-center mt-20">
            <h2 className="font-anaheim text-2xl font-bold">Valores</h2>

            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    disabled={index === 0}
                    className={`p-2 w-8 h-8 rotate-180 transition-opacity duration-200 ease-in-out ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                >
                    <img src="/seta.png" alt="Seta" />
                </button>

                <div className="flex gap-4">
                    {categorias.slice(index, index + itemsPerView).map((categoria, i) => (
                        <Categoria key={i} {...categoria} />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={index + itemsPerView >= categorias.length}
                    className={`p-2 w-8 h-8 transition-opacity duration-200 ease-in-out ${index + itemsPerView >= categorias.length ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                >
                    <img src="/seta.png" alt="Seta" />
                </button>
            </div>
        </div>
    );
}

function Categoria({ imagens, titulo, preco }) {
    const [indice, setIndice] = useState(0);

    const proximaImagem = () => {
        // Apenas avança se não for a última imagem
        if (indice < imagens.length - 1) {
            setIndice((prev) => prev + 1);
        }
    };

    const imagemAnterior = () => {
        if (indice > 0) {
            setIndice((prev) => prev - 1);
        }
    };

    const isFirstImage = indice === 0;
    const isLastImage = indice === imagens.length - 1;

    return (
        <div className="p-4 text-center flex flex-col items-center shadow-lg shadow-dark/50 rounded-lg w-56">
            <h3 className="text-xl mb-2 italic">{titulo}</h3>
            <div className="flex items-center justify-center">
                {imagens.length > 1 && ( 
                    <button
                        onClick={imagemAnterior}
                        disabled={isFirstImage}
                        className={`p-1 w-6 h-6 rotate-180 transition-opacity duration-200 ease-in-out ${isFirstImage ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                    >
                        <img src="/seta.png" alt="Anterior" />
                    </button>
                )}

                <img src={imageMap[imagens[indice]]} alt={titulo} className="w-36 h-auto object-cover rounded" />

                {imagens.length > 1 && ( 
                    <button
                        onClick={proximaImagem}
                        disabled={isLastImage} 
                        className={`p-1 w-6 h-6 transition-opacity duration-200 ease-in-out ${isLastImage ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                    >
                        <img src="/seta.png" alt="Próxima" />
                    </button>
                )}
            </div>
            <p className="bg-white bg-opacity-50 rounded-xl p-1 mt-2">R$ {preco}</p>
        </div>
    );
}