$("#questionSet").hide();

question1 = {
    question: "What is the smallest dog breed?",
    answers: ["Shih Tzu", "Pomeranian", "Dachschund", "Chihuahua"],
    correctAnswer: [3],
}

question2 = {
    question: "What dog breed is hypoallergenic?",
    answers: ["Portuguese Water dog", "Border Collie", "Hairless Australian Shepherd", "Golden Retriever"],
    correctAnswer: [0]
}

question3 = {
    question: "True or False: Dogs are color blind. ",
    answers: ["True", "False"],
    correctAnswer: [1],
}

question4 = {
    question: "How much stronger than a human's is a dog's sense of smell?",
    answers: ["5x", "10x", "1000x", "10000x"],
    correctanswer: [3],
}

question5 = {
    question: "Which of the following is true?",
    answers: ["Petting a dog can lower your blood pressure and heart rate.", "Service dogs can help treat humans with PTSD, autism, blindness, mobility impairment, epilepsy, and diabtes", "Dogs can learn to detect cancer and changes in blood sugar in humans.", "All of them are true!"],
    correctAnswer: [3],
}

question6 = {
    question: "Which of these dog breeds has a water-resistant coat?",
    answers: ["Siberian Husky", "Newfoundland", "Maltese", "Poodle"],
    correctAnswer: [1],
}

question7 = {
    question: "True or false: dogs can dream.",
    answers: ["True", "False"],
    correctanswer: [0]

}

question8 = {
    question: "True or false: dogs don't sweat.",
    answers: ["True", "False"],
    correctanswer: [1],
}

question9 = {
    question: "What percent of dogs sleep in their owner's bed?",
    answers: ["10%", "25%", "45%", "65%"],
    correctanswer: [2],
}

question10 = {
    question: "Which dog breed has a black tongue?",
    answers: ["Golden Retriever", "Labradoodle", "Border Collie", "Chow Chow"],
    correctanswer: [3],

}

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

var questionsArray = [question1.question, question2.question, question3.question, question4.question, question5.question, question6.question, question7.question, question8.question, question9.question, question10.question]

var answersArray = [question1.answers, question2.answers, question3.answers, question4.answers, question5.answers, question6.answers, question7.answers, question8.answers, question9.answers, question10.answers]

var correct = 0;
var incorrect =0;

// My for-loop was being stubborn so I had to do everything manually...//

// Writing the questions to the HTML //

$("#question1").html(question1.question)
$("#question1").html(question1.question)
$("#question2").html(question2.question)
$("#question3").html(question3.question)
$("#question4").html(question4.question)
$("#question5").html(question5.question)
$("#question6").html(question6.question)
$("#question7").html(question7.question)
$("#question8").html(question8.question)
$("#question9").html(question9.question)
$("#question10").html(question10.question)

// Writing the answers to the HTML pre-assigned buttons //

$("#1answer1").html(question1.answers[0])
$("#1answer2").html(question1.answers[1])
$("#1answer3").html(question1.answers[2])
$("#1answer4").html(question1.answers[3])

$("#2answer1").html(question2.answers[0])
$("#2answer2").html(question2.answers[1])
$("#2answer3").html(question2.answers[2])
$("#2answer4").html(question2.answers[3])

$("#3answer1").html(question3.answers[0])
$("#3answer2").html(question3.answers[1])

$("#4answer1").html(question4.answers[0])
$("#4answer2").html(question4.answers[1])
$("#4answer3").html(question4.answers[2])
$("#4answer4").html(question4.answers[3])

$("#5answer1").html(question5.answers[0])
$("#5answer2").html(question5.answers[1])
$("#5answer3").html(question5.answers[2])
$("#5answer4").html(question5.answers[3])

$("#6answer1").html(question6.answers[0])
$("#6answer2").html(question6.answers[1])
$("#6answer3").html(question6.answers[2])
$("#6answer4").html(question6.answers[3])

$("#7answer1").html(question7.answers[0])
$("#7answer2").html(question7.answers[1])

$("#8answer1").html(question8.answers[0])
$("#8answer2").html(question8.answers[1])

$("#9answer1").html(question9.answers[0])
$("#9answer2").html(question9.answers[1])
$("#9answer3").html(question9.answers[2])
$("#9answer4").html(question9.answers[3])

$("#10answer1").html(question10.answers[0])
$("#10answer2").html(question10.answers[1])
$("#10answer3").html(question10.answers[2])
$("#10answer4").html(question10.answers[3])

// Registering when the user clicks, and updating the correct/incorrect variables to determine the user's score at the end // 

$("#1answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#1answer2").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });   

  $("#1answer3").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#1answer4").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });



  $("#2answer1").on("click", function() {
    correct++
    console.log(incorrect)
    $(this).css('background-color', 'green');
  });

  $("#2answer2").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });   

  $("#2answer3").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#2answer4").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'red');
  });



  $("#3answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#3answer2").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });   



  $("#4answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#4answer2").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });   

  $("#4answer3").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#4answer4").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });



  $("#5answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#5answer2").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });   

  $("#5answer3").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#5answer4").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });



  $("#6answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#6answer2").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });   

  $("#6answer3").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#6answer4").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });


  $("#7answer1").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });

  $("#7answer2").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });   

  

  $("#8answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#8answer2").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });   


  $("#9answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#9answer2").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });   

  $("#9answer3").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });

  $("#9answer4").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });


  $("#10answer1").on("click", function() {
    incorrect++
    console.log(incorrect)
    $(this).css('background-color', 'red');
  });

  $("#10answer2").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });   

  $("#10answer3").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });

  $("#10answer4").on("click", function() {
    correct++
    console.log(correct)
    $(this).css('background-color', 'green');
  });


  $("#start").on("click", function() {
  $("#questionSet").show();
  setTimeout(60,000)
  $("#timer")
  });
  












