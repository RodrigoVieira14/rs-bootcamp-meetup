// configurar o banco de dados
// usar o module exports por o sequelize usar o arquivo
module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'root',
  database: 'meetup',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
