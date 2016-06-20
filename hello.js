let Prompt = require('simple-prompt');



hello = () => {

  let questions = [
    {
      question: 'What is your name?',
      required: true
    }
  ];


  var Name = new Prompt(questions);

  Name.create().then(function (error, answers){
    if ( error ){ () =>{ return error }  }
    console.log('answers.Whatisyourname?;', answers["Whatisyourname?"]);
    let name = answers["Whatisyourname?"];

    let greeting = 'Hello ';

    return console.log(greeting + name + '!');
  })
}

hello();
