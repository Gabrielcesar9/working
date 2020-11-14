const Airtable = require ('airtable');
exports.handler = function(event, context, callback) {
    console.log(typeof(event.body));
    const {API_URL, API_CLIENT_ID, API_KEY } = process.env;
  var base = new Airtable({apiKey:API_KEY}).base(
  API_CLIENT_ID);
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });

  item = event.body;
  console.log('item', item);
  var cpfs = new Array();
  base('prematricula').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        cpfs.push(record.get('CPF'));
        console.log('Retrieved', record.get('CPF'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
var plong = new String;
setTimeout(function (){console.log('cpfs:', cpfs);
if(cpfs.includes(item)){plong = "0";}
else{plong="1";}},
 3000);
setTimeout(function(){
console.log('plong', plong);
  callback(null, {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'Cache-Control: max-age=300, public'
    },
    statusCode: 200,
    body: plong,
  })
},3500);
}
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
