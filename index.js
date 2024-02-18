var totalCorrectAnswers = [];
var userTotalAnswers = [];

    //genarates 2 random numbers between 2-10
    var firstNum = Math.floor(Math.random() * 9) + 2;
    var secondNum = Math.floor(Math.random() * 9) + 2;
    //calculates the multiplication of the 2 numbers
    var correctAnswer = firstNum * secondNum;
    //adds the answer to the ansers array
    totalCorrectAnswers.push(correctAnswer);

    //displays the 2 numbers in the question
    $(".firstNum").text(firstNum);
    $(".secondNum").text(secondNum);


//whar happens when "check" is clicked
$(".check").click(function(){
    
    //makes the check button disappear
    $(".check").addClass("check-disappear");
    //disables the input field
    $("input").prop('disabled', true);
    
    //holds the users current answer
    var userAnswer = $("input").val();
    //adds the answer tp the users total answers array
    userTotalAnswers.push(userAnswer);
    
    // what happens when the answer is wrong
    if(userAnswer != correctAnswer){
        //changes the colors
        $("body").addClass("wrong");
        $("*").addClass("turnAllBlack");
        $("input").addClass("input-wrong");
       
        //creates a label saying the word "wrong!" and style it
        var displayWordWrong = "<br/><br/> <label>Wrong!</label>"
        $("input").after(displayWordWrong);
        $("label:last").addClass("bruno-ace-regular");
        $("label:last").addClass("displayWordWrong");
        
        //creates a lable displaying the correct answer ans style it
        var DispalyCorrect = " <label>The correct answer is: " + correctAnswer + "</label>";
        $(".check").after(DispalyCorrect);
        $("label:last").addClass("lblDisplayCorrect");
        $("label:last").addClass("bruno-ace-regular");
        
        //creates the button "next" and style it
        $("label:last").after("<br/> <br/> <button>Next ></button>");
        $("button:last").addClass("next-wrong");
        $("button:last").addClass("bruno-ace-regular");
        $("button:last").addClass("next");
    }

    else if(userAnswer == correctAnswer){
        
        //changes the colors to correct colors
        $("body").addClass("correct");
        $("input").addClass("input-correct");
        
        //creates a label saying correct well done and style it
        var displayWordCorrect = "<br/><br/> <label>Correct!</label>"
        $("input").after(displayWordCorrect);
        $("label:last").addClass("bruno-ace-regular");
        $("label:last").addClass("displayWordCorrect");

        //creates the button "next" and style it
        $("label:last").after("<br/> <br/> <button>Next ></button>");
        $("button:first").addClass("bruno-ace-regular");
        $("button:first").addClass("next-correct");
        $("button:first").addClass("next");
    }

    $(".next").click(function(){
        location.reload();
    });
});
