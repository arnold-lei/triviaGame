$('document').ready(function(){


  var questionCounter = 0;

  //Where the question will be printed and answer options
  var questDiv = $('.question');
  var options = $('.options');

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
    var newDiv = $('<button class="btn btn-primary" value="'+i+'">'+ questions[questionCounter].options[i] + '</button>');
    options.append(newDiv);

  }

});