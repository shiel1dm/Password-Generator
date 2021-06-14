// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var special = ['!','@','#','$','%','^','\'','\"','&','*','(',')','-','_','=','+','?',',',':',';','/','<','>','`','~','{','}','|']
var char = []
var pass = ''


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password; 

}

function generatePassword(){
  var passL = prompt('Enter desired password length', '8-128 characters')
  if(passL > 7 && passL < 129){
    
    var lcase = confirm('Would you like to include lower case letters?(abc...)');
    if(lcase === true){
      char.push(...lower)
    }
    
    var upcase = confirm('Would you like to include upper case letters?(ABC...)');
    if(upcase === true){
      char.push(...upper)
    }
    
    var specialcase = confirm('Would you like to include special letters?(!@#$%^&*)');
    if(specialcase === true){
      char.push(...special)
    }
    if (!lcase && !upcase && !specialcase){
      alert('No password criteria was selected. Please refresh your browser and try again.')
       
      return
    }

  }
  
  else{
    
    alert('Please click the "Generate Password" again and select an number between 8 and 128 characters.')
    
    return
    
  }
  
  for(var i = 0; i<= passL -1; i++){
    pass += char[Math.floor(Math.random()*char.length)];
    /* So I had to find most of this online, and I wanted to explain that I understood most of what this line is doing, even if I wasn't able to come up with it on my own (bravo to whomever did!)
     So first the part I did do, the for loop is set up to iterate my random generator for as many times as the number stored in the variable passL, minus one, since arrays start counting at zero.
     Then I use a variable to store each random letter picked. Math is a pre built js function used to peform many math operations, the floor call returns the largest whole integer for a number.
     While I am not working with decimals, if someone did not use a whole integer it would really mess up the program and it also prevents .random from using floating numbers as well I believe.
     Next the math.random gives me a random float(or decimal) number between zero and one which I can then multiply by the length of the array so it grabs a random number between zero 
    and whatever the total number of items are in my array. */
    
    

  }
    alert('Your password has been generated. Please refresh your browser if you wish to use this program again.')
    return pass
    
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);