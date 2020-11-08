const Airtable = require ('airtable');
exports.handler = function(event, context, callback) {
    console.log(event.body);
    const {API_URL, API_CLIENT_ID, API_KEY } = process.env;
  var base = new Airtable({apiKey:API_KEY}).base(
  API_CLIENT_ID);
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
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
          "login":event.body[0],
          "senha":event.body[1],
          "atributo1":"ok"
      }
  }], function(err, records){
      if (err){ console.error(err);
      return;}records.forEach(function(record){
          console.log(record.getId());
      });
  })
  console.log('it was sent')
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */}
