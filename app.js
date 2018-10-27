const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      dust = require('dustjs-helpers'),
      pg = require('pg'),
      app = express();

//Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);


