import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';

function App() {
  const [text, setText] = useState('');
  const { fetchMessage, message } = useChatGpt();

  return (
    <div className="App">
      <TextField
        fullWidth
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <Button fullWidth variant="contained" onClick={() => fetchMessage(text)}>
        Submit
      </Button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
