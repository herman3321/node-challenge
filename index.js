const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request, We start the response with CON
        response = `CON What would you like to check
        1. Gym Sports
        2. Agricultures
        3. Restaurants
        `;
    } else if ( text == '1') {
    
        response = `CON Choose account information you want to view
        1. Waka kimi
        2. Health hub
        3. Kigali fit
        `;
    } else if ( text == '1*1') {
        // This is a terminal request, We start the response with END
        response = `END WAKA KIMI
        1.Waka kimi
        2.Place: KIMUHURURA
        3.Contact: For more information call +250786601749
        `
    } else if ( text == '1*2') {
      response = `END KIGALI FIT
      1.Kigali fit
      2.Place: KIMUHURURA
      3.Contact: For more information call +250788622818
      `
    }
    else if ( text == '1*3') {
      response = `END HEALTH HUB
      1.Health hub
      2.Place: GIKONDO
      3.Contact: For more information call +250788858830
      `
    }
    else if ( text == '2') {
      
      response = `CON Choose account information you want to view
      1. Ubumwe cooperative
      2. Imbaraga cooperation
      `;
  }
  else if ( text == '2*1') {
      
      response = `END UBUMWE COOPERATIVE
      1.UBUMWE COOPERATIVE
      2.Place: KANOMBE
      3.Description: group farmers cultivating coffee and tea
      4.Contact: 0438478374873
      `
  }
  else if ( text == '2*2') {
      
      response = `END IMBARAGA COOPERATION
      1.IMBARAGA COOPERATION
      2.Place: KANOMBE
      3.Description: group farmers cultivating coffee and tea
      4.Contact: 0438478374873
      `
  }
  else if ( text == '3') {
      
      response = `CON Choose account information you want to view
      1.BWOK
      2.KFC
      `;
}
else if ( text == '3*1') {
      
      response = `END BWOK
      1.BWOK
      2.Place: KANOMBE
      3.Description: Korean Restaurant
      4.Contact: 0438478374873
      `
}
else if ( text == '3*2') {
      
      response = `END KFC
      1.KFC
      2.Place: Kimihurura
      3.Description: Korean Restaurant
      4.Contact: 0438478374873
      `
}

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
})
app.listen (5000,()=>{
      console.log("server is running ");
})