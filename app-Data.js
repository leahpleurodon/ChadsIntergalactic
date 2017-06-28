const express = require('express');
const app = express();

let dummyData = [
  {
    tracking_number: 1234 ,
    sender_name: "Leah Eramo" ,
    sender_address: "123 fake street",
    sender_planet: "Omicron Percei 8",
    sender_system: "Dog Doo 9",
    destination_name: "Rohan",
    destination_address: "Capital City" ,
    destination_planet: "Altantis" ,
    destination_system: "Unicorn Galaxy",
    number_of_packages: "4",
    spacetruck_id: 4321
  },
  {
    tracking_number: 1234 ,
    sender_name: "Leah Eramo" ,
    sender_address: "123 fake street",
    sender_planet: "Omicron Percei 8",
    sender_system: "Dog Doo 9",
    destination_name: "Rohan",
    destination_address: "Capital City" ,
    destination_planet: "Altantis" ,
    destination_system: "Unicorn Galaxy",
    number_of_packages: "4",
    spacetruck_id: 4321
  }
];



app.get('/shipments', function (req, res) {
  res.send(dummyData)
})

app.get('/', function (req, res) {
  res.send("Welcome to Chads Intergalactic")
})

app.get('/shipments/:shipmentId', function (req, res) {
  res.send(req.params)
})

app.listen(3000, function () {
  console.log('Chads Intergallactic listening on port 3000!')
})
