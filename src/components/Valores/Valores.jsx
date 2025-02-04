import { useState } from "react";

const categorias = [
    {
        titulo: "Chaveiros P",
        preco: "10,00",
        imagens: [
            "public/chaveiros/chaveiro-letra-e-rosa.png",
            "public/chaveiros/chaveiro-letra-e-preta.png",
            "public/chaveiros/chaveiro-letra-a-amarela.png"
        ]
    },
    {
        titulo: "Chaveiros M",
        preco: "15,00",
        imagens: [
            "public/chaveiros/chaveiro-borboleta-azul.png",
            "public/chaveiros/chaveiro-letra-b-roxa.png",
            "public/chaveiros/chaveiro-borboleta-laranja.png",
            "public/chaveiros/chaveiro-borboleta-roxa.png",
            "public/chaveiros/chaveiro-letra-g-azul.png",
            "public/chaveiros/chaveiro-borboleta-verde.png",
            "public/chaveiros/chaveiro-letra-a-azul.png",
            "public/chaveiros/chaveiro-calopsita.png",
            "public/chaveiros/chaveiro-naruto.png",
            "public/chaveiros/chaveiro-zoro.png",
            "public/chaveiros/chaveiro-luffy.png",
            "public/chaveiros/chaveiro-darth-vader.png",
            "public/chaveiros/enfeite-papai-noel.png",
            "public/chaveiros/chaveiro-pokebola.png"
        ]
    },
    {
        titulo: "Chaveiros G",
        preco: "20,00",
        imagens: [
            "public/chaveiros/chaveiro-chopper.png",
            "public/chaveiros/chaveiro-godzilla.png",
            "public/chaveiros/chaveiro-noite-estrelada.png",
            "public/chaveiros/chaveiro-anya.png"
        ]
    },
    {
        titulo: "Chaveiros Casal",
        preco: "30,00",
        imagens: ["public/chaveiros/chaveiro-stitch.png"]
    },
    {
        titulo: "Brincos P",
        preco: "5,00",
        imagens: [
            "public/brincos/brinco-abelha.png",
            "public/brincos/brinco-borboleta-verde.png",
            "public/brincos/brinco-cogumelo.png",
            "public/brincos/brinco-borboleta-roxa.png",
            "public/brincos/brinco-pata-de-gato.png",
            "public/brincos/brinco-coracao.png"
        ]
    },
    {
        titulo: "Toalhas de Mão",
        preco: "30,00",
        imagens: [
            "public/toalhas/toalha-elisa.png",
            "public/toalhas/toalha-maria.png",
            "public/toalhas/toalha-henrique.png",
            "public/toalhas/toalha-sophia.png"
        ]
    },
    {
        titulo: "Panos com Crochê",
        preco: "100,00",
        imagens: ["public/toalhas/toalha-florida.png"]
    },
    {
        titulo: "Toalhas de Banho",
        preco: "200,00",
        imagens: ["public/toalhas/toalha-brayan.png"]
    }
];

export default function Valores() {
    return (
        <div>
            <h2 className="text-2xl font-bold flex justify-center align-center mt-20">Valores</h2>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 w-8/12 desktop:w-7/12">
                    {categorias.map((categoria, index) => (
                        <Categoria key={index} titulo={categoria.titulo} preco={categoria.preco} imagens={categoria.imagens} />
                    ))}
                </div>
            </div>
        </div>
    );
}


function Categoria({ titulo, preco, imagens }) {
    const [indice, setIndice] = useState(0);

    // Garantir que imagens seja um array antes de acessar o length
    const imagensLength = Array.isArray(imagens) ? imagens.length : 0;

    const proximaImagem = () => setIndice((indice + 1) % imagensLength);
    const imagemAnterior = () => setIndice((indice - 1 + imagensLength) % imagensLength);

    return (
        <div className="m-4 p-4 border rounded shadow-lg text-center flex flex-col items-center">
            <h3 className="text-xl mb-4 italic">{titulo}</h3>
            <div className="flex items-center justify-center">
                {imagensLength > 1 && (
                    <button onClick={imagemAnterior} className="p-2 w-8 h-8 rotate-180 transition-opacity duration-200 ease-in-out">
                        <img src="../../public/seta.png" alt="Seta" />
                    </button>
                )}
                <img style={{ width: '150px', height: 'auto' }} src={imagens[indice]} alt={titulo} />
                {imagensLength > 1 && (
                    <button onClick={proximaImagem} className="p-2 w-8 h-8 transition-opacity duration-200 ease-in-out">
                        <img src="../../public/seta.png" alt="Seta" />
                    </button>
                )}
            </div>
            <p className="text-lg bg-white bg-opacity-50 rounded-xl p-1 mt-4 w-6/12">R$ {preco}</p>
        </div>
    );
}
