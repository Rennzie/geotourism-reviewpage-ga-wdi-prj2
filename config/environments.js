const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nice-rocks'; //the address to the mongoDataBase
const PORT = process.env.PORT || 8000;
const GE_API = 'AIzaSyAZ_QH7WUOknfpY-UmWGxq19xO7kqysh0o';

module.exports = {
  DB_URI, PORT, GE_API
};
