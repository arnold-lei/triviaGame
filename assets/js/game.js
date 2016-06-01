$('document').ready(function(){
  'use strict';
  var questionCounter = 0;

  //Where the question will be printed and answer options
  var questDiv = $('.question');
  var options = $('.options');
  var alert = $('.alert');
  var msg = $('.msg');
  var nextButton = $('.nextButton');

  // Question array
  var questions = [
    {
      question: 'What is my name?',
      options: ['Jenny', 'Fluff', 'Tokyo', 'Arnold'],
      answer: 3,
    },
    {
      question: 'What is my age?',
      options: ['21', '27', '31', '36'],
      answer: 1,
    },
    {
      question: 'What is my name?',
      options: ['Jenny', 'Fluff', 'Tokyo', 'Arnold'],
      answer: 3,
    },
    {
      question: 'What is my name?',
      options: ['Jenny', 'Fluff', 'Tokyo', 'Arnold'],
      answer: 3,
    },
    {
      question: 'What is my name?',
      options: ['Jenny', 'Fluff', 'Tokyo', 'Arnold'],
      answer: 3,
    }
  ];

  var question = questions[questionCounter].question;

  //Print the quesiton
  function init(){
    questDiv.html(question);
    setOptions(questions);
  }//end of init

  init();
    //Loop question options and prints out the multiple choice answers
  function setOptions(questions){
    for(var i = 0; i < questions[questionCounter].options.length ; i++){
      var newDiv = $('<button class="btn btn-primary guess" value="'+ i +'">'+ questions[questionCounter].options[i] + '</button>');
      options.append(newDiv);
      console.log(questions[questionCounter].options.length)
    };

    $('.guess').on('click', function(){
    if(this.value == questions[questionCounter].answer){
      alert.removeClass('hidden');
      alert.addClass('alert-success');
      msg.html('You have gotten the correct answer!');
      nextButton.addClass('btn-success');
    }else{
      alert.removeClass('hidden');
      alert.addClass('alert-danger');
      msg.html('Sorry have gotten the wrong answer! The correct answer was: ' + questions[questionCounter].options[questions[questionCounter].answer] );
      nextButton.addClass('btn-danger');
      }
    });
  }
  
  //Prints the next question after click
  nextButton.on('click', function(){
    questionCounter++;
    question = questions[questionCounter].question;
    questDiv.html(question);
    // alert.html(' ');
    options.html(' ');
    alert.addClass('hidden');
    console.log(questionCounter);
    init();
  });

});//End of document.ready