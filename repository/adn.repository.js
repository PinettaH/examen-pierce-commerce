import Adn from "../model/adn.js"
import Stats from "../model/Stats.js"

export const guardarPatron = async (positivos, negativos) => {
    await Stats.updateOne({}, {
        $inc: { cantidadPositivos: positivos, cantidadNegativos: negativos }
    }, { upsert: true });

}

export const findStats = async () => {
    const stats = await Stats.findOne({})
    return stats;
}