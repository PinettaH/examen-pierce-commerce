import { guardarPatron, findStats } from "../repository/adn.repository.js";

export const validatePatronService = async (adn) => {

    const { positivos, negativos } = adn.reduce((acc, cadena) => {
        if (cadena.includes('RH+')) acc.positivos++;
        else if (cadena.includes('RH-')) acc.negativos++;
        return acc
    }, { positivos: 0, negativos: 0 });

    await guardarPatron(positivos, negativos)

    return {
        ok: true,
        mensaje: `Patrones correctos encontrados: ${positivos} ${negativos}`,
        positivos,
        negativos,
    }

}

export const statsPatronService = async () => {

    const stats = await findStats();
    return {
        ok: true,
        cantidad_positivos: stats.cantidadPositivos,
        cantidad_negativos: stats.cantidadNegativos
    }

}