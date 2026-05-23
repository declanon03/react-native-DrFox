Read AGENTS.md first and follow it strictly.

Before implementing, verify that the Vision Agents skill is actually installed in this repo, for example by checking skills-lock.json and .agents/skills/. If it is missing, stop and tell me that the skill needs to be installed before continuing. Do not guess the SDK API from memory.

Use the installed Vision Agents skill to create a Python service at vision-agent/ inside this repo. It is the AI language teacher, voice only, using OpenAI Realtime as the LLM and Stream Edge for transport.

Reuse STREAM_API_KEY/STREAM_API_SECRET from the parent .env and add OPENAI_API_KEY. By default the teacher always speaks English and teaches the selected language through English.

Create a simple, teachable Python setup for the service:

- Use Python 3.11 or newer.
- Add dependency files inside vision-agent/ using the package format recommended by the installed Vision Agents skill.
- Add a vision-agent/README.md with setup, environment variable, start, and verification commands.
- Load environment variables from the parent .env without duplicating secrets.
- Keep the service runnable from the vision-agent/ directory with one clear command.

Before writing any lifecycle code, verify the join and lifecycle method shapes against the installed SDK in this repo. After implementation, install dependencies, run the service start command, and confirm it starts cleanly.
