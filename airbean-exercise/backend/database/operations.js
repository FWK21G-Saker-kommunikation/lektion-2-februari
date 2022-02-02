const nedb = require('nedb-promise');
const database = new nedb({ filename: 'accounts.db', autoload: true });

const menu = {
    "type": "coffee-menu",
    "menu":[
      {
        "id":1,
        "title":"Bryggkaffe",
        "desc":"Bryggd på månadens bönor.",
        "price":39
      },
      {
        "id":2,
        "title":"Caffè Doppio",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":3,
        "title":"Cappuccino",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":4,
        "title":"Latte Macchiato",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":5,
        "title":"Kaffe Latte",
        "desc":"Bryggd på månadens bönor.",
        "price":54
      },
      {
        "id":6,
        "title":"Cortado",
        "desc":"Bryggd på månadens bönor.",
        "price":39
      }
    ]
  }

async function getAccountByUsername(username) {
    const account = await database.find({ username: username });
    return account;
}

function saveAccount(account) {
    database.insert(account);
}

function saveMenu() {
    database.insert(menu);
}

async function getMenu() {
    const menu = await database.find({ type: 'coffee-menu' });
    return menu;
}

module.exports = { getAccountByUsername, saveAccount, saveMenu, getMenu }