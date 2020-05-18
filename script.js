


function display_ct()
{
 var x = new Date();
 document.getElementById('copy').innerHTML = x;
 var refresh=1000;
 mytime=setTimeout('display_ct()',refresh)
}

function initMap() 
{
  
  var uluru = {lat:26, lng: 80};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

function showSlides() 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

function func() 
{
  document.getElementById("demo").innerHTML = "Thank You! We will contact you soon!!";
}

function myFunction()
{
  
  var i=new Array(6);
  var k;
  i[0]="images/captcha1.jpg";
  i[1]="images/captcha2.jpg";
  i[2]="images/captcha3.jpg";
  i[3]="images/captcha4.jpg";
  i[4]="images/captcha5.jpg";
  i[5]="images/captcha6.jpg";
  var n=Math.floor(Math.random()*10);
  
  document.getElementById("re").className = "fa fa-refresh fa-spin";
  document.getElementById("img").src=i[n%6];
  

}
