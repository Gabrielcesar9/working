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

const items = event.body.split(',');
base('prematricula').create([{
      "fields":{
          "Nome":items[0],
          "CPF":items[1],
          "RG":'---',//items[2],
          "Data de nascimento":items[2],
          "Endereco":items[3],
          "Telefone do aluno":items[4],
          "E-mail do aluno":items[5],
          "Serie ou ano em 2022 (na escola)":items[6],
          "Periodo (manha, tarde, noite)":items[7],
          "Nome do pai/mae/tutor responsavel":items[8],
          "CPF2":items[9],
          "RG2":'---',//items[11],
          "Data de nascimento2":items[10],
          "Endereco2":items[11],
          "Telefone2":items[12],
          "E-mail2":items[13],
          "Profissao":items[14],
          "Outrotelefonedecontato":items[15]

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
