prompt = require("prompt-promise");
res = [];

getName = () => {
  prompt('username: ')
  .then( (val) => {
    return res.push(val);
  }).then( () => {
    if (res[0] == [ '' ]) {
      console.log('here',  res[0] == [ '' ]);
      prompt.finish();
      return getName();
    }
  })
  .then(() => {
    prompt.finish();
    return console.log(res[0].length);
  })
  .catch( (err) => {
    prompt.finish();
    return console.log('error', err);
  });

}
console.log('out of promise',res)

getName();
