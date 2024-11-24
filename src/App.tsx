import React, { useState } from 'react';
import './App.css';
import { idiomsOfInput } from './trie-from-idiom';

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim().toLowerCase();
    setInputText(text);
    if (text) {
      const suggestions = idiomsOfInput(text);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const onSuggestionClick = (suggestion: string) => {
    const lastChar = suggestion[suggestion.length - 1];
    setInputText(lastChar);
    const suggestions = idiomsOfInput(lastChar);
    setSuggestions(suggestions);
  };

  return (
    <div className="App">
      <h1>成语接龙</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          placeholder="输入成语..."
        />
      </div>
      <div className="suggestions-container">
        {suggestions.length > 0 ? (
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => onSuggestionClick(suggestion)}>{suggestion}</li>
            ))}
          </ul>
        ) : (
          <p>没有找到相关成语</p>
        )}
      </div>
    </div>
  );
}

export default App;