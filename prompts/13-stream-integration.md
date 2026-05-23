Read AGENTS.md first and follow it strictly.

Use the installed GetStream agent skills and the Stream docs to implement Stream audio call setup for the selected lesson flow. When a user taps a lesson, keep the existing Audio Lesson screen UI and add the ability to start, join, mute/unmute, and end an audio-only Stream call.

Use Expo API routes for Stream token generation and call creation. Do not expose Stream secrets in the Expo app. Use the selected lesson, selected language, and logged-in Clerk user when creating the call/session.

Preserve the existing UI and lesson data. Track the user's Stream audio call lifecycle with `idle`, `loading`, `connecting`, `joined`, `error`, and `ended` states. Track mute separately as `isMuted`, not as a connection state. Show the call status, mute state, and user info on the audio UI.
