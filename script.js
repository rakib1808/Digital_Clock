let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

setInterval(()=>{
  let TodayDate = new Date();
  let hr = TodayDate.getHours();
  let min = TodayDate.getMinutes();
  let sec = TodayDate.getSeconds();

  if(hr<12){
    ampm.innerHTML= 'AM'
  }
  else{
    ampm.innerHTML= 'PM'
  }

  if(hr>12){
    hr=hr -12
  }

  if(hr=='0'){
    hr='12'
  }
  if(hr<10){
    hr='0'+ hr
  }
  if(min<10){
    min='0'+ min
  }
  if(sec<10){
    sec='0'+ sec
  }

  hours.innerHTML=hr
  minutes.innerHTML=min
  seconds.innerHTML=sec
})