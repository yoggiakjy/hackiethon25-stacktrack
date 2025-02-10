import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import CounterWidget from './test-widget';

import { useDrag } from 'react-dnd'

const DraggableWrapper = ({ children, type, itemData }) => {
    // Apply `useDrag` hook to make the component draggable
    const [{ isDragging }, drag] = useDrag({
      type: type,
      item: itemData,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1, // Make the element semi-transparent when dragging
          cursor: 'move',
        }}
      >
        {children}
      </div>
    );
  };

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  // This effect will listen for drag events and close the dropdown when dragging starts
  useEffect(() => {
    const handleDragEnter = () => {
      setIsHovered(false); // Close the dropdown when drag enters anywhere
    };

    const handleDragLeave = () => {
      // Optionally, you can close the dropdown after a certain amount of time
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
        <h1>Drag Components</h1>
        <p>Select a component to drag and drop</p>
        
        <div className="dropdown-content">
          <DraggableWrapper type="ITEM" itemData={{ name: 'ExistingComponent'}}><CounterWidget/></DraggableWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
