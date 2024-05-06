const json = '{"name":"Mango","age":3,"isHappy":true}';

// Konwertowanie ciągu JSON na obiekt JavaScript za pomocą JSON.parse()
const obj = JSON.parse(json);

// Wydrukowanie otrzymanego obiektu w konsoli
console.log(obj);

// Weryfikacja, czy właściwości otrzymanego obiektu odpowiadają oryginalnemu ciągowi JSON
console.log(obj.name === "Mango"); 
console.log(obj.age === 3); 
console.log(obj.isHappy === true); 