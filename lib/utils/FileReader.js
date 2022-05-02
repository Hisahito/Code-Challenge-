// Importando modulo del filesystem
const fs = require("fs");

// Creando una clase Reader para delegar responsabilidades 

class Reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        const visualPartners = JSON.parse(rawdata);
        return visualPartners;
    }
}

module.exports = Reader;