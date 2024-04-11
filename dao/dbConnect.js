// 该文件负责连接数据库
const { Sequelize } = require('sequelize');

// 创建数据库连接
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log('数据库连接成功');
  } catch (error) {
    console.error('数据库连接成功失败', error);
  }
})();

// 向外暴露这个连接实例
module.exports = sequelize;
