Read AGENTS.md first and follow it strictly.

Use the installed Vision Agents skill and Stream skills to connect the Audio Lesson screen to the Vision Agent so the AI teacher joins the same Stream call as the user. 

Add Expo API routes to start and stop the agent that proxy to the Vision Agent server, and pack the selected lesson, language, goals, vocabulary, phrases, and AI teacher prompt into the Stream call's custom data so the agent can read it on join. Use this custom data shape:

```ts
type LessonCallCustomData = {
  lessonId: string;
  languageId: string;
  goals: string[];
  vocabulary: string[];
  phrases: string[];
  teacherPrompt: string;
};
```

Update the Python agent to actually consume those fields.

Make sure the agent has permission to publish audio in audio_room (admin role + goLive). Clean up the agent session both when the user ends the call and when the screen unmounts. 

Do not expose any secrets in the mobile app. Keep the existing Stream audio flow intact. Keep the user's Stream call lifecycle separate from the AI teacher agent connection state. Use `idle`, `connecting`, `connected`, and `failed` for the Vision Agent connection status only.
