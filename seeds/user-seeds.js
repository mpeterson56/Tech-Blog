const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'AyoMcMayo',
    email: 'condiments0@yahoo.com',
    password: 'password123'
  },
  {
    username: 'willyWonka12',
    email: 'candybars@yahoo.com',
    password: 'password123'
  },
  {
    username: 'PepsiMD2020',
    email: 'mmmmmmpepsi@yahoo.com',
    password: 'password123'
  },
  {
    username: 'djKhalid24',
    email: 'anotherOne@yahoo.com',
    password: 'password123'
  },
  {
    username: 'Coffee13579',
    email: 'smellsLikeMornings@yahoo.com',
    password: 'password123'
  },
  {
    username: 'TheSecret1',
    email: 'whoGoesThere1@yahoo.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;