import React, { useState, useEffect } from 'react';
import { Edit3 } from 'lucide-react';

const NotepadWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [notes, setNotes] = useState(localStorage.getItem('widgetNotes') || '');

  useEffect(() => {
    localStorage.setItem('widgetNotes', notes);
  }, [notes]);

  return (
    <div className="mx-auto left-55 top-45">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <Edit3 className="w-6 h-6" />
      </button>

      {/* Notepad */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-64 h-40 bg-white rounded-lg shadow-xl p-3 flex flex-col">
          <textarea
            className="w-full h-full border-none outline-none resize-none p-2 text-sm text-black"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..."
          />
        </div>
      )}
    </div>
  );
};

export default NotepadWidget;
