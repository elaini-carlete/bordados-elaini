// import { useState, useEffect } from "react";

// const categorias = [
//     { titulo: "Chaveiros P", preco: "9,99", imagens: ["src/assets/chaveiros/chaveiro-letra-e-rosa.png", "src/assets/chaveiros/chaveiro-letra-e-preta.png", "src/assets/chaveiros/chaveiro-letra-a-amarela.png"] },
//     { titulo: "Chaveiros M", preco: "14,99", imagens: ["src/assets/chaveiros/chaveiro-borboleta-azul.png", "src/assets/chaveiros/chaveiro-letra-b-roxa.png", "src/assets/chaveiros/chaveiro-borboleta-laranja.png", "src/assets/chaveiros/chaveiro-borboleta-roxa.png", "src/assets/chaveiros/chaveiro-letra-g-azul.png", "src/assets/chaveiros/chaveiro-borboleta-verde.png", "src/assets/chaveiros/chaveiro-letra-a-azul.png", "src/assets/chaveiros/chaveiro-calopsita.png", "src/assets/chaveiros/chaveiro-naruto.png", "src/assets/chaveiros/chaveiro-zoro.png", "src/assets/chaveiros/chaveiro-luffy.png", "src/assets/chaveiros/chaveiro-darth-vader.png", "src/assets/chaveiros/enfeite-papai-noel.png", "src/assets/chaveiros/chaveiro-pokebola.png"] },
//     { titulo: "Chaveiros G", preco: "19,99", imagens: ["src/assets/chaveiros/chaveiro-chopper.png", "src/assets/chaveiros/chaveiro-godzilla.png", "src/assets/chaveiros/chaveiro-noite-estrelada.png", "src/assets/chaveiros/chaveiro-anya.png"] },
//     { titulo: "Brincos P", preco: "4,99", imagens: ["src/assets/brincos/brinco-abelha.png", "src/assets/brincos/brinco-borboleta-verde.png", "src/assets/brincos/brinco-cogumelo.png", "src/assets/brincos/brinco-borboleta-roxa.png", "src/assets/brincos/brinco-pata-de-gato.png", "src/assets/brincos/brinco-coracao.png"] },
//     { titulo: "Toalhas de Mão", preco: "32,99", imagens: ["src/assets/toalhas/toalha-elisa.png", "src/assets/toalhas/toalha-maria.png", "src/assets/toalhas/toalha-henrique.png", "src/assets/toalhas/toalha-sophia.png"] },
//     { titulo: "Chaveiros Casal", preco: "29,99", imagens: ["src/assets/chaveiros/chaveiro-stitch.png"] },
//     { titulo: "Panos com Crochê", preco: "79,99", imagens: ["src/assets/toalhas/toalha-florida.png"] },
//     { titulo: "Toalhas de Banho", preco: "159,99", imagens: ["src/assets/toalhas/toalha-brayan.png"] },
// ];
// export default function Valores() {
//     const [itemsPerView, setItemsPerView] = useState(1);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const updateItemsPerView = () => {
//             if (window.innerWidth >= 1024) {
//                 setItemsPerView(3);
//             } else if (window.innerWidth >= 768) {
//                 setItemsPerView(2);
//             } else {
//                 setItemsPerView(1);
//             }
//         };

//         updateItemsPerView();
//         window.addEventListener("resize", updateItemsPerView);
//         return () => window.removeEventListener("resize", updateItemsPerView);
//     }, []);

//     const handleNext = () => {
//         if (index + itemsPerView < categorias.length) {
//             setIndex(prev => prev + 1);
//         }
//     };

//     const handlePrev = () => {
//         if (index > 0) {
//             setIndex(prev => prev - 1);
//         }
//     };

//     return (
//         <div className="text-center mt-20">
//             <h2 className="font-anaheim text-2xl font-bold">Valores</h2>

//             <div className="flex items-center justify-center gap-4 mt-6">
//                 <button
//                     onClick={handlePrev}
//                     disabled={index === 0}
//                     className={`p-2 w-8 h-8 rotate-180 transition-opacity duration-200 ease-in-out ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
//                 >
//                     <img src="/seta.png" alt="Seta" />
//                 </button>

//                 <div className="flex gap-4">
//                     {categorias.slice(index, index + itemsPerView).map((categoria, i) => (
//                         <Categoria key={i} {...categoria} />
//                     ))}
//                 </div>

//                 <button
//                     onClick={handleNext}
//                     disabled={index + itemsPerView >= categorias.length}
//                     className={`p-2 w-8 h-8 transition-opacity duration-200 ease-in-out ${index + itemsPerView >= categorias.length ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
//                 >
//                     <img src="/seta.png" alt="Seta" />
//                 </button>
//             </div>
//         </div>
//     );
// }

// function Categoria({ imagens, titulo, preco }) {
//     const [indice, setIndice] = useState(0);

//     const proximaImagem = () => setIndice((prev) => (prev + 1) % imagens.length);
//     const imagemAnterior = () => setIndice((prev) => (prev - 1 + imagens.length) % imagens.length);

//     return (
//         <div className="p-4 text-center flex flex-col items-center shadow-lg shadow-dark/50 rounded-lg w-56">
//             <h3 className="text-xl mb-2 italic">{titulo}</h3>
//             <div className="flex items-center justify-center">
//                 {imagens.length > 1 && (
//                     <button onClick={imagemAnterior} className="p-1 w-6 h-6 rotate-180">
//                         <img src="/seta.png" alt="Anterior" />
//                     </button>
//                 )}

//                 <img src={imagens[indice]} alt={titulo} className="w-36 h-auto object-cover rounded" />

//                 {imagens.length > 1 && (
//                     <button onClick={proximaImagem} className="p-1 w-6 h-6">
//                         <img src="/seta.png" alt="Próxima" />
//                     </button>
//                 )}
//             </div>
//             <p className="bg-white bg-opacity-50 rounded-xl p-1 mt-2">R$ {preco}</p>
//         </div>
//     );
// }

import { useState, useEffect } from "react";

const categorias = [
    { titulo: "Chaveiros P", preco: "9,99", imagens: ["src/assets/chaveiros/chaveiro-letra-e-rosa.png", "src/assets/chaveiros/chaveiro-letra-e-preta.png", "src/assets/chaveiros/chaveiro-letra-a-amarela.png", "src/assets/chaveiros/chaveiro-bts.png"] },
    { titulo: "Chaveiros M", preco: "14,99", imagens: ["src/assets/chaveiros/chaveiro-borboleta-azul.png", "src/assets/chaveiros/chaveiro-letra-b-roxa.png", "src/assets/chaveiros/chaveiro-borboleta-laranja.png", "src/assets/chaveiros/chaveiro-borboleta-roxa.png", "src/assets/chaveiros/chaveiro-letra-m-laranja.png","src/assets/chaveiros/chaveiro-letra-g-azul.png", "src/assets/chaveiros/chaveiro-borboleta-verde.png", "src/assets/chaveiros/chaveiro-letra-a-azul.png", "src/assets/chaveiros/chaveiro-calopsita.png", "src/assets/chaveiros/chaveiro-naruto.png", "src/assets/chaveiros/chaveiro-zoro.png", "src/assets/chaveiros/chaveiro-luffy.png", "src/assets/chaveiros/chaveiro-darth-vader.png", "src/assets/chaveiros/enfeite-papai-noel.png", "src/assets/chaveiros/chaveiro-pokebola.png"] },
    { titulo: "Chaveiros G", preco: "19,99", imagens: ["src/assets/chaveiros/chaveiro-chopper.png", "src/assets/chaveiros/chaveiro-todoroki.png", "src/assets/chaveiros/chaveiro-aparecida.png","src/assets/chaveiros/chaveiro-godzilla.png", "src/assets/chaveiros/chaveiro-noite-estrelada.png", "src/assets/chaveiros/chaveiro-anya.png"] },
    { titulo: "Brincos P", preco: "4,99", imagens: ["src/assets/brincos/brinco-abelha.png", "src/assets/brincos/brinco-borboleta-verde.png", "src/assets/brincos/brinco-cogumelo.png", "src/assets/brincos/brinco-borboleta-roxa.png", "src/assets/brincos/brinco-pata-de-gato.png", "src/assets/brincos/brinco-coracao.png"] },
    { titulo: "Toalhas de Mão", preco: "32,99", imagens: ["src/assets/toalhas/toalha-elisa.png", "src/assets/toalhas/toalha-maria.png", "src/assets/toalhas/toalha-henrique.png", "src/assets/toalhas/toalha-sophia.png"] },
    { titulo: "Chaveiros Casal", preco: "29,99", imagens: ["src/assets/chaveiros/chaveiro-stitch.png"] },
    { titulo: "Panos com Crochê", preco: "79,99", imagens: ["src/assets/toalhas/toalha-florida.png"] },
    { titulo: "Toalhas de Banho", preco: "159,99", imagens: ["src/assets/toalhas/toalha-brayan.png"] },
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
        // Apenas retrocede se não for a primeira imagem
        if (indice > 0) {
            setIndice((prev) => prev - 1);
        }
    };

    // Variáveis para controlar o estado de disabled dos botões de imagem
    const isFirstImage = indice === 0;
    const isLastImage = indice === imagens.length - 1;

    return (
        <div className="p-4 text-center flex flex-col items-center shadow-lg shadow-dark/50 rounded-lg w-56">
            <h3 className="text-xl mb-2 italic">{titulo}</h3>
            <div className="flex items-center justify-center">
                {imagens.length > 1 && ( // Só mostra as setas se houver mais de uma imagem
                    <button
                        onClick={imagemAnterior}
                        disabled={isFirstImage} // Desativa se for a primeira imagem
                        className={`p-1 w-6 h-6 rotate-180 transition-opacity duration-200 ease-in-out ${isFirstImage ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                    >
                        <img src="/seta.png" alt="Anterior" />
                    </button>
                )}

                <img src={imagens[indice]} alt={titulo} className="w-36 h-auto object-cover rounded" />

                {imagens.length > 1 && ( // Só mostra as setas se houver mais de uma imagem
                    <button
                        onClick={proximaImagem}
                        disabled={isLastImage} // Desativa se for a última imagem
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