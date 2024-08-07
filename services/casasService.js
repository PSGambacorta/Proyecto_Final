const casasRepository = require('../repository/casasRepository');

exports.readCasas = async ()=>{
    try {
         return await casasRepository.readCasas();
    } catch (error) {
         console.log(error);
    }
}

exports.readCasasId = async (id)=>{
    try {
        return await casasRepository.readCasaId(id);
    } catch (error) {
        console.log(error);
    }
}

exports.readCasasCiudad = async (ciudad)=>{
    try {
         return await casasRepository.readCasasCiudad(ciudad);
    } catch (error) {
         console.log(error);
    }
}

exports.readCasasLocacion = async (locacion)=>{
    try {
         return await casasRepository.readCasasLocacion(locacion);
    } catch (error) {
         console.log(error);
    }
}

exports.createCasa = async (casaData)=>{
    try {
         return await casasRepository.createCasa(casaData);
    } catch (error) {
         console.log(error);
    }
}

exports.updateCasa = async (id, casaData) =>{
    try {
        return await casasRepository.updateCasa(id,casaData);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCasa = async (id)=>{
    try {
        return await casasRepository.deleteCasa(id);
    } catch (error) {
       console.log(error);
    }
}