(function(){





SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: 'buskers'
}).then(function(tracks) {
  console.log(tracks);
});


var card = document.createElement('div');
card.classList.add("card");

var imageDiv = document.createElement('div');
var img = document.createElement('img');
img.classList.add("image_img");
img.src="http://www.placekitten.com/290/290";
imageDiv.appendChild(img);
card.appendChild(img);

var contentDiv = document.createElement('div');
contentDiv.className="content";

var header = document.createElement('div');
header.className="header";

var hyperLink = document.createElement('a');
hyperLink.href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance";
hyperLink.target="_blank";
hyperLink.innerText="Science Vs. Romance";

header.appendChild(hyperLink);
contentDiv.appendChild(header);
card.appendChild(contentDiv);


var button = document.createElement('div');
button.className = "ui bottom attached button js-button";

var icon = document.createElement("i");
icon.className="add icon";

var span = document.createElement('span');
span.innerText = "Add to playlist";

button.appendChild(icon);
button.appendChild(span);

card.appendChild(button);

var searchResults = document.getElementById("searchResults");
searchResults.appendChild(card);








})();