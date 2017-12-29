// function foo() {
//   alert('Your email has been sent');
// }

function foo() {

  var myBtn = document.getElementById("myBtn");
  myBtn = window.open('', '', 'width=200,height=300');
  myBtn.document.write("<p>Lot Name: Esperanza</p>");
  myBtn.document.write("<p>Lot Price: P800,000</p>");
  myBtn.document.write("<p>Lot Size: 50 sq. metres</p>");
  myBtn.document.write("<input type='button' value='GoToReserve' onclick='gotoreserve()'>");
  myBtn.focus();

}
