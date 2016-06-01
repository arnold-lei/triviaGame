$('document').ready(function(){


  var questionCounter = 0;

  //Where the question will be printed and answer options
  var questDiv = $('.question');
  var options = $('.options');
  var alert = $('.alert');
  // Question array
  var questions = [
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

  //Print the quesiton
  questDiv.html(questions[questionCounter].question);

  //Loop question options
  for(var i = 0; i < questions[questionCounter].options.length ; i++){
    var newDiv = $('<button class="btn btn-primary guess" value="'+i+'">'+ questions[questionCounter].options[i] + '</button>');
    options.append(newDiv);
  }
  $('.guess').on('click', function(){
    console.log(questions[questionCounter].answer);
    if(this.value == questions[questionCounter].answer){
      alert.removeClass('hidden');
      alert.addClass('alert-success');
      alert.html('You have gotten the correct answer!');
    }else{
      alert.removeClass('hidden');
      alert.addClass('alert-danger');
      alert.html('Sorry have gotten the wrong answer! The correct answer was: ' + questions[questionCounter].options[questions[questionCounter].answer] );
    }
  });

});