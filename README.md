# svelte-crop-window

A crop window component for images and videos that supports touch gestures (pinch zoom, rotate, pan), as well as mousewheel zoom, mouse-dragging the image, and rotating on right mouse button.

Currently looking for contributors and feedback to help improve this component.

![video cropper](https://github.com/sabine/svelte-crop-window/blob/main/docs/videocrop.gif?raw=true)

If you can do code-review, that's very welcome.

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Acknowledgements

Big thanks goes to the Android library https://github.com/Yalantis/uCrop for being a great inspiration and to the developers for sharing their thought process in their [legendary blog post](https://yalantis.com/blog/how-we-created-ucrop-our-own-image-cropping-library-for-android/).

The library that inspired me to start working on my own crop component is https://github.com/ValentinH/svelte-easy-crop. I probably would never have gotten started in the first place had I not found and studied this neat little library.