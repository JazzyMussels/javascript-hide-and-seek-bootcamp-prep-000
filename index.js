function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < lis.length; i+=1) {
    lis[i].innerHTML = (parseInt(lis[i]) + n).toString
  }
}

function deepestChild() {
  var nodes = document.querySelector('div#grand-node')
  var kids = nodes.children[0]
  
  while (kids) {
    nodes = kids
    kids = nodes.children[0]
  }
  return (nodes)
}
    
  
 