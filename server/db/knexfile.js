const path = require('path')
console.log( path.join(__dirname, '../data/gpa.sqlite3'))
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '../db/data/gpa.sqlite3')
    }
  },
  useNullAsDefault: true,
};
