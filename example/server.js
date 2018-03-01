/**
 * Created by lenovo on 2018/2/26.
 */
const express = require('express');

const app = express();

app.use(express.static('../example', {
  'maxAge': 30000
}))

app.listen(9900)