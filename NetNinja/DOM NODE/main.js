//node
const banner=document.querySelector('#pagebanner');
console.log(banner);
console.log('#pagebanner node type is:',banner.nodeType);
console.log('#pagebanner node name is:',banner.nodeName);
console.log('#pagebanner has child nodes',banner.hasChildNodes());
// const cloneBanner=banner.cloneNode(true);

//if its false
//console.log('#pagebanner has child nodes',banner.hasChildNodes());
const cloneBanner=banner.cloneNode(true);
console.log(cloneBanner);
// //error in finding nodeName and type of Null property
// var para=document.createElement("p");
// var node=document.createTextNode("Up above the world so high");
// para.appendChild(node);

// var parent=document.getElementById("div2");
// parent.appendChild(para);