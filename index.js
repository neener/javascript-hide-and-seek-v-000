 function getFirstSelector(selector){
 	return document.querySelector(selector)
 }

 function nestedTarget(){
 	return document.querySelector('#nested .target')
 }

 function increaseRankBy(n){
 	const lists = document.querySelectorAll('.ranked-list li')

 	for (var i = 0; i < lists.length; i++){
 		lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
 	}
 }

 function deepestChild(){
 	let node = document.querySelector('#grand-node')
 	let nextNode = node.children[0]

 	while(nextNode){
 		node = nextNode
 		nextNode = node.children[0]
 	}

 	return node

 }