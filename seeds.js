var db = require('./models');

var foods_list =[
  {name: "Tiramisu", yumminess: "quite"},
  {name: "Green Eggs & Ham", yumminess: "sure"},
  {name: "aardvark", yumminess: "depending"},
  {name: "Foie Gras", yumminess: "omg"},
  {name: "Kale", yumminess: "meh"}
];

db.Food.remove({}, function(err, foods){
	if(err)console.log(err);
	console.log(foods + " deleted successfully!!!");
});


  db.Food.create(foods_list, function(err, foods){
    if (err) { return console.log(err) };
    console.log("created", foods.length, "foods");
    console.log(foods);
    process.exit();
  })
 


