let axios = require('axios');
let baseUrl = 'http://baobab.kaiyanapp.com/api';
let comonParams = {
  host: 'baobab.kaiyanapp.com'
};
module.exports = {
  devServer: {
    before: function(app) {
      // 首页 推荐
      app.get('/api/allRec', function(req, res) {
        let url = baseUrl + '/v5/index/tab/allRec';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 首页 发现
      app.get('/api/discovery', function(req, res) {
        let url = baseUrl + '/v7/index/tab/discovery';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 首页 日报
      app.get('/api/feed', function(req, res) {
        let url = baseUrl + '/v5/index/tab/feed';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 首页 社区
      app.get('/api/rec', function(req, res) {
        let url = baseUrl + '/v7/community/tab/rec';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });
    }
  }
};