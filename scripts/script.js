$(document).ready(function () {  //iife
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('Looks like you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + marryJohn(userName);
  coolFacts += "<h2> " + chooseAnimal(userName) + "</h2>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>"

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}


function nameLength(name) {
  return "Your name is for sure not " + (name.length + 25) + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is absolutely not " + name[2] + " (unless it is)"
}

function marryJohn(name) {
  
  // let lastIndex = name.length - 1

  return "If you married John Brake, your name would become " + name + " Brake"
}

function reverseName(name) {
  
  let arrName = name.split(); 

  revName = arrName.reverse();
     
}

function chooseAnimal(name) {


  if(name.length < 4)
  {
  
      return "Your animal is Leo The Lion" 
  }
  else if(name.length > 4)
  {
      return "Your animal is Luna The Lion"
  }
  else if(name.length = 4)
  {
      return "Your animal is Luna The Lion"
  }
}
