const Mock = require('mockjs');
const getQuestionList = require('./data/getQuestionList');

const Random = Mock.Random;

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.title(),
        },
      };
    },
  },
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.title(),
        },
      };
    },
  },
  {
    url: '/api/question',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          list: getQuestionList(),
          total: 100,
        },
      };
    },
  },
];
