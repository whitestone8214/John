John - A toy add-on for Pale Moon and Basilisk

Version 0.0.0

Copyright (C) 2019 Minho Jo <whitestone8214@gmail.com>

License: MIT License (see license.txt)

Required:
	- Latest version of Pale Moon or Basilisk
	- Archiver that can pack files into single .zip file

Usage:
	1. Pack files into single .zip file; Top directory itself MUST NOT be included
	2. Open the file with Pale Moon or Basilisk; Change the file extension to .xpi if needed
	3. Install it
	4. Type chrome://maria/content/smith.html; It will load john/smith.html that is packed in

Note:
	- smith.html will try to load /home/user/script.js by default. You can create and edit /home/user/script.js or modify the code in john/smith.html.