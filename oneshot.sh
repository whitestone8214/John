#!/usr/bin/sh


echo ":: Build"
cd src || exit 1
zip -qr ../john.xpi * || exit 1
cd .. || exit 1
echo "Done."
