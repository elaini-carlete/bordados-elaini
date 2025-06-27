import { useState, useEffect } from "react";

import borboletaAzul from '../../assets/chaveiros/chaveiro-borboleta-azul.png';
import chaveiroTodoroki from '../../assets/chaveiros/chaveiro-todoroki.png';
import chaveiroAparecida from '../../assets/chaveiros/chaveiro-aparecida.png';
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
import toalhaElisa from '../../assets/toalhas/toalha-elisa.png';
import toalhaMaria from '../../assets/toalhas/toalha-maria.png';
import toalhaHenrique from '../../assets/toalhas/toalha-henrique.png';
import toalhaSophia from '../../assets/toalhas/toalha-sophia.png';
import toalhaFlorida from '../../assets/toalhas/toalha-florida.png';

export default function Trabalhos() {
    const chaveiros = {
        borboletaAzul,
        chaveiroTodoroki,
        chaveiroAparecida,
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
        chaveiroLetraAAmarela
    };
    const brincos = [
        brincoAbelha,
        brincoBorboletaVerde,
        brincoCogumelo,
        brincoBorboletaRoxa,
        brincoPataDeGato,
        brincoCoracao
    ];
    const toalhas = [
        toalhaBrayan,
        toalhaElisa,
        toalhaMaria,
        toalhaHenrique,
        toalhaSophia,
        toalhaFlorida
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
        const actualItems = Array.isArray(items) ? items : Object.values(items);
        setIndex((prev) => (prev + itemsPerView < actualItems.length ? prev + 1 : prev));
    };
    
    const handlePrev = (setIndex) => {
        setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

     return (
        <div className="text-center mt-20">
            <h2 className="font-anaheim text-2xl font-bold">Meus Trabalhos</h2>

            {[{ title: "Chaveiros", items: Object.values(chaveiros), index: indexChaveiros, setIndex: setIndexChaveiros }, // Use Object.values for chaveiros
              { title: "Brincos", items: brincos, index: indexBrincos, setIndex: setIndexBrincos },
              { title: "Toalhas", items: toalhas, index: indexToalhas, setIndex: setIndexToalhas }].map(({ title, items, index, setIndex }) => (
                <div key={title} className="mt-6">
                    <h3 className="font-comme text-xl italic pb-4">{title}:</h3>
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => handlePrev(setIndex)}
                            disabled={index === 0}
                            className={`p-2 w-8 h-8 rotate-180 transition-opacity duration-200 ease-in-out
                                ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                        >
                            <img src="/seta.png" alt="Seta" />
                        </button>

                        <ul className="flex gap-x-4">
                            {items.slice(index, index + itemsPerView).map((item, idx) => (
                                <li key={item + idx}>
                                    <img
                                        className="w-56 object-cover shadow-lg shadow-dark/50 rounded-lg"
                                        src={item}
                                        alt={`Item de ${title} ${idx}`}
                                    />
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => handleNext(setIndex, items)}
                            disabled={index + itemsPerView >= items.length}
                            className={`p-2 w-8 h-8 transition-opacity duration-200 ease-in-out
                                ${index + itemsPerView >= items.length ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70 active:scale-90'}`}
                        >
                            <img src="/seta.png" alt="Seta" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}