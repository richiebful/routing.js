"use strict";

const fs = require('fs');
const GTFS = require('./gtfs.js');


var gtfs = new GTFS('./gtfs/db2017', '2017-05-13T00:00:00.000Z');

let start = {lon:11.56, lat:48.14};
let end = {lon:13.37, lat:52.525};
let startTime = Date.now() - (new Date("2017-05-13T00:00:00.000Z"));
startTime = startTime/1000 + 2*3600;
startTime = startTime % (86400*7)
console.log(startTime)
for (var i = 0; i < 100; i++){
    let perfStart = Date.now();
    console.log(gtfs.route(start, end, startTime))
    console.log(Date.now() - perfStart)
}

// fs.writeFileSync('gtfs.json',JSON.stringify(result),'utf8');
// fs.writeFileSync('gtfs_pretty.json',JSON.stringify(result,null,'\t'),'utf8');