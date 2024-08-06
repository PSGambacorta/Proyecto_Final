const casasService = require('../services/casasService');

exports.readCasas = async(req, res)=>{
    try {
        let casas = await casasService.readCasas();
        res.status(200).send(casas)
    } catch (error) {
        res.status(500).send('Hubo un error al intentar recuperar los registros de las casas')
    }
}

exports.readCasaId = async(req, res)=>{
    try {
        let id = req.params.id;
        let casa = await casasService.readCasasId(id);
        res.status(200).send(casa);
    } catch (error) {
        res.status(500).send('Hubo un error en la consulta de la casa solicitada');
        console.log(error);
    }
}

exports.readCasasCiudad = async(req, res)=>{
    try {
        let ciudad = req.params.ciudad;
        let casas = await casasService.readCasasCiudad(ciudad);
        res.status(200).send(casas)
    } catch (error) {
        res.status(500).send('Hubo un error al intentar Filtrar por ciudad')
    }
}

exports.createCasa = async(req, res)=>{
    try {
        let casaCreada = await casasService.createCasa(req.body);
        res.status(200).send(casaCreada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en la creacion del registro de la nueva casa')
    }
}

exports.updateCasa = async (req, res)=>{
    try {
        let casaData = req.body;
        let id = req.params.id;
        let casasEditada = await casasService.updateCasa(id, casaData);
        res.status(200).send(casasEditada);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al editar el registro de la casa.");
    }
}

exports.deleteCasa = async(req, res)=>{
    try {
        let id = req.params.id;
        await casasService.deleteCasa(id);
        res.status(200).send('La casa ha sido eliminada..!');
    } catch (error) {
        res.status(500).send('Hubo un error al tratar de eliminar el registro de la casa.');
    }
}