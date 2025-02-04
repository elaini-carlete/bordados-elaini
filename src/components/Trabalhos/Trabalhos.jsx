import { useState, useEffect } from "react";

export default function Trabalhos() {
    const chaveiros = [
        'chaveiro-borboleta-azul', 'chaveiro-letra-b-roxa', 'chaveiro-chopper', 'chaveiro-borboleta-laranja',
        'chaveiro-darth-vader', 'chaveiro-borboleta-roxa', 'chaveiro-letra-g-azul', 'chaveiro-borboleta-verde',
        'chaveiro-letra-a-azul', 'enfeite-papai-noel', 'chaveiro-calopsita', 'chaveiro-godzilla',
        'chaveiro-naruto', 'chaveiro-noite-estrelada', 'chaveiro-pokebola', 'chaveiro-stitch', 'chaveiro-letra-e-rosa',
        'chaveiro-letra-e-preta', 'chaveiro-zoro', 'chaveiro-luffy', 'chaveiro-anya', 'chaveiro-letra-a-amarela'
    ];
    const brincos = [
        'brinco-abelha', 'brinco-borboleta-verde', 'brinco-cogumelo', 'brinco-borboleta-roxa',
        'brinco-pata-de-gato', 'brinco-coracao'
    ];
    const toalhas = [
        'toalha-brayan', 'toalha-elisa', 'toalha-maria', 'toalha-henrique', 'toalha-sophia',
        'toalha-florida'
    ];

    const [indexChaveiros, setIndexChaveiros] = useState(0);
    const [indexBrincos, setIndexBrincos] = useState(0);
    const [indexToalhas, setIndexToalhas] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

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

    const handleNext = (setIndex, items) => {
        setIndex((prev) => (prev + itemsPerView < items.length ? prev + 1 : prev));
    };
    
    const handlePrev = (setIndex) => {
        setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="text-center mt-20">
            <h2 className="text-2xl font-bold">Meus Trabalhos</h2>
            
            {[{ title: "Chaveiros", items: chaveiros, index: indexChaveiros, setIndex: setIndexChaveiros },
              { title: "Brincos", items: brincos, index: indexBrincos, setIndex: setIndexBrincos },
              { title: "Toalhas", items: toalhas, index: indexToalhas, setIndex: setIndexToalhas }].map(({ title, items, index, setIndex }) => (
                <div key={title} className="mt-6">
                    <h3 className="text-xl italic pb-4">{title}:</h3>
                    <div className="flex items-center justify-center gap-4">
                        <button 
                            onClick={() => handlePrev(setIndex)}
                            disabled={index === 0}
                            className={`p-2 w-8 h-8 rotate-180 transition-opacity duration-200 ease-in-out 
                ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                        >
                            <img src="/../../public/seta.png" alt="Seta" />
                        </button>
                        
                        <ul className="flex gap-x-4">
                            {items.slice(index, index + itemsPerView).map(item => (
                                <li key={item}>
                                    <img className="w-56 object-cover shadow-lg shadow-pink-500/50 rounded-lg" src={`/../../public/${title.toLowerCase()}/${item}.png`} alt={item.replace('-', ' ')} />
                                </li>
                            ))}
                        </ul>
                        
                        <button 
                            onClick={() => handleNext(setIndex, items)}
                            disabled={index + itemsPerView >= items.length}
                            className={`p-2 w-8 h-8 transition-opacity duration-200 ease-in-out 
                ${index + itemsPerView >= items.length ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                        >
                            <img src="/../../public/seta.png" alt="Seta" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}