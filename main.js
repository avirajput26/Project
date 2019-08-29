 const {google} = require('googleapis');
 const keys = require('./json');




 const client = new google.auth.JWT(
     keys.client_email,
     null,
     keys.private_key,
     ['https://www.googleapis.com/auth/spreadsheets']
 );



 client.authorize(function(err,tokens){

    if(err){
        console.log(err);
        return;
    }else {
        console.log('Connected!');
        gsrun(client);
    }
 });


 async function gsrun(cl){
     const gsapi = google.sheets({version:'v4', auth: cl});

     const opt = {
         spreadsheetId: '1t0_LuIGJX0faJQpw1r7I4w9-w30XMQRvPdw-IZGhw2Y',
         range: 'data!A1:P24'
     };

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data);

 }