//create a calculator

// INPUT
//the program should prompt for a bill
//the program should prompt for a tip

// PROCESS
//the program must compute the tip

// OUTPUT
//the program must display the tip
//the program must display the total
function calculator(){


  bill = prompt('Please provide the bill amount...');

  tip = parseInt(prompt('Please provide the tip amount...'));

  switch (typeof bill){
    case "string":
      break;
    case "number":
      console.log('a string is required')
      return;
  }

  switch ( tip){
    case "string":
      console.log('tax is a string')

      break;
    case 'number':
      console.log('a string is required');
  }

  if (tip[0] == '0'){
    tip = '.' + tip;
    console.log('Your tip amount equals..', tip * bill );
    console.log('tip:', tip, 'bill', bill);
    console.log('Your total amount equals..', parseInt(bill) + (tip * bill) );
    return;
  }else if (tip[0] != '.'){
    tip = '.0' + tip;
    console.log('Your tip amount equals..', tip * bill );
    console.log('tip:', tip, 'bill', bill);
    console.log('Your total amount equals..', parseInt(bill) + (tip * bill) );
    return;
  } else{
    console.log('Your tip amount equals..', tip * bill );
    console.log('tip:', tip, 'bill', bill);
    console.log('Your total amount equals..', parseInt(bill) + (tip * bill) );
    return;
  }
};
