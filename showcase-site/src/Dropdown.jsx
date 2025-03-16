import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import DraggableWrapper from './DraggableWrapper';

import CounterWidget from './widgets/test-widget';
import StockTracker from './widgets/stock-widget';
import WeatherWidget from './widgets/weather-widget';
import NotepadWidget from './widgets/notepad-Component';

import { COMPONENT_TYPES, initializeComponentRegistry } from './registry';


const Dropdown = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // This effect will listen for drag events and close the dropdown when dragging starts
  useEffect(() => {
    initializeComponentRegistry();
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
    <div className='container-box flex w-full gap-2'>
      <div 
        className="dropdown-container bg-[#838383]"
        onMouseEnter={() => setIsHovered1(true)} 
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className={`dropdown ${isHovered1 ? 'show ' : ''}`}>
        
          <div className="dropdown-content">
              {/* Store our widgets here */}
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

      <div 
        className="dropdown-container bg-red-800"
        onMouseEnter={() => setIsHovered2(true)} 
        onMouseLeave={() => setIsHovered2(false)}
      >
         <div className={`dropdown ${isHovered2 ? 'show -left-1/2 transform -translate-x-1/4' : '-left-1/2 transform -translate-x-1'}`}>
        
          <div className="dropdown-content">
            {/* Store submission widgets here */}

            <DraggableWrapper type="ITEM">
                <StockTracker /> 
            </DraggableWrapper>

            <DraggableWrapper type="ITEM">
                <WeatherWidget /> 
            </DraggableWrapper>

        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Dropdown;
