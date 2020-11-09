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

  
  var cpfs = new Array();
  function retrieve(callback){
  base('Table 2').select({
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        cpfs.push("ok");
        cpfs.push(JSON.stringify(record.get('CPF')));
        console.log('Retrieved', record.get('CPF'));
    });
    fetchNextPage();},
    function done(err){
        if(err){console.error(err); return;}
    });callback();}
    function printe(){
        console.log('cpfs', cpfs);
    }
    retrieve(printe);

const items = event.body.split(',');
  /*base('Table 2').create([{
      "fields":{
          "Nome":items[0],
          "CPF":items[1],
          "RG":items[2],
          "Data de nascimento":items[3],
          "Endereco":items[4],
          "Telefone do aluno":items[5],
          "E-mail do aluno":items[6],
          "Serie ou ano em 2021 (na escola)":items[7],
          "Periodo (manha, tarde, noite)":items[8],
          "Nome do pai/mae/tutor responsavel":items[9],
          "CPF2":items[10],
          "RG2":items[11],
          "Data de nascimento2":items[12],
          "Endereco2":items[13],
          "Telefone2":items[14],
          "E-mail2":items[15],
          "Profissao":items[16],
          "Outrotelefonedecontato":items[17]

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
