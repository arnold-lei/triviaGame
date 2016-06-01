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
      question: 'A cat has how many whiskers, on average?',
      options: [8, 12, 16, 24],
      answer: 3,
    },
    {
      question: 'Do cats have fewer teeth than dogs have or more?',
      options: ['Fewer', 'More', 'Same'],
      answer: 0,
    },
    {
      question: 'People have about 650 skeletal muscles. How many do cats have?',
      options: [500, 650, 800, 1270],
      answer: 0,
    },
    {
      question: 'Which brain is the cat\’s brain most similar to?',
      options: ['Dog\'s', 'Human\'s'],
      answer: 1,
    },
    {
      question: 'Outdoor-only cats live, on average, about:',
      options: ['3 to 5 years', '7 to 10 years', '12 to 15 years', '17 to 20 years'],
      answer: 0,
    },
     {
      question: 'A term for a group of cats is:',
      options: ['Caggle', 'Convey', 'Clutch', 'Clowder'],
      answer: 3,
    },
     {
      question: 'A term for a group of kittens is:',
      options: ['Kaggle', 'Kindle', 'Nook', 'Kaboodle'],
      answer: 1,
    },
     {
      question: 'True or False: A cat, standing in a still position, can jump up to 6 times its own length.',
      options: ['True', 'False'],
      answer: 0,
    },
     {
      question: 'True or False: \“Tabby\” is the name of a cat breed.',
      options: ['True', 'False'],
      answer: 1,
    },
     {
      question: 'All of the following are the names of cat breeds, except:',
      options: ['Balinese', 'Beauceron', 'Birman', 'Burmilla'],
      answer: 1,
    },
     {
      question: 'The thick hair around the face of some cats (such as Persians) is called:',
      options: ['Mane', 'Ruff', 'Pelt', 'Shock'],
      answer: 1,
    },
     {
      question: 'True or False: Just like female cats, male cats have 5 or 6 pairs of teats.',
      options: ['True', 'False'],
      answer: 0,
    },
     {
      question: 'True or False: Like dogs, cats sniff one another’s butts.',
      options: ['True', 'False'],
      answer: 0,
    },
     {
      question: 'How much of their waking hours do cats spend grooming themselves?',
      options: ['11%', '33%', '66%'],
      answer: 1,
    },
     {
      question: 'What’s it called when a cat rubs the side of its head on you or on furniture?',
      options: ['Beaning', 'Bunting', 'Brocking', 'Tagging'],
      answer: 1,
    },
     {
      question: ' A cat named Towser was an <a target="_blank" href="http://www.petful.com/behaviors/why-cat-bring-dead-animals-mice/">expert mouser.</a> (True story!) How many mice did this famous cat reportedly catch in her lifetime?',
      options: ['899', '8,899', '18,899', '28,899'],
      answer: 3,
    },
     {
      question: 'Cats can’t taste this:',
      options: ['Sour', 'Sweet', 'Bitter', 'Salt'],
      answer: 1,
    },
     {
      question: 'What’s the total number of claws that most house cats have?',
      options: ['16', '18', '20', 'None of the above'],
      answer: 1,
    },
     {
      question: 'Cats stay pregnant for about how long?',
      options: [' 2 months', '4 months', '9 months'],
      answer: 0,
    },
     {
      question: 'Which of the following statements about body language is false?:',
      options: [' A cat’s tail held high means “I’m happy.”', 'A twitching tail means “I’m getting irritated.”', 'A thumping tail means “I’m totally frustrated!”', 'A tail tucked underneath the body means “I’m hungry.”'],
      answer: 3,
    },
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
      alert.removeClass('hidden alert-danger');
      alert.addClass('alert-success');
      msg.html('You have gotten the correct answer!');
      nextButton.addClass('btn-success');
      nextButton.removeClass('btn-danger');
      $('.guess').prop('disabled', true);
    }else{
      alert.removeClass('hidden alert-success');
      alert.addClass('alert-danger');
      msg.html('Sorry have gotten the wrong answer! The correct answer was: ' + questions[questionCounter].options[questions[questionCounter].answer] );
      nextButton.addClass('btn-danger');
      nextButton.removeClass('btn-success');
      $('.guess').prop('disabled', true);
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