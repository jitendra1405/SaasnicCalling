"use strict";

const url = require('url');
const pg = require('pg');

const params = url.parse("postgres://leeglxtkajgvtl:76f29beea03eb3bd5b69672f0d292a01ae95d251957282df96e882864c969e50@ec2-23-21-156-171.compute-1.amazonaws.com:5432/daff54nelb3ps6");
const auth = params.auth.split(':');

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1]
};

const pool = new pg.Pool(config);

const DB = {
    query: function(query, callback) {
        pool.connect((err, client, done) => {
            if(err) return callback(err)
            client.query(query, (err, results) => {
                done()
                if(err) { console.error("ERROR: ", err) }
                if(err) { return callback(err) }
                callback(null, results.rows)
            })
        });
    }
}
