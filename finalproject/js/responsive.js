/*------Last Modified Date-------------*/
var string = document.lastModified;
document.getElementById("date").textContent = string;
/*-------End of Last Modified Date: -------------*/

  /*responsive*/
  
  const button = document.querySelector('.menu');
  const mainnav = document.querySelector('.navigation')
  
  button.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
  
  /*End of reponsive*/