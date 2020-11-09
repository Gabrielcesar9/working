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
  function first(_callback){
    base('Table 2').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            cpfs.push(record.get('Nome'))
            console.log('Retrieved', record.get('Nome'));
        });
    }); 
  }
  first(function(){
      console.log('cpfs:', cpfs)
  });}
  //setTimeout(function(){console.log('cpfs:', cpfs)}, 3000);}
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
