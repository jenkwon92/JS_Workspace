/* 
  아래의 코드 단위는 사물 자체가 아니라, 장차 사물을 대량으로 생상할 수 있는 틀이다
  그리고 전산분야에서는 이 틀을 가리켜 클래스라 부른다.
  예> 붕어빵(인스턴스)- 붕어빵형판(클래스)
  
  객체지향 프로그래밍 언어
  객체지향이란? 객체중심적 사고방식으로 접근해야한다.
  */
/*2015년 부터 ECMAScript(정식명칭) : 클래스*/
class Arrow{
  //클래스 안에 선언된 변수는, 이 클래스 소속이 되므로 변수명 앞에 자기 자신꺼라는
  //대명사를 붙여야하며, this라는 이미 전해진 변수를 쓴다.
  //소유권을 '주체'의 소유

  //ES 2015년에 발표된 JS에 의해서 , 클래스가 소유한 변수는 constructor()라는 생성자 함수에 넣어둬야한다.

  //화살 생성
  //클래스 안에 선언된, 즉 클래스가 보유한 함수는 해당 사물의 동작방법을 결정짓는다하여
  //메서드라한다. method(방법)
  constructor(x,y){
    this.arrow;
    this.stepX=10; // 몇 픽셀 움직이는지 결정하는 함수
    this.arrow = document.createElement("span");//<span></span>
    this.arrow.innerText="→"; //<span>→</span>
    this.arrow.style.position="absolute";
    this.arrow.style.left=x+"px";
    this.arrow.style.top=y+"px";
    this.arrow.style.color="red";
    this.arrow.style.fontSize="30px";
    document.body.appendChild(this.arrow);
  }
  //화살 동작을 처리할 함수
  move(){
    this.arrow.style.left=parseInt(this.arrow.style.left)+this.stepX+"px";
  }
}