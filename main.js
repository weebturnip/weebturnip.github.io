function main () {
  setBodyHeight();
}

function setBodyHeight() {
  const body = $("body")[0];
  const html = $("html")[0];
  body.style.height = html.clientHeight+"px";
  window.addEventListener("resize", function(){
    body.style.height = html.clientHeight+"px";
  });
}

function $(aString) {
  return document.querySelectorAll(aString);
}

window.onload = main;
