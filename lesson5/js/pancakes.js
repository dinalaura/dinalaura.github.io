let d = new Date()
const banner = document.getElementById('banner');
if(d.getDay() == 6){
  banner.style.display = 'block';
}
else{
  banner.style.display = 'none';
}