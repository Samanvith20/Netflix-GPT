import OpenAI from "openai";


const openai = new OpenAI({
  apiKey:"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",
  dangerouslyAllowBrowser: true,
});

export default openai;