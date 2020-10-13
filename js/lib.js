/*---------------------------------------------------------
두 수 a,b 에 대한 절대값을 반화나는 함수
---------------------------------------------------------*/
function getAbs(a, b) {
  //두 수를 대상으로 절대값을 구하는 식
  return Math.abs(a-b); //함수를 호출한 실행부가 결과를 가지고 
                        // 호출한 곳으로 되돌아감
}

/*---------------------------------------------------------
랜덤 구하는 함수
n을 넣으면, 0~n까지포함하여 반환하는 함수
---------------------------------------------------------*/
function getRandom(n){
  var r = Math.random(); //1보다 작은 실수  0.0xxxx ~ 0.9xxx
  return Math.floor((n+1) * r); //소수점을 버린다.
}

/*---------------------------------------------------------
랜덤 구하는 함수 Ⅱ
ex) 7과 23 사이의 랜덤값을 반환
a: 7최소값
b: 23최대값
---------------------------------------------------------*/
function getRandomBetween(min,max){
  //일단 최소값 이상은 무조건 확보되어야한다. 즉 반환되어야한다
  //return Math.floor(Math.random()*(max-min+1))+min;
  return getRandom(max-min)+min;
}

/*---------------------------------------------------------
숫자에 0을 붙인 날짜처리
매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서 0을 붙여줌
(두자리, 한자리 판단마저도 알아서 처리)
---------------------------------------------------------*/
function getZeroDate(n){
  //숫자 n이 10을 넘으면 기존의 n은 그냥 쓰고
  //if(n>10){
  //}
  
  if(n<10){//n이 10보다 작으면 0을 접두어로 붙이자
    n="0"+n;
  }
  return n;
}

/*-----------------------------------------------
아래의 함수는, 두 물체간 충돌여부를 판단해주는 함수이다.
box1 : 판단 대상 요소1 ex) div 
box2 : 판단 대상 요소2 ex) div
-----------------------------------------------*/
function collisionCheck(box1, box2) {
  //두물체간 충돌 여부 판단 
  var x1=parseInt(box1.style.left);
  var width1=parseInt(box1.style.width);
  var y1=parseInt(box1.style.top);
  var height1=parseInt(box1.style.height);
  
  var x2=parseInt(box2.style.left);
  var width2=parseInt(box2.style.width);
  var y2=parseInt(box2.style.top);
  var height2=parseInt(box2.style.height);


  /*
  조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
  조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
  조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
  조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
  */
  var result = (x1+width1 >= parseInt(box2.style.left))
  && (y1+height1)>=parseInt(box2.style.top) 
  && y1 <=(y2+height2) 
  && x1 <=(x2+width2)  

  return result;
}


/*-----------------------------------------------
해당 월의 총 일수 구하기 (마지막 날 구하기)
yy: 구하고 싶은 연도
mm : 구하고 싶은 월을 의미
주의) 자바스크립트에서 월은 0부터 시작하므로
    10월의 마지막 날을 구하려면 9를 넘겨야한다.
-----------------------------------------------*/
function getLastDate(yy,mm){
  var d = new Date(); //현재 날짜이므로, 조작이 가해져야한다
  d.setFullYear(yy);
  d.setMonth(mm+1); //일단 다음달로 이동 왜?? 0을 대입하러
  d.setDate(0); //다시 이전달로 넘어오면서 마지막날로 세팅
  return d.getDate(); //마지막날을 반환
}