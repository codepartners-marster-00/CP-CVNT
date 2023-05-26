
$("#cpcv-navs").load("./app/set_/cpcv-categories.html");
$("#cpcv-covers").load("./app/set_/cpcv-front.html");
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
Console.WriteLine(".aMMMb  .aMMMb  dMMMMb  dMMMMMP dMMMMb  .aMMMb  dMMMMb dMMMMMMP dMMMMb  dMMMMMP dMMMMb  .dMMMb ");
Console.WriteLine("dMP'VMP dMP'dMP dMP VMP dMP     dMP.dMP dMP'dMP dMP.dMP   dMP   dMP dMP dMP     dMP.dMP dMP' VP ");
Console.WriteLine("dMP     dMP dMP dMP dMP dMMMP   dMMMMP' dMMMMMP dMMMMK'   dMP   dMP dMP dMMMP   dMMMMK'  VMMMb   ");
Console.WriteLine("dMP.aMP dMP.aMP dMP.aMP dMP     dMP     dMP dMP dMP'AMF   dMP   dMP dMP dMP     dMP'AMF dP .dMP   ");
Console.WriteLine("VMMMP'  VMMMP' dMMMMP' dMMMMMP dMP     dMP dMP dMP dMP   dMP   dMP dMP dMMMMMP dMP dMP  VMMMP'    ");
