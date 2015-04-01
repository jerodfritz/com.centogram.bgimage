var args = arguments[0] || {};

if(args.image){
  $.backgroundImage.image = args.image;
}

var Device = {
  dpi : Ti.Platform.displayCaps.dpi,
  width : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformWidth,
  height : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformHeight,
};

if (OS_ANDROID) {
  Device.width = (Device.width / (Device.dpi / 160));
  Device.height = (Device.height / (Device.dpi / 160));
}

var fitImage = function(_image, dimensions) {
  var aspectRatio = dimensions.width / dimensions.height;
  if ((Device.width / Device.height) < aspectRatio) {
    _image.height = Device.height;
    _image.width = Device.height * aspectRatio;
  } else {
    _image.height = Device.width * aspectRatio;
    _image.width = Device.width;
  }
};

fitImage($.backgroundImage, {
  width : args.width ? args.width : Alloy.CFG.backgroundImageWidth ? Alloy.CFG.backgroundImageWidth : 1200,
  height : args.height ? args.height : Alloy.CFG.backgroundImageHeight ? Alloy.CFG.backgroundImageHeight : 800
});

$.fadeIn = function(){
  var animation = Ti.UI.createAnimation({
    opacity : 1.0,
    duration : args.speed ? args.speed : Alloy.CFG.backgroundImageFadeSpeed ? Alloy.CFG.backgroundImageFadeSpeed : 500
  });
  $.backgroundImage.animate(animation);
};

$.show = function(){
  $.backgroundImage.opacity = 1;
};
