//한 영 변환
let is_korean = true;

function change() {
  const subs = document.getElementById("explain");

  var text = "calculator introduce";
  if (is_korean) {
    //한국어-> 영어
    text =
      "Hello, we're All That Calculator(ATC) for everyday life. 😊</br></br>Do you use calculators in your daily life? </br>Didn't it bother you to settle the accounts when many people paid?</br></br>We need to calculate not only for simple operations, but also for various situations.</br>It is very inconvenient to make or search Whenever you need calculator. 😥</br></br>In order to be hassle-free, we will bring a variety of calculators in ATC to quickly find and use the calculators we need. In addition, we are going to help you share your own calculator with others by wep posting. </br>See you again. 😊";
  } else {
    //영어->한국어
    text =
      "안녕하세요. 일상을 담은 계산기 All That Calculator 입니다. 😊</br></br>여러분은 일상에서 계산기를 얼마나 사용하시나요?</br>여러 사람이 돈을 냈을 때 정산하기 번거롭지 않으셨나요?</br></br>우리는 단순한 연산 뿐만 아니라, 여러 상황에 맞게 계산을 해야 합니다.</br>이때마다 필요한 계산기를 직접 만들거나 검색해서 써야 한다면 굉장히 불편하겠죠! 😢</br></br>저희는 이런 번거로움을 줄이고자, 다양한 계산기를 한 곳에 모아 필요한 계산기를 빠르게 찾아 쓸 수 있는 서비스를 제공하고자 합니다. 더불어 여러분들이 직접 만든 계산기를 게시하여 다른 사람들과 공유할 수 있도록 돕고자 합니다. 감사합니다. 😊";
  }
  is_korean = !is_korean;
  subs.innerHTML = text;
}

function init() {
  const subs = document.querySelector("#languageImg"); //#: id, 버튼 찾기
  subs.addEventListener("click", change); //버튼 이벤트 .addEventListener("click", <함수 이름>);
}

init();
