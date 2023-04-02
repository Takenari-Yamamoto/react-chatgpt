import { gptClient } from '../libs/gptClient';

type GPT3Model = 'gpt-3.5-turbo';

type GptParams = {
  model: GPT3Model;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  n?: number;
  stop?: string[];
};

type GptResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: Array<{
    message: {
      role: 'assistant';
      content: string;
    };
    finish_reason: string;
  }>;
};

export const gptRepository = () => {
  const post = async (prompt: string): Promise<string> => {
    const params: GptParams = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    };
    const res = await gptClient.post<GptResponse>('/chat/completions', params);
    return res.data.choices[0].message.content;
  };

  return {
    post,
  };
};
