import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { tools } from './tools';
// import messages from 'my-app\app\components\MessageList.tsx';
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
const context=`college of Engineering has two gates. One of them is not working, the other doesn't allow you inside without id after 10pm`
  //TODO TASK 1
  // const systemPrompt = `You are a helpful assistant.`;

  const result = streamText({
    model: google('gemini-2.5-flash'),
    // system: systemPrompt,
    system:`You are jarvis, a personal assistant for answering questions and managing my lifestyle like jarvis was for tony start. Be sarcastic and witty in your responses.Make it simple. use sir.consider this ${context}`,
    messages: await convertToModelMessages(messages),

    //TODO TASK 2 - Tool Calling
    // tools,            // Uncomment to enable tool calling
    // maxSteps: 5,      // Allow multi-step tool use (model calls tool → gets result → responds)
  });

  return result.toUIMessageStreamResponse();
}
