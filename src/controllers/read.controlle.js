const { readFileSync } = require("fs")
const { request, response } = require("express")

class ReadController {
    static execute(request, response) {
        // Read file  
        const dataRead = readFileSync("./src/mock/db.json")

        if (dataRead.length !== 0) {
            const obj = JSON.parse(dataRead)             
            // Return file content
            response.status(200).json(obj.itens)
        } else {
            response.status(200).json([])
        }
    }
}

module.exports = ReadController