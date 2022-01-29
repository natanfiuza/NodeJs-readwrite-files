const DBController = require("./db.controlle.js");
const UserModel = require("../models/user");

class UserController {
  static _tableName = "users";

  static create(data) {
    const user = new UserModel(data);
    user.save();
    return user;
  }

  static getAll() {
    return DBController.read(this._tableName);
  }
  static setAll(arr) {
    return DBController.writeAll(this._tableName, arr);
  }

  static getOne(id) {
    const user = new UserModel({});
    if (user.load(id)) {
      return user;
    }
    return {};
  }
}

module.exports = UserController;
