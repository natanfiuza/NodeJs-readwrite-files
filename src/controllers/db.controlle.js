const { readFileSync } = require("fs");
const { writeFileSync } = require("fs");
const { existsSync } = require("fs");
const { appendFile } = require("fs");

class DBController {
  static dbfilename = "./src/mock/db.json";

  static read(table) {
    if (!existsSync(DBController.dbfilename)) {
      let obj = {};
      obj[table] = [];
      appendFile(DBController.dbfilename, JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    }
    const dataRead = readFileSync(DBController.dbfilename);

    if (dataRead.length !== 0) {
      const obj = JSON.parse(dataRead);
      if (Object.keys(obj).includes(table)) {
        return obj[table];
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  static writeAdd(table, value) {
    if (!existsSync(DBController.dbfilename)) {
      let obj = {};
      obj[table] = [];
      appendFile(DBController.dbfilename, JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    }
    const dataRead = readFileSync(DBController.dbfilename);

    if (dataRead.length !== 0) {
      const obj = JSON.parse(dataRead);

      obj[table] = [...obj[table], value];

      writeFileSync(DBController.dbfilename, JSON.stringify(obj, null, 2));

      return value;
    } else {
      let obj = {};
      obj[table] = Object.assign(value);
      writeFileSync(DBController.dbfilename, JSON.stringify(obj, null, 2));
      return value;
    }
  }
  static writeAll(table, arr) {
    const dataRead = readFileSync(DBController.dbfilename);

    if (dataRead.length !== 0) {
      const obj = JSON.parse(dataRead);

      obj[table] = arr;

      writeFileSync(DBController.dbfilename, JSON.stringify(obj, null, 2));

      return true;
    } else {
      let obj = {};
      obj[table] = arr;
      writeFileSync(DBController.dbfilename, JSON.stringify(obj, null, 2));
      return true;
    }
  }
}

module.exports = DBController;
