import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="relative w-fit m-auto rounded-full px-3 py-1 text-sm/6 animate-bounce cursor-pointer text-gray-400 dark:text-gray-600 ring-1 ring-black/10 hover:ring-black/20 dark:ring-white/10 dark:hover:ring-white/20">
      {greeting} and Thank you for visiting.{" "}
      <span
        onClick={() => setGreeting(randomMessage())}
        class="font-semibold text-indigo-400"
      >
        <span aria-hidden="true" class="absolute inset-0"></span>Click for a new
        greeting !
      </span>
    </div>
  );
}
