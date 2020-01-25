import express from 'express';

// var express = require('express')
var router = express.Router()

const Router = (app :any, nextApp:any) => {
  const handle = nextApp.getRequestHandler();

  router.get("*", (req, res) => {
    return handle(req, res);
  });
};

module.exports = Router;
