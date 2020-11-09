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
  base('Table 2').find(item, function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});;}
  
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
