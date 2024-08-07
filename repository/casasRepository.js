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
        let casa = await Casas.findById(id);
        return casa;
    } catch (error) {
        console.log(error);
    }
}

exports.readCasasCiudad = async(ciudad)=>{
    try {
        let casas = await Casas.find({ciudad: ciudad});
        return casas
    } catch (error) {
        console.log(error);
    }
}

exports.readCasasLocacion = async(locacion)=>{
    try {
        let casas = await Casas.find({locacion: locacion});
        return casas
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
        const updateCasa = await Casas.findOneAndUpdate({_id:id},casaData, {new:true});
        return updateCasa;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCasa = async(id)=>{
    try {
        const eliminado = await Casas.findOneAndDelete({_id:id});
        return eliminado;
    } catch (error) {
        console.log(error);
    }
}