const express = require('express');
const mongoose = require('mangoose');

var app = express()

app.get('/*', function (req, res) {
  res.sendStatus("404");
})

app.listen(3000, function () {
  console.log('Application qui écoute sur le port 3000!');
})