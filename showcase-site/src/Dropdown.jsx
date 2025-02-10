import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import CounterWidget from './test-widget';

import { useDrag } from 'react-dnd'

const DraggableWrapper = ({ children, type, itemData }) => {
    // Get the component's display name or fallback to a default
    const componentType = children?.type?.displayName || 
                         children?.type?.name || 
                         'UnknownComponent';
  
    const [{ isDragging }, drag] = useDrag({
      type: type,
      item: {
        ...itemData,
        component: children.type, // Store the actual component type/function
        componentType,           // Store the name for registry
        props: children.props    // Store the component's props
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
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
        <p>Select a component to drag and drop</p>
        
        <div className="dropdown-content">
            {/* TODO : Find a way to dynamically add widgets to this using same format */}
            <DraggableWrapper type="ITEM">
                <CounterWidget /> 
            </DraggableWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
