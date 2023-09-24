require('dotenv').config();
const sequelize = require('./db');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
// Для того, чтобы можно было открыть файл из папки static в браузере (как картинку например)
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
// Обработка ошибок, должен обязательно подключаться последним!
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (error) {
    console.error('Error: ', error.message)
  }
}

start();