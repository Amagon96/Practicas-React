import { useState, useEffect } from "react"
import { getRandomFact } from "../facts.js";

export const useCatFact = () => {
    const [fact, setFact] = useState();
    const refreshFact = () => {
        getRandomFact().then(setFact);
    }
    //recuperar la cita al cargar la pagina
    useEffect(refreshFact, []);

    return { fact, refreshFact }
}