exports.handler = function(event, context, callback) {
console.log("working so far");
const Airtable = require ('airtable');
exports.handler = function(event, context, callback) {
  
  var base = new Airtable({apiKey:'keyFqKmXCtU2IkZGw'}).base(
  'app1ANJMB2FcVdb5o');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyFqKmXCtU2IkZGw'
  });
  /*base('Table 1').select({
      maxRecords: 3,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage){
      records.forEach(function(record){
          console.log('Retrieved', record.get('Name'));
      });
      fetchNextPage();}, function done(err){
          if (err) {console.error(err); return;}
      });*/
  base('Table 1').create([{
      "fields":{
          "Name":"5",
          "login":"Gabriel",
          "senha":"gabriel123",
          "atributo1":"ok"
      }
  }], function(err, records){
      if (err){ console.error(err);
      return;}records.forEach(function(record){
          console.log(record.getId());
      });
  })
  const data = [];
  console.log('it was sent')
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */

  send(data);}}
