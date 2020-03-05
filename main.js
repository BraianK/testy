  
function myFunction() {
  var node = document.createElement("option");
  var textnode = document.createTextNode(getCoins());
  node.appendChild(textnode);
  document.getElementById("select").appendChild(node);
} 

//przykladowa obsluga, mozesz tu zrobic appenda
var url = 'https://api.coinpaprika.com/v1/coins/';
let coinList = fetch(url).then((response) => response.json())
.then(function(data) {
  //tu xD
  console.log(data[0].id);
})
.catch(function(error) {
  console.log(error);
});  
