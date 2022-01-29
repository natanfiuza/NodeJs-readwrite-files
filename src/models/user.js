const DBController = require("../controllers/db.controlle.js");

class UserModel {
   static _tableName = "users";  
  constructor({ name = "", email = "", phone = ""}) {
    this.id = 0;
    this.name = name;
    this.email = email;
    this.phone = phone;
    
  }

  getMaxId() {
    let maxId = 0;

    DBController.read(UserModel._tableName).forEach((e) => {
      if (e.id > maxId) {
        maxId = e.id;
      }
    });

    return maxId;
  }

  save() {
    this.id = this.getMaxId() + 1;
    this.createdAt = new Date().toUTCString();
    DBController.writeAdd(UserModel._tableName, this);
  }
  
  load(id) {
    let found = DBController.read(UserModel._tableName).filter((e) => {
      if (e.id === id) {
        return e;
      }
    });

    if (found.length <= 0) {
      return false;
    }

    this.id = id;
    this.name = found[0].name;
    this.email = found[0].email;
    this.phone = found[0].phone;
    this.createdAt = found[0].createdAt;
    
    return true;
  }
}

module.exports = UserModel;
