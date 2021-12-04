fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });





  fetch(
    // Explain each parameter in comments below.
    // the api.github is the source.
    // the strings are repos/nodejs/mode/issues
    // per_page-10 is their parameter
  
    'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  // Parameter explanation.
  