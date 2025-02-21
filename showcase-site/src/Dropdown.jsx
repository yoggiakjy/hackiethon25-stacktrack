import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import DraggableWrapper from './DraggableWrapper';

import CounterWidget from './widgets/test-widget';
import StockTracker from './widgets/stock-widget';
import WeatherWidget from './widgets/weather-widget';
import NotepadWidget from './widgets/notepad-Component';


const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  // This effect will listen for drag events and close the dropdown when dragging starts
  useEffect(() => {
    const handleDragEnter = () => {
      setIsHovered(false); // Close the dropdown when drag enters anywhere
    };

    const handleDragLeave = () => {
      // Doesnt do anything
    };

    const handleDragEnd = () => {
      setIsHovered(false); // Close the dropdown after the drag ends
    };

    // Add event listeners for drag events
    document.addEventListener('dragenter', handleDragEnter);
    document.addEventListener('dragleave', handleDragLeave);
    document.addEventListener('dragend', handleDragEnd);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('dragenter', handleDragEnter);
      document.removeEventListener('dragleave', handleDragLeave);
      document.removeEventListener('dragend', handleDragEnd);
    };
  }, []);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`dropdown ${isHovered ? 'show' : ''}`}>
      
        <div className="dropdown-content">
            {/* TODO : Find a way to dynamically add widgets to this using same format */}
            <DraggableWrapper type="ITEM">
                <CounterWidget /> 
            </DraggableWrapper>

            <DraggableWrapper type="ITEM">
                <StockTracker /> 
            </DraggableWrapper>

            <DraggableWrapper type="ITEM">
                <WeatherWidget /> 
            </DraggableWrapper>

            <DraggableWrapper type="ITEM">
                <NotepadWidget /> 
            </DraggableWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
