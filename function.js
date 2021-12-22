window.function = function(txt, fnt) {

  txt = txt.value ?? "";
  fnt = fnt.value ?? "";
  
  var element = document.createElement('canvas');
  element.className = "textDimensionCalculation";
  var context = element.getContext("2d");
  context.style="height: auto; width: auto;white-space: nowrap;";
    context.font = fnt;
    return context.measureText(txt).width;
}