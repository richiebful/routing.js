"use strict";

const fs = require('fs');
const TransitSchedule = require('./transit_schedule.js');


var gtfs = new TransitSchedule('./gtfs/db2017', '2017-05-13T00:00:00.000Z');

let start = {lon:11.56, lat:48.14};
let end = {lon:13.37, lat:52.525};
let startTime = Date.now() - (new Date("2017-05-13T00:00:00.000Z"));
startTime = startTime/1000 + 2*3600;
startTime = startTime % (86400*7)
console.log(startTime)
var myschedule = gtfs.dumpSchedule()
var route1 = gtfs.route(start, end, startTime)
gtfs = new TransitSchedule(myschedule)
var route2 = gtfs.route(start, end, startTime)
console.log(route1)
console.log(route2)
// fs.writeFileSync('gtfs.json',JSON.stringify(result),'utf8');
// fs.writeFileSync('gtfs_pretty.json',JSON.stringify(result,null,'\t'),'utf8');