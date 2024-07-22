//Component to create a paragraph, can have a title or not, h1 or h2.

import React from 'react';

const Paragraph = ({ title, paragraphs }) => {
  return (
    <div>
      {title ? <h1>{title}</h1> : <></>}
      {paragraphs ? (
        paragraphs.map((item) => <p id={item.id}>{item.content}</p>)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Paragraph;
