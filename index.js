function getFirstSelector(selector){
  
  return document.querySelector(selector);
}


function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}


function deepestChild(){
  
}

/*
const target = document.querySelector('#nested .target');
<span id="nested">
</span>
<a id="nested" class="target">
        <ul class="target">
          <a class="target">
            <span class="target">
              <div class="target">
                1
              </div>
*/


