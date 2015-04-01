# Alloy *Background Image* Widget
[![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

The [Alloy](http://appcelerator.com/alloy) *Background Image* widget is a cross-platform widget to allow you to fill the entire screen with your background image both portrait and landscape regardless of platform or orientation using a single image.


## Screenshots
### Android

![Android](android.gif)

### iOS

![iOS](ios.gif)

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/com.centogram.bgimage)
1. Install [com.centogram.bgimage](http://gitt.io/component/com.centogram.bgimage) via [gitTio](http://gitt.io):

	`gittio install com.centogram.bgimage`

2. Place the widget inside your window:

		<Alloy>
			<Window id="window" class="container">
				<Widget src="com.centogram.bgimage" width="1200" height="500" image="/images/background.png" speed='500'>
				...
			</Window>
		</Alloy

	**NOTE:** The `<Window />` element must use layout 'absolute'

3. Set the parameters on the Alloy element to configure your image

4. Add the show or fadeIn callback to the Window's onload event and you're done:

		var init = function() {
		  $.window.removeEventListener("open", init);
		  $.bgimage.fadeIn();
		};
		$.window.addEventListener('open',init);
		$.window.open();

		
## Methods

| Function   | Parameters | Usage |
| ---------- | ---------- | ----- |
| show       | none       | Show the background image immediately |
| fadeIn     | none       | Fade the background image in using the speed specified earlier |

## Changelog
* 1.0
  * Initial version

## License

<pre>
Copyright 2013-2015 Centogram

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>