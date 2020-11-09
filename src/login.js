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
  let table = base.getTable('Table 2');
  let queryResult = table.selectRecordsAsync();
  setTimeout(function(){ let record = queryResult.records[0];
    console.log(record.id); }, 3000);}
  
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
