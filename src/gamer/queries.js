const getGamers = "SELECT * FROM gamers";
const getGamerById = "SELECT * FROM gamers WHERE id = $1";
const checkNameGamer = "SELECT s FROM gamers s WHERE s.name = $1";
const addGamer = "INSERT INTO gamers (name, age, dob) VALUES ($1, $2, $3)";

module.exports = {
    getGamers,
    getGamerById,
    checkNameGamer,
    addGamer,
}