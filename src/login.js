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
  
  console.log('cpfs:', function(callback){var cpfs = new Array();
    base('Table 2').select({
        view: 'Grid view'
    }).eachPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            cpfs.push(record.get('Nome'));
        });
    });console.log('inner', cpfs);
    return cpfs;});
  ;}
  //setTimeout(function(){console.log('cpfs:', cpfs)}, 3000);}
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
