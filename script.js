$(document).ready(function(){

    // FUNCTION FOR WHEN GET STARTED BUTTON IS CLICKED IN NAVBAR
    $("#navButton").click(function(){
        $("#logoDiv").show();
        $("#about").hide();
        $("#getStartedDiv").hide();
        $("#socialDiv").hide();
        $("#footerDiv").hide();
        $("#interestsDiv").hide();
        $("#signUpDiv").show();
        $("#weatherDiv").hide();
        $("#restaurantDiv").hide();
        $("#userInput2").hide();

    });
  
    // FUNCTION FOR WHEN GET STARTED BUTTON IS CLICKED ON HOME PAGE 
    $("#getStartedButton").click(function(){
        $("#about").hide();
        $("#getStartedDiv").hide();
        $("#socialDiv").hide();
        $("#footerDiv").hide();
        $("#signUpDiv").show();
    });
    
    // FUNCTION FOR WHEN SUBMIT BUTTON IS CLICKED ON SIGN UP PAGE
    $("#signUpSubmit").click(function(){
        $("#userInput").append("Hello " + $("#enterName").val()+"! Fill out the survey below to view your results");
        $("#logoDiv").hide();
        $("#about").hide();
        $("#getStartedDiv").hide();
        $("#socialDiv").hide();
        $("#footerDiv").hide();
        $("#signUpDiv").hide();
        $("#userName").show();
        $("#interestsDiv").show();
        $("#basicDate").flatpickr({
            enableTime: true,
            dateFormat: "F, d Y H:i",
        });
        
    });
  
    // FUNCTION FOR WHEN SUBMIT BUTTON IS CLICKED ON INTERESTS PAGE
    $("#interestsButton").click(function(){
        $("#userInput2").append($("#enterName").val()+", here are your results!");
        $("#logoDiv").hide();
        $("#about").hide();
        $("#getStartedDiv").hide();
        $("#socialDiv").hide();
        $("#footerDiv").hide();
        $("#signUpDiv").hide();
        $("#userName").show();
        $("#interestsDiv").hide();
        $("#weatherDiv").show();
        $("#restaurantDiv").show();
        $("#userInput").hide();
    });
  
  
  });

  