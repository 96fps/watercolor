# ![MDI icon](documentation/MDI_icon_48x48.png) watercolor/MDI

Mockup windowing system and "Multiple Document Interface"-style applications for the web platform.

This is largely a place for me to try and test out various web platform APIs in the same projecct.

To play with the static example, you can locally host a directory as webserver by using the python one-liner in a linux shell:

```sh
# might be "python" (with no '3') depending on your distro, or if you have "python-is-python3" installed.
python3 -m http.server 8000
```
This should be very similar on windows/macOS, but I have not had the time to try it.

At the moment it's a stack of static HTML/JS/CSS files, although I'm sure I will soon have server-based examples running minimal [socket.io](https://socket.io/)-based NodeJS programs on a server.

At time of writing, I have a version of this also online on [my website](www.96fps.net/MDI/MDI.html). This may change.

---

This started with me being curous how one could make desktop-style draggable windows on the web, that work reliabky on desktop, mobile, and hybrid touch screen devices, using modern versions of web standard CSS, [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events), and minmal javascript and as few dependancies as possible. 

I can netiher confirm nor deny whether this was after trying to use the [xpra-html5](https://github.com/Xpra-org/xpra-html5) plugin of xpra, attempting to control an x11 linux desktop at home in mobile Firefox and/or Chrome on my very modern large screeen "Motorola Stylus 5G - 2024", and becoming frustrated with the experience. 

I can also neither confirm nor deny if this is inspired by nostalgia for a website that used to exist called ["meebo"](https://en.wikipedia.org/wiki/Meebo), which was basically did what [pidgin](https://pidgin.im/) or [Adium](https://en.wikipedia.org/wiki/Adium).app do, where you can login to all your Instant Messaging platforms (iChat/AIM, MSN, GTalk/Jabber/Hangouts, etc) in a single place, but Meebo did it as a web 2.0 site that looked like a desktop app, instead of a desktop app, meaning you could log in at school or at an internet cafe. These (plus Skype) were the internet messaging platforms that your friends were using before smartphones, when SMS messages costed money, before affordable data plans were a thing, and before all your friends moved to iMessage, Facebook Messenger, WhatsApp, Discrod, or Signal/Telegram. Seeing someone was "on-line" meant something. People used to go "Offline", and being "Online" was new and meant they were at their desk using the computer, possibly using a family computer. IMs didn't cost per message, but being "online" could cost per minute.
