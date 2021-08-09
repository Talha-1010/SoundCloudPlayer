(function(){



var searchButton =document.querySelector('i');
searchButton.addEventListener('click',function(){
    var input = document.querySelector('input').value;
    getTracks(input);


});



document.querySelector(".ui").addEventListener('keyup',function(e){

    var input = document.querySelector(".js-search").value;
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
        var input = document.querySelector('input').value;
        getTracks(input);

      
    }
  
});





SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});


function getTracks(name){
    SC.get('/tracks', {
        q: name
      }).then(function(tracks) {
 
          $("#searchResults").empty();

          tracks.forEach(track => {
              
              var card = document.createElement('div');
              card.classList.add("card");
      
              var imageDiv = document.createElement('div');
              var img = document.createElement('img');
              img.classList.add("image_img");
              img.src=track.artwork_url || "https://picsum.photos/290/290";
              imageDiv.appendChild(img);
              card.appendChild(img);
      
              var contentDiv = document.createElement('div');
              contentDiv.className="content";
      
              var header = document.createElement('div');
              header.className="header";
      
              var hyperLink = document.createElement('a');
              hyperLink.href=track.permalink_url;
              hyperLink.target="_blank";
              hyperLink.innerText= track.title;
      
              header.appendChild(hyperLink);
              contentDiv.appendChild(header);
              card.appendChild(contentDiv);
      
      
              var button = document.createElement('div');
              button.className = "ui bottom attached button js-button";
              button.id="button";
              
      
              var icon = document.createElement("i");
              icon.className="add icon";
      
              var span = document.createElement('span');
              span.innerText = "Add to playlist";
      
              button.appendChild(icon);
              button.appendChild(span);

              button.addEventListener('click',function(){
                embedAudioWidget(track.permalink_url);

              });
      
              card.appendChild(button);
      
              var searchResults = document.getElementById("searchResults");
              searchResults.appendChild(card);
      
          });
      
      });
}


function embedAudioWidget(link)
{
    SC.oEmbed(link, {
    auto_play: true
    }).then(function(embed){
    console.log('oEmbed response: ', embed);
    var playlist = document.querySelector(".js-playlist");
    var item = document.createElement('div');
    item.innerHTML=embed.html;
    playlist.prepend(item);

    //added local storage
    localStorage.setItem("key",playlist.innerHTML);

    });

}

//assigning local storage
var playlist = document.querySelector(".js-playlist");
playlist.innerHTML =localStorage.getItem("key");


})();



