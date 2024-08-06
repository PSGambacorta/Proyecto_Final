const casas = require('./Casas');
const conectarDB = require('../db/db');
const Casas = require('./Casas');

//Conexion a Base de Datos
conectarDB()


exports.readCasas = async()=>{
    try {
        let casas = await Casas.find();
        return casas
    } catch (error) {
        console.log(error);
    }
}

exports.readCasaId = async(id)=>{
    try {
        if (!id) {
            return "Id incorrecto!!!";
        }
        let casa = await Casas.findById(id);
        if (!casa) {
           return "No se encontró la casas solicitada...!"
        }
        return casa;
    } catch (error) {
        console.log(error);
    }
}

exports.createCasa = async(casaData)=>{
    try {
        let newCasa = new Casas(casaData);
        await newCasa.save();
        return newCasa;
    } catch (error) {
        console.log(error);
    }
}

exports.updateCasa = async(id, casaData)=>{
    try {
        if (!id) {
            return "Id incorrecto!!!";
        }
        let casaB = await Casas.findById({_id:id});
        if (!casaB) {
            return "No se encontró la casas solicitada...!"
        }
        const updateCasa = await Casas.findOneAndReplace({_id:id},casaData);
        return updateCasa;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCasa = async(id)=>{
    try {
        if (!id) {
            return "Id incorrecto!!!";
        }
        const eliminado = await Casas.findOneAndDelete({_id:id});
        if (!eliminado) {
            return "No se encontró la casas solicitada...!"
        }
        return eliminado;
    } catch (error) {
        console.log(error);
    }
}