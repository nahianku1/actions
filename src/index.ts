import { getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";

try {
  const greetName = getInput("name");
  console.log(`Hello ${greetName}!`);
  const time = new Date().toLocaleTimeString();
  setOutput("time", time);
  const payload = JSON.stringify(context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed((error as Error).message);
}
