var lookUp = document.querySelector('.butn');
var textBox = document.querySelector('.textBox');

alert($);

lookUp.addEventListener('click', function(e) {
  e.preventDefault();
var userResults = textBox.value;
textBox.value = "";
var ul = document.getElementById('results');
var li = document.createElement('li');
li.textContent = userResults;
ul.appendChild(li);

var url = "https://api.github.com/users/" + textBox.value;

$.get(url).then(function(githubResults) {

  githubResults.innerHTML = textBox.value;
});
})
