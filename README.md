# fcc-09-drum-machine

### `play()` and fixing bugs
Error message 
```
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().

```
1. `video.play()` starts loading video content **asynchronously**.
2. `video.pause()` interrupts video loading because it it not ready yet.
3. `video.play()` rejects asynchronously loudly.
