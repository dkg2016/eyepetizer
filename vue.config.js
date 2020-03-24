let axios = require('axios');
let baseUrl = 'http://baobab.kaiyanapp.com/api';
let comonParams = {
  host: 'baobab.kaiyanapp.com'
};
module.exports = {
  devServer: {
    before: function(app) {
      // 推荐
      app.get('/api/recommend', function(req, res) {
        let url = baseUrl + '/v5/index/tab/allRec';
        let params = {
          "page": 0,
          "isOldUser": true,
          "udid": "3c51c24ae6344c318c39d4b9f8c93d9aa78920ce",
          "vc": "591",
          "vn": "6.2.1",
          "size": "1080X1920",
          "deviceModel": "MI 4LTE",
          "first_channel": "eyepetizer_yingyongbao_market",
          "last_channel": "eyepetizer_yingyongbao_market",
          "system_version_code": "23"
        }
        axios.get(url,{params}).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 发现
      app.get('/api/discovery', function(req, res) {
        let url = baseUrl + '/v7/index/tab/discovery';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 日报
      app.get('/api/feed', function(req, res) {
        let url = baseUrl + '/v5/index/tab/feed';
        axios.get(url,comonParams).then(response => {
          res.json(response.data);
        }).catch(err => {
          console.log(err);
        });
      });

      // 社区
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