# PWA as a Windows "Share Target"

This is a bare-bones PWA demonstrating how to turn a PWA into a share target when installed in Windows.

It currently supports the following share types:

1. Link
2. Image
3. Text
4. Bitmap

## Installation

To install this PWA in Windows 10, you will need to sideload it. The bits you’ll need are in `AppX.zip`. [Instruction for sideloading](https://docs.pwabuilder.com/quickstart/2018/02/03/quick-start-sideload-pwa-win10.html) can be found on PWA Builder. You can skip steps 2 & 3.

## Testing a link

Open the browser of your choice and hit the "Share" charm. Select the Test PWA from the list. You should be shown a web page with a rundown of what’s happening, concluding with a JSON object containing the link info.

## Testing an image

In File Explorer, right click an image (or multiple) and Share it. Supported formats include JPG, PNG, and GIF. Choose the Test PWA as the target. You should see the sharing web page and the image(s) should be displayed at the bottom.