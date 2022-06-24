const { Comment } = require('../models');



const commentdata = [
    {
      comment_text: 'MUCH WOW!!!',
      user_id: 2,
      post_id: 1
    },
    {
      comment_text: 'Certified Fresh!',
      user_id: 4,
      post_id: 2
    },
    {
      comment_text: 'By the power of Grey Skull!',
      user_id: 5,
      post_id: 3
    },
    {
      comment_text: 'Arbitrarily Contrary Comment!',
      user_id: 3,
      post_id: 4
    },
    {
      comment_text: 'RABBLE!RABBLE!RABBLE! ',
      user_id: 1,
      post_id: 5
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
