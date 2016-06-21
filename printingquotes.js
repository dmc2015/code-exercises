//for browser console

getInfo = () => {
  let quote = prompt("Please enter a quote...");

  let author = prompt("Who said it?...");


  console.log(author + ' says, ', quote);
}



getInfo();


//in one line
console.log( prompt("Who said it?...") + ',says '+ prompt("Please enter a quote...")  );
