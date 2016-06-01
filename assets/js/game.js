$('document').ready(function(){
  'use strict';
  var questionCounter = 0;

  //Where the question will be printed and answer options
  var questDiv = $('.question');
  var options = $('.options');
  var alert = $('.alert');
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

  //Loop question options
  function setOptions(questions){
    for(var i = 0; i < questions[questionCounter].options.length ; i++){
      var newDiv = $('<button class="btn btn-primary guess" value="'+ i +'">'+ questions[questionCounter].options[i] + '</button>');
      options.append(newDiv);
    };
    $('.guess').on('click', function(){
      console.log(questions[questionCounter].answer);
      if(this.value == questions[questionCounter].answer){
        alert.removeClass('hidden');
        alert.addClass('alert-success');
        alert.prepend('You have gotten the correct answer!');
        alert.append('<button class="btn nextButton pull-right" role="alert">Next <span aria-hidden="true" click>&gt;</span></button>');
        nextButton.addClass('btn-success');
      }else{
        alert.removeClass('hidden');
        alert.addClass('alert-danger');
        alert.prepend('Sorry have gotten the wrong answer! The correct answer was: ' + questions[questionCounter].options[questions[questionCounter].answer] );
        nextButton.addClass('btn-danger');
      }
    });
  }

  //Print the quesiton
  function init(){
    questDiv.html(question);
    setOptions(questions)

  }//end of init

  nextButton.on('click', function(){
    questionCounter++;
    question = questions[questionCounter].question;
    questDiv.html(question);
    options.html('');
    alert.html(' ');
    alert.addClass('hidden');
    console.log(questionCounter);
    setOptions(questions);
  })


  init();

});//End of document.ready