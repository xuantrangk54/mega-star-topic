import React from 'react';

// Dữ liệu JSON
const data = {
  links: [
    { id: 1, url: 'https://example.com', text: 'Example' },
    { id: 2, url: 'https://google.com', text: 'Google' },
    { id: 3, url: 'https://facebook.com', text: 'Facebook' }
  ]
};

const App = () => {
  return (
    <div>
      <h1>Danh sách liên kết</h1>
      <ul>
        {data.links.map(link => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;