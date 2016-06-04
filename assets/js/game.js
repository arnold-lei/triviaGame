$('document').ready(function(){
  'use strict';
  var questionCounter = 0;
  var correctCount = 0;
  var wrongCount = 0;
  var time = 600;
  var cats;
  var arnold;

  //Where the question will be printed and answer options
  var questDiv = $('.question');
  var options = $('.options');
  var alert = $('.alert');
  var msg = $('.msg');
  var nextButton = $('.nextButton');
  var correct = $('.answeredCorrect');
  var wrong = $('.answeredWrong');
  var timer = $('.timer');

function countDown(){
  var countDown;
    countDown = setInterval(function(){
      if(time > 0){
        time--;
        timer.html(timeConverter(time));
      }else if (time <= 0 ){
        clearInterval(countDown);
        timer.html(timeConverter(time));
      }
    }, 1000);
}

function timeConverter(t){
  var minutes = Math.floor(t/60);
  var seconds = t - (minutes * 60);
  if (seconds < 10){
      seconds = "0" + seconds;
  }
  if (minutes === 0){
      minutes = "00";
  } else if (minutes < 10){
      minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

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
      question: 'Which brain is the cat\'s brain most similar to?',
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
      question: 'True or False: \"Tabby\" is the name of a cat breed.',
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
      question: 'True or False: Like dogs, cats sniff one another\'s butts.',
      options: ['True', 'False'],
      answer: 0,
    },
     {
      question: 'How much of their waking hours do cats spend grooming themselves?',
      options: ['11%', '33%', '66%'],
      answer: 1,
    },
     {
      question: 'What\'s it called when a cat rubs the side of its head on you or on furniture?',
      options: ['Beaning', 'Bunting', 'Brocking', 'Tagging'],
      answer: 1,
    },
     {
      question: ' A cat named Towser was an <a target="_blank" href="http://www.petful.com/behaviors/why-cat-bring-dead-animals-mice/">expert mouser.</a> (True story!) How many mice did this famous cat reportedly catch in her lifetime?',
      options: ['899', '8,899', '18,899', '28,899'],
      answer: 3,
    },
     {
      question: 'Cats can\'t taste this:',
      options: ['Sour', 'Sweet', 'Bitter', 'Salt'],
      answer: 1,
    },
     {
      question: 'What\'s the total number of claws that most house cats have?',
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
      options: [' A cat\'s tail held high means "I\'m happy."', 'A twitching tail means "I\'m getting irritated."', 'A thumping tail means "I\'m totally frustrated!"', 'A tail tucked underneath the body means "I\'m hungry."'],
      answer: 3,
    },
  ];

  var question = questions[questionCounter].question;

  //Intro hides and shows gameboard
  $('.start').on('click', function(){
    countDown();
    $('.intro').addClass('hidden');
    $('.gameBoard').removeClass('hidden');
  });

  //Print the quesiton
  function init(){
    questDiv.html(question);
    setOptions(questions);
    getCats();
    getArnold();
  }//end of init

  init();
    //Loop question options and prints out the multiple choice answers
  function setOptions(questions){
    for(var i = 0; i < questions[questionCounter].options.length ; i++){
      var newDiv = $('<button class="btn btn-primary guess" value="'+ i +'">'+ questions[questionCounter].options[i] + '</button>');
      options.append(newDiv);
    };
    //After the player guesses, alert will show, depending on whether or not the answer is correct it will ether be red or blue
    //the guess value and the answer in the question array must be the same to be correct
  $('.guess').on('click', function(){
    //This evaluates as true if the player guesses correctly
    if(this.value == questions[questionCounter].answer){
      alert.removeClass('hidden alert-danger');
      alert.addClass('alert-success');
      nextButton.html('Next!');
      correctCount++;
      correct.html(correctCount);
      msg.html('You have gotten the correct answer!');
      nextButton.addClass('btn-success');
      nextButton.removeClass('btn-danger');
      nextButton.removeClass('hidden');
      msg.append('<img class="catPic" src="'+cats+'">');
      $('.guess').prop('disabled', true);
    }else{
      alert.removeClass('hidden alert-success');
      alert.addClass('alert-danger');
      nextButton.html('Next!');
      wrongCount++;
      wrong.html(wrongCount);
      msg.html('Sorry you\'ve gotten the wrong answer! The correct answer was: ' + questions[questionCounter].options[questions[questionCounter].answer] );
      nextButton.addClass('btn-danger');
      nextButton.removeClass('btn-success');
      nextButton.removeClass('hidden');
      msg.append('<img class="catPic" src="'+arnold+'">');
      $('.guess').prop('disabled', true);
      }
    });
  }

  //Prints the next question after click
  nextButton.on('click', function(){
    //end the game
    if(questionCounter + 1 == questions.length){
      $('.answeredCorrectly').html('You answered ' + correctCount + ' questions correctly');
      $('.answeredWrongFinal').html('You answered ' + wrongCount  + ' questions wrong');
      $('.timeSpent').html('You spent:' + timeConverter(600 - time)+' minutes on this quiz');
      questionCounter = 0;
      correctCount = 0;
      wrongCount = 0;
      options.empty();
      $('.intro').removeClass('hidden');
      $('.title').html('<i class="fa fa-paw text-center" aria-hidden="true"></i> Welcome to my cat trivia game! Want to Retry?<i class="fa fa-paw text-center" aria-hidden="true"></i>');
      $('.gameBoard').addClass('hidden')
      question = questions[questionCounter].question;
      $('.questionCount').html(questionCounter+1);
      questDiv.html(question);
      alert.addClass('hidden');
      nextButton.addClass('hidden');
      init();
    }else{
      questionCounter++;
      question = questions[questionCounter].question;
      questDiv.html(question);
      $('.questionCount').html(questionCounter+1);
      options.empty();
      alert.addClass('hidden');
      nextButton.addClass('hidden');
      init();
    }
    if(questionCounter + 2 == questions.length){
      nextButton.html('Finish!');
    }
  });

  function getCats(){
    $.ajax({
      url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats',
      method: 'GET',
    }).done(function(catObj){
      cats = catObj.data.image_original_url;
    })
  }
  function getArnold(){
    $.ajax({
      url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=arnold+schwarzenegger',
      method: 'GET',
    }).done(function(obj){
      arnold = obj.data.image_original_url;
    })
  }

});//End of document.ready