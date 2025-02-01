import { useState } from "react";

const categorias = [
    {
        titulo: "Chaveiros P",
        preco: "10,00",
        imagens: [
            "src/images/chaveiros/chaveiro-letra-e-rosa.png",
            "src/images/chaveiros/chaveiro-letra-e-preta.png",
            "src/images/chaveiros/chaveiro-letra-a-amarela.png"
        ]
    },
    {
        titulo: "Chaveiros M",
        preco: "15,00",
        imagens: [
            "src/images/chaveiros/chaveiro-borboleta-azul.png",
            "src/images/chaveiros/chaveiro-letra-b-roxa.png",
            "src/images/chaveiros/chaveiro-borboleta-laranja.png",
            "src/images/chaveiros/chaveiro-borboleta-roxa.png",
            "src/images/chaveiros/chaveiro-letra-g-azul.png",
            "src/images/chaveiros/chaveiro-borboleta-verde.png",
            "src/images/chaveiros/chaveiro-letra-a-azul.png",
            "src/images/chaveiros/chaveiro-calopsita.png",
            "src/images/chaveiros/chaveiro-naruto.png",
            "src/images/chaveiros/chaveiro-zoro.png",
            "src/images/chaveiros/chaveiro-luffy.png",
            "src/images/chaveiros/chaveiro-darth-vader.png",
            "src/images/chaveiros/enfeite-papai-noel.png",
            "src/images/chaveiros/chaveiro-pokebola.png"
        ]
    },
    {
        titulo: "Chaveiros G",
        preco: "20,00",
        imagens: [
            "src/images/chaveiros/chaveiro-chopper.png",
            "src/images/chaveiros/chaveiro-godzilla.png",
            "src/images/chaveiros/chaveiro-noite-estrelada.png",
            "src/images/chaveiros/chaveiro-anya.png"
        ]
    },
    {
        titulo: "Chaveiros Casal",
        preco: "30,00",
        imagens: ["src/images/chaveiros/chaveiro-stitch.png"]
    },
    {
        titulo: "Brincos P",
        preco: "5,00",
        imagens: [
            "src/images/brincos/brinco-abelha.png",
            "src/images/brincos/brinco-borboleta-verde.png",
            "src/images/brincos/brinco-cogumelo.png",
            "src/images/brincos/brinco-borboleta-roxa.png",
            "src/images/brincos/brinco-pata-de-gato.png",
            "src/images/brincos/brinco-coracao.png"
        ]
    },
    {
        titulo: "Toalhas de Mão",
        preco: "30,00",
        imagens: [
            "src/images/toalhas/toalha-elisa.png",
            "src/images/toalhas/toalha-maria.png",
            "src/images/toalhas/toalha-henrique.png",
            "src/images/toalhas/toalha-sophia.png"
        ]
    },
    {
        titulo: "Panos com Crochê",
        preco: "100,00",
        imagens: ["src/images/toalhas/toalha-florida.png"]
    },
    {
        titulo: "Toalhas de Banho",
        preco: "200,00",
        imagens: ["src/images/toalhas/toalha-brayan.png"]
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
                        <img src="../../src/images/seta.png" alt="Seta" />
                    </button>
                )}
                <img style={{ width: '150px', height: 'auto' }} src={imagens[indice]} alt={titulo} />
                {imagensLength > 1 && (
                    <button onClick={proximaImagem} className="p-2 w-8 h-8 transition-opacity duration-200 ease-in-out">
                        <img src="../../src/images/seta.png" alt="Seta" />
                    </button>
                )}
            </div>
            <p className="text-lg bg-white bg-opacity-50 rounded-xl p-1 mt-4 w-6/12">R$ {preco}</p>
        </div>
    );
}
