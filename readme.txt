John - A toy add-on for Pale Moon and Basilisk

Version 0.0.1

Copyright (C) 2019-2020 Minho Jo <whitestone8214@gmail.com>

License: MIT License (see license.txt)

Required:
	- Latest version of Pale Moon or Basilisk (Tested on Pale Moon 28.8.0)
	- sh(1)
	- zip(1) (http://infozip.sourceforge.net/Zip.html)

Usage:
	1. Run ./oneshot.sh with shell; This will create john.xpi
	2. Open the created john.xpi with Pale Moon or Basilisk
	3. Install it
	4. Copy script.js to /home/user
	5. Type chrome://maria/content/smith.html. It will load john/smith.html that is packed in, and the smith.html will load /home/user/script.js that you have copied