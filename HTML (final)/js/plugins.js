img = new Array('1','2');
indice = 0;
setInterval("mudaImg()", 3000);
function mudaImg(i) {
  if (i == 0 || i == 1 ) {
    indice = i;
  } else {
    if (indice == img.length - 1) {
      indice = 0;
    } else {
      indice++;
    }
  }
  document.getElementById("banner_img_1").setAttribute("class", "");
  document.getElementById("banner_img_2").setAttribute("class", "");
  document.getElementById("banner_img_" + img[indice]).setAttribute("class", "hover");
  document.getElementById("banner_img").innerHTML = "<img src='img/"+ img[indice] +".png' width='1230' height='1313' border='0' alt=''>";
}
