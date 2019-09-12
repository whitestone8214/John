John - A toy add-on for Pale Moon and Basilisk

Version 0.0.1

Copyright (C) 2019 Minho Jo <whitestone8214@gmail.com>

License: MIT License (see license.txt)

Required:
	- Latest version of Pale Moon or Basilisk (Tested on Pale Moon 28.7.0)
	- sh(1)
	- zip(1) (http://infozip.sourceforge.net/Zip.html)

Usage:
	1. Run ./oneshot.sh with shell; This will create john.xpi
	2. Open the created john.xpi with Pale Moon or Basilisk
	3. Install it
	4. Type chrome://maria/content/smith.html; It will load john/smith.html that is packed in

Note:
	- smith.html will try to load /home/user/script.js by default. The example script.js is included, so copy it to /home/user and try it.