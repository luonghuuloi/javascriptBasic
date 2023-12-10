var arrImg = [
      'picture/1.jpg',
      'picture/2.jpg',
      'picture/3.png',
      'picture/4.png',
      'picture/5.jpg',
      'picture/6.jpg',
];
var imgIndex = 0;
function changeImg(ind){
    var src = arrImg[ind];
    document.getElementById("image_slide").src = src;
}
function previous(){
  imgIndex--;
  if(imgIndex < 0) imgIndex+=arrImg.length;
  changeImg(imgIndex);
  
}
function next(){
  imgIndex++;
  imgIndex = imgIndex%arrImg.length;
  changeImg(imgIndex);
}
