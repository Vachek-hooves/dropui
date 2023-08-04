import React, { useState } from 'react';
import { parse } from 'papaparse';

const DragDrop = () => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <>
      <h1 className="text-center text-5xl m-3">Import files</h1>
      <div
        className={`p-6 my-2 mx-auto max-w-md border-2 ${
          highlighted ? 'border-green-600 bg-green-100' : 'border-gray-600'
        }`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);
          console.log(e.dataTransfer.files);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === 'text/csv')
            .forEach(async (element) => {
              console.log(element.text())
              const content = await element.text();
              const data = parse(content, { header: true });
              console.log(data);
            });
        }}
      >
        drop here
      </div>
    </>
  );
};

export default DragDrop;
