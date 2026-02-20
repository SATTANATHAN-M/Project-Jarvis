import type { UIMessage } from 'ai';

type MessagePart = 
  | { type: 'text'; text: string }
  | { type: 'tool_call'; toolName: string; args: any }
  | { type: 'tool_result'; result: any }
  | { type: string };

import MarkdownPreview from "@uiw/react-markdown-preview";
export default function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';
  const text = message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map(p => p.text)
    .join('');
    console.log("PARTS:", message.parts);

    const toolCalls = message.parts
  .filter(
    (p): p is Extract<typeof p, { type: "tool_call" }> =>
      p.type === "tool_call"
  )
  .map((p) => `${p.toolName}(${JSON.stringify(p.args)})`)
  .join("\n");

const timetable = message.parts
  .filter(
    (p): p is Extract<typeof p, { type: "tool_result" }> =>
      p.type === "tool_result"
  )
  .map((p) => String(p.output))
  .join("\n");


  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-foreground text-background rounded-br-md'
            : 'bg-zinc-100 dark:bg-zinc-800 rounded-bl-md'
        }`}
      >
        <MarkdownPreview source={text} />
        <MarkdownPreview source={toolCalls} />
        <MarkdownPreview source={timetable} />
        
      </div>
    </div>
  );
}
