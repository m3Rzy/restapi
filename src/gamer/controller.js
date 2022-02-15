const pool = require('../../db');
const queries = require('./queries');

const getGamers = (req, res) => {
    pool.query(queries.getGamers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getGamerById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getGamerById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const addGamer = (req, res) => {
    const { name, age, dob } = req.body;

    //проверка на наличие схожего имени
    pool.query(queries.checkNameGamer, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Имя уже зарегистрировано.");
        }

        pool.query(queries.addGamer, [name, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send("Игрок успешно зарегистрирован.");
        });
    });
};

module.exports = {
    getGamers,
    getGamerById,
    addGamer,
}