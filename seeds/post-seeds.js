const { Post } = require('../models');

const postdata = [
  {
    title: 'Buzzfeed Oops Page',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'NASA, the disappearance',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  },
  {
    title: 'DEDECMS, download page ',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Google, the errors one gets',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;