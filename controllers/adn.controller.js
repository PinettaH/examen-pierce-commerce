import { statsPatronService, validatePatronService } from "../services/adn.service.js"

export const validatePatron = async (req, res) => {
    const { adn } = req.body

    if (!adn || !Array.isArray(adn)) {
        res.status(400).send('No se encontro el campo adn o adn debe ser un array')
    } else {
        const resultValidateService = await validatePatronService(adn);
        if (!resultValidateService.positivos || !resultValidateService.negativos) {
            res.status(403).send()
        } else {
            res.status(200).json({
                ok: true,
                mensaje: `Se detectaron: ${resultValidateService.positivos} Positivos| ${resultValidateService.negativos} Negativos`
            })
        }
    }
}


export const statsPatron = async (req, res) => {
    try {
        const resultStatsService = await statsPatronService();
        if (resultStatsService) {
            res.status(200).json({
                ok: resultStatsService.ok,
                contador_positivos: resultStatsService.cantidad_positivos,
                cantidad_negativos: resultStatsService.cantidad_negativos
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
}