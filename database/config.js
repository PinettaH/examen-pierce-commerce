import 'dotenv/config';

import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log('Conectado correctamente con la base de datos');

    } catch (error) {

        console.log(error)
        throw new Error('Error en la coneccion de la base de datos');

    }
}