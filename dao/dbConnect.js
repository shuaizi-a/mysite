// 该文件负责连接数据库
const { Sequelize } = require('sequelize');

// 创建数据库连接
const sequelize = new Sequelize('数据库名称', '用户名', '密码', {
  host: 'localhost',
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
