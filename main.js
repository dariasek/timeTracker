document.getElementById('play').addEventListener('click', addNewElement);

let IDcounter = 0;

function addNewElement(){
    let newDiv = document.createElement('div');
    newDiv.classList.add('magic-div');
    let hrDiv = document.createElement('div');
    let hr = document.createElement('hr');
    let newTextSpan = document.createElement('span');
    newTextSpan.classList.add('tracker-name');
    let newTimeSpan = document.createElement('span');
    newTimeSpan.classList.add('time');

    if (document.getElementById('name').value.length > 25){
      document.getElementById('name').value = document.getElementById('name').value .substr(0,24) + '...';
    } else if (document.getElementById('name').value.length == 0){
      document.getElementById('name').value = 'New tracker #' + IDcounter;
    }

    let text = document.createTextNode(document.getElementById('name').value);

    let newButton = document.createElement('button');
    let i = document.createElement('i');
    i.classList.add('material-icons');
    let textButton = document.createTextNode('stop');
    newButton.classList.add('buttonListClass');
    newButton.id = 'newB'+ IDcounter;
    i.appendChild(textButton);
    newButton.appendChild(i);


    let time0 = new Date().getTime();
    let myInterval = setInterval(function timer(){
      let time1 = new Date().getTime();
      let difference = time1 - time0;
      let h = Math.floor(difference / 3600000);
      let m = Math.floor(difference / 60000) - h*60;
      let s = Math.floor(difference / 1000) - m*60 - h*3600;
      
      if (s<10){ s = '0'+s;}
      if (m<10){ m = '0'+m;}
      if (h<10){ h = '0'+h;}
      let mainTime = h + " : "+ m + " : " + s;
      newTimeSpan.innerHTML = mainTime;
      if (document.getElementById(newButton.id).classList.contains('clicked')){
        clearInterval(myInterval);
      }

    },1);

    newTextSpan.appendChild(text);
    newDiv.appendChild(newTextSpan);
    newDiv.appendChild(newTimeSpan);
    newDiv.appendChild(newButton);
    hrDiv.appendChild(hr);

    document.getElementById('listofTracks').appendChild(newDiv);
    document.getElementById('listofTracks').appendChild(hrDiv);

    document.getElementById(newButton.id).addEventListener('click', addClass);

    function addClass(){
      newButton.classList.add('clicked');
    }

    IDcounter++;
    
}

