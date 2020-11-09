const Airtable = require ('airtable');
exports.handler = async function(event, context, callback) {
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
  base('Table 2').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 100,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records. 
        records.forEach(function(record) {
          cpfs.push(record.get('CPF'));
            console.log('Retrieved', record.get('CPF'));
        });
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  setTimeout(function(){console.log('cpfs',cpfs);
  if(cpfs.includes(item)){console.log("já existe");alert("Este CPF já está cadastrado")}},
   3000);}
  
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */
