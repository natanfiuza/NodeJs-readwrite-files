const { writeFileSync, readFileSync } = require("fs");
const { request, response } = require("express");

class WriteController {
  static execute(request, response) {
    const body = request.body;

    const dataRead = readFileSync("./src/mock/db.json");
 
    if (dataRead.length !== 0) {
      const obj = JSON.parse(dataRead);
      const formatDataFinal = { itens: [...obj.itens, body] };
   
      writeFileSync(
        "./src/mock/db.json",
        JSON.stringify(formatDataFinal, null, 2)
      );

      response.status(200).json(body);
    } else {
      const formatData = { itens: [body] };
      writeFileSync("./src/mock/db.json", JSON.stringify(formatData, null, 2));
      response.status(200).json(body);
    }
  }
}

module.exports = WriteController;
