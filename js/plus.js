function plus(){
    document.getElementById('number').innerHTML =
      parseInt(document.getElementById('number').innerHTML) + 1;
}

function reset(){
    if(!confirm('Reset score?')){
        return;
    }

    window.localStorage.removeItem('Plus.htm-number');
    document.getElementById('number').innerHTML = 0;
}

var locked = false;
document.getElementById('number').innerHTML =
  window.localStorage.getItem('Plus.htm-number') === null
    ? 0
    : window.localStorage.getItem('Plus.htm-number');

window.onbeforeunload = function(e){
    if(parseInt(document.getElementById('number').innerHTML) > 0){
        window.localStorage.setItem(
          'Plus.htm-number',
          document.getElementById('number').innerHTML
        );
    }
}

window.onkeydown = function(e){
    if(locked){
        return;
    }

    locked = true;
    plus();
};

window.onkeyup = function(e){
    locked = false;
};
