$(document).ready(function() {
  //changed
  var num, input = "";

  $( ".clear" ).click(function() {
    console.log("working");
    input = "";
    $("div.input-box-container").html("<input class='input-box'type='text' value= '" + input + "' >");
  });
  $( ".number0" ).click(function() {
    console.log("working");
    //changed
    num = "0";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });

  $( ".number1" ).click(function() {
    console.log("working");
    //changed
    num = "1";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number2" ).click(function() {
    console.log("working");
    //changed
    num = "2";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number3" ).click(function() {
    console.log("working");
    //changed
    num = "3";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number4" ).click(function() {
    console.log("working");
    //changed
    num = "4";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number5" ).click(function() {
    console.log("working");
    //changed
    num = "5";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number6" ).click(function() {
    console.log("working");
    //changed
    num = "6";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number7" ).click(function() {
    console.log("working");
    //changed
    num = "7";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number8" ).click(function() {
    console.log("working");
    //changed
    num = "8";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
  $( ".number9" ).click(function() {
    console.log("working");
    //changed
    num = "9";
    input +=  num;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });
//changed
  $( ".plus" ).click(function() {
    console.log("working");

    input += " + ";

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });

  $( ".minus" ).click(function() {
    console.log("working");

    input += " - ";

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });

  $( ".multiply" ).click(function() {
    console.log("working");

    input += " * ";

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });

  $( ".divide" ).click(function() {
    console.log("working");

    input += " / ";

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
  });

  $( ".return" ).click(function() {
  var newNum = 0;
    var arr = input.split(" ");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]==="+"){
        newNum = parseInt(arr[i-1])+ parseInt(arr[i+1]);
      }
      else if(arr[i]==="-"){
      newNum = parseInt(arr[i-1])- parseInt(arr[i+1]);
    }
    else if(arr[i]==="*"){
    newNum = parseInt(arr[i-1])* parseInt(arr[i+1]);
  }
  else if(arr[i]==="/"){
  newNum = parseInt(arr[i-1])/ parseInt(arr[i+1]);
}
  }

  console.log(newNum);

input =newNum;

    $("div.input-box-container").html("<input class='input-box'type='text' value='" + newNum + "'>");
  });


});


// <input class='input-box'type='text' value=''>






//
// $( ".return" ).click(function() {
//   console.log("working");
//   var output = input.split(' ');
//   var result = 0;
//   console.log(output);
//   for (var i = 0; i < output.length; i++) {
//     if (output[i] === "+") {
//       result = parseInt(output[i - 1]) + parseInt(output[i + 1]);
//     }
//     else if (output[i] === "-") {
//       result = parseInt(output[i - 1]) - parseInt(output[i + 1]);
//     }
//   }
//   input += " = " + result;
//   $("div.input-box-container").html("<input class='input-box'type='text' value='" + input + "'>");
// });
