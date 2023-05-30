
$("#cpcv-navs").load("./app/set_/cpcv-categories.html");
$("#cpcv-covers").load("./app/set_/cpcv-front.html");
function facetoface(codeyh) { 
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = codeyh;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  alert("복사되었습니다z. 북마크 관리자에서 직접 추가하세요.");
}
var facetofacebtn = document.getElementById("facetoface_btn")
facetofacebtn.addEventListener("click", function (e) { 
  var codeyh = "javascript:(() => {const inputFile = document.createElement('input');inputFile.setAttribute('type', 'file');inputFile.setAttribute('style', 'display:block; margin-bottom:8px;');inputFile.setAttribute('accept', 'image/png, image/gif, image/jpeg');const inputStyle = `font-size:16px; padding:4px 10px; width:120px; margin-right:10px; border:1px solid #333; border-radius:4px; background-color:#f1f4f7;%60;const inputPosition = document.createElement('input');inputPosition.setAttribute('style', inputStyle);inputPosition.setAttribute('type', 'text');inputPosition.setAttribute('placeholder', 'bgPosition');inputPosition.setAttribute('value', 'center top');const inputSize = document.createElement('input');inputSize.setAttribute('style', inputStyle);inputSize.setAttribute('type', 'text');inputSize.setAttribute('placeholder', 'bgSize');inputSize.setAttribute('value', '100% auto');const buttonStyle = %60font-size:15px; padding:4px 10px; width:60px; font-weight:bold; border-radius:4px; color:#fff; background-color:#bd0707; margin:0; border:0;%60;const applyButton = document.createElement('button');applyButton.setAttribute('style', buttonStyle);applyButton.textContent = '적용';const closeStyle = %60position:absolute; border:0; margin:0; top:12px; right:12px; width:24px; height:24px; background-color:#fff;%60;const closeButton = document.createElement('button');closeButton.setAttribute('style', closeStyle);closeButton.innerHTML = %60<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAA5tJREFUWEftl09oHHUUx7/fmU02eKhi1aqZreYgilXaQytS0Z0NtVAPUqEBIYqz21IErb3Y9lJqQJSql5WCBzGbNS0KltZj8BCzG1ERC4otxdq0hs5uTBFbZEtLm53fk0kyodns/NsEySFzG+a99/v8vu/33rwfsQwfLkMmrEBFzcqKUv+LUpeezz3IutpA0e4TqDs14DIo9vWOVaceGTpyMypEo13s9J3ftifZcaP2OsFeATYSC4tFIDURDmlg3igXfowLFwtqwrS2O4I8yYciLyQ4WVdtbz783ad/RfWJBCUAK6a1H4L3SWpRg8/ZiUwoYPvacvHnKL6RoGwz+xGBt2cCqjERrYuEHrqAyEWABoh2gboGxc2p0eLpML9QqEraehXkoBtIgF+Q1LZoN52tCnKU0BJ+C4jI2fZEoruunKdF4SsXDMA4dGejMTz4TxBYINSfpnVXm+ACyLsF+JW6s8ULWElbPUL5ohmYAL87Tlu3d47sdG4bob4GmYTwE6NceKNlKDtjfUjhvmmVZne+Zvizy17Aqmm93KiYr53w2EzKZUoU1qVGi+f9wHyVkp4evfL3HZOEdo/nLCLnHNWeub2SKmZ2h0B96SrWqJDr56Poe0Zp4GBsKDuTTVNQanT0AwPUO3UnuXUesG+K1Rmj9PmT8aFM6wDBw80cm6VIzL4ES331eamdS9nCKMkprrr3+0KtWXzf9FXT2Y+FeCuguhak0rMNKgLPhuRjnSOFc7GgKuZrRwHtlcCeouSEMVrccbtNxdxlQOpj05UW8FDDM53fDvwQEyqbB7DXV6mGsp8HFtAu5ux051FjePCPWFD2cjxTl7p3PqcpVV5QfU0Ucs8QKIciV5/Ib0a5uD529Qn6tGp6fALkmrk+5QPkdfam7aJZKinvGiPFQ7GhXIeqmTsskANL3tGhP54q9Y+1BOX++xLCMRKrY/37Gjq/nbFeoMJJtyJJHukcKfi2Ghc0dEqwzVwvIcem1VrslCByUTr0Talv+q8EtovAPjT70U5nPyCxf+a11XlKagJ989pS/5mwNUOVmlVokZMnqgry0pJOnt7Oqpnci0pUnmBX2G5nNyOEOjEF7ukqFSej+EQ6U42Bpm8z12u7KegVjU81u81A5F9QGxJKPjUy8FNUGM8uUvr8go4/u/sBXb+1ntDun7n3cRIa7Kurr5164vjxW3FhlgSq1UXD/BalVFjwVr+vQEVVbkWpqEr9B8UMAkQ9FW25AAAAAElFTkSuQmCC' alt='clsoe' style='width:24px;'>%60;const container = document.createElement('div');const divStyles = %60position:fixed; left:50%; top:20px; padding:16px; transform:translateX(-50%); background-color:#fff; border-radius:14px; box-shadow:0 0 10px rgba(0,0,0,.4); white-space:nowrap; z-index:9999; box-sizing:border-box; min-width:280px;%60;container.appendChild(inputFile);container.appendChild(inputPosition);container.appendChild(inputSize);container.appendChild(applyButton);container.appendChild(closeButton);container.setAttribute('style', divStyles);document.body.appendChild(container);closeButton.addEventListener('click', () => {container.remove();});applyButton.addEventListener('click', () => {if (inputFile.files && inputFile.files[0]) {const reader = new FileReader();reader.onload = (e) => {let backgroundStyle = %60background-image: url('${e.target.result}'); background-repeat:no-repeat; %60;const positionValue = inputPosition.value.trim();if (positionValue) {backgroundStyle += %60 background-position: ${positionValue};%60;}const sizeValue = inputSize.value.trim();if (sizeValue) {backgroundStyle += %60 background-size: ${sizeValue};%60;}document.documentElement.setAttribute('style', backgroundStyle);};reader.readAsDataURL(inputFile.files[0]);document.body.style.opacity = 0.4;}});})();";
  facetoface(codeyh)
})
function CALL(_url) {
  $.ajax({
    type: "get",
    url: _url,
    dataType: "html",
    success: function (data) {
      $("#cpcv-pagecall").html(data).scrollTop(0);
      let asideHtml = $(data).find("#aside-inner").css("display", "block");
      $("#aside-container").html(asideHtml);
    },
    error: function () {
      $("#cpcv-pagecall").text("waiting to write!");
    },
  });
}
var cssRule = "color:#e75a0b;" +"font-size:1.75em;"
var cssLogo1 ="background-color:#231916;" +"color:#e75a0b;" +"font-size: 60px;" +"font-weight: bold;" +"letter-space:-1px;" +"font-family:Tahoma,Arial,sans-serif";
var cssLogo2 ="background-color:#e75a0b;" +"color:#231916;" +"font-size: 60px;" +"font-weight: bold;" +"letter-space:-1px;" +"font-family:Tahoma,Arial,sans-serif";
if(window.console!=undefined){
  setTimeout(console.log.bind(console,"%c codepartners ", cssLogo2),0);
  setTimeout(console.log.bind(console,"%c Grow with the success of clients",cssRule),0);
}
Console.WriteLine("aMMMb  aMMMb  dMMMMb  dMMMMMP dMMMMb  aMMMb  dMMMMb dMMMMMMP dMMMMb  dMMMMMP dMMMMb  dMMMb");
Console.WriteLine("dMP'VMP dMP'dMP dMP VMP dMP     dMP.dMP dMP'dMP dMP.dMP   dMP   dMP dMP dMP     dMP.dMP dMP' VP ");
Console.WriteLine("dMP     dMP dMP dMP dMP dMMMP   dMMMMP' dMMMMMP dMMMMK'   dMP   dMP dMP dMMMP   dMMMMK'  VMMMb   ");
Console.WriteLine("dMP.aMP dMP.aMP dMP.aMP dMP     dMP     dMP dMP dMP'AMF   dMP   dMP dMP dMP     dMP'AMF dP .dMP   ");
Console.WriteLine("VMMMP'  VMMMP' dMMMMP' dMMMMMP dMP     dMP dMP dMP dMP   dMP   dMP dMP dMMMMMP dMP dMP  VMMMP'    ");
