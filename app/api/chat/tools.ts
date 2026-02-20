import { stepCountIs, tool } from 'ai';
import { z } from 'zod';

//TODO TASK 2 - Tool Calling
// Define your tools here. Each tool has a description, parameters (using Zod), and an execute function.
// The model decides when to call a tool based on the user's message.

// export const weatherTool = tool({
//   description: 'Get the current weather for a given city',
//   parameters: z.object({
//     city: z.string().describe('The city to get weather for'),
//   }),
//   execute: async ({ city }: { city: string }) => {
    
//     const mockWeather: Record<string, { temp: number; condition: string }> = {
//       london: { temp: 12, condition: 'Cloudy' },
//       tokyo: { temp: 22, condition: 'Sunny' },
//       new_york : { temp: 18, condition: 'Partly cloudy' },
//     };
//     const data = mockWeather[city.toLowerCase()] ?? { temp: 20, condition: 'Unknown' };
//     return { city, temperature: data.temp, condition: data.condition };
//   },
// });
export const timeTableTool=tool({
  description:'Get the timetable for a given day',
  parameters:z.object({
    batch: z.string().describe("The batch to get timetable for,the options are A,B"),
    class: z.number().int().describe("The class to get timetable for,The options are 1,2,3,4"),
    day:z.number().int().describe("The day to get timetable for.The options are 1,2,3,4,5,6.7 where 1 is monday and 7 is sunday"),
  }),
execute:async({batch,class: classNum,day}:{batch:string,class: number,day:number})=>{
  if(classNum===1&&batch==="A"&&day===1){
    console.log("Hello");
    return "Maths,Physics,Chemistry"
  }
  else if(classNum===1&&batch==="A"&&day===2){
   console.log("Hello");
    return "English,Computer Science,Physical Education"
  }
  else if(classNum===1&&batch==="A"&&day===3){
    console.log("Hello");
    return "Biology,History,Geography"
  }
  else if(classNum===1&&batch==="A"&&day===4){
    console.log("Hello");
    return "Maths,Physics,Chemistry"
  }
  else if(classNum===1&&batch==="A"&&day===5){
  console.log("Hello");
    return "English,Computer Science,Physical Education";
  }
  else if(classNum===1&&batch==="A"&&day===6){
    console.log("Hello");
    return "Biology,History,Geography"
  }
  else if(classNum===1&&batch==="A"&&day===7){
    console.log("Hello");
    return "No classes today!"
  }
  else{
   console.log("Hello");
    return "Timetable not found for the given batch,class and day.";
  }
}},


);

// Add more tools here and export them in the toolSet below

export const tools = {
  getTimeTable: timeTableTool,
};
