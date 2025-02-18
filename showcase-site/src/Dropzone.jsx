import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import './DropZone.css';
import DraggableWrapper from './DraggableWrapper';

const DropZone = () => {
  const [droppedComponents, setDroppedComponents] = useState([]);

  useEffect(() => {
    if (!window.componentRegistry) {
      window.componentRegistry = new Map();
    }
  }, []);

  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item, monitor) => {
      try {
        const offset = monitor.getSourceClientOffset();
        if (!offset) return; // Guard against null offset
        const dropZoneEl = document.getElementById('dropzone');
        if (!dropZoneEl) return; // Guard against missing element
        const dropZoneRect = dropZoneEl.getBoundingClientRect();
       
        const position = {
          x: offset.x - dropZoneRect.left,
          y: offset.y - dropZoneRect.top
        };

        // Log the dropped item for debugging
        console.log('Dropped item:', item);

        // Handle move vs clone behavior
        if (item.moveType === 'move' && item.id) {
          // Update position for existing component
          setDroppedComponents(prev => prev.map(comp => 
            comp.id === item.id ? { ...comp, position } : comp
          ));
        } else {
          // Ensure we have a valid component before proceeding
          if (!item.component) {
            console.error('No component found in dropped item');
            return;
          }

          // Store component in registry with error handling
          try {
            if (!window.componentRegistry.has(item.componentType)) {
              window.componentRegistry.set(item.componentType, item.component);
            }
          } catch (e) {
            console.error('Failed to register component:', e);
            return;
          }

          // Add to dropped components
          setDroppedComponents(prev => [...prev, {
            id: Date.now(),
            componentType: item.componentType,
            props: item.props || {}, // Ensure props is always an object
            position
          }]);
        }

        return { dropped: true };
      } catch (error) {
        console.error('Error in drop handler:', error);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const renderDroppedComponent = (componentInfo) => {
    try {
      const Component = window.componentRegistry.get(componentInfo.componentType);
      if (!Component) {
        console.error(`No component found for type: ${componentInfo.componentType}`);
        return null;
      }
      return (
        <DraggableWrapper 
          type="ITEM" 
          moveType="move"
          itemData={{ id: componentInfo.id }}
        >
          <Component {...componentInfo.props} />
        </DraggableWrapper>
      );
    } catch (error) {
      console.error('Error rendering component:', error);
      return null;
    }
  };

  const getComponentInfo = () => {
    droppedComponents.forEach(function (value, key, map){
      console.log(`${key}: ${value}`);
    })
  }

  return (
    <div
      id="dropzone"
      ref={drop}
      className={`dropzone ${isOver ? 'dropzone--active' : ''}`}
    >
      {droppedComponents.map((componentInfo) => (
        <div
          key={componentInfo.id}
          className="dropped-component"
          style={{
            left: `${componentInfo.position.x}px`,
            top: `${componentInfo.position.y}px`
          }}
        >
          {renderDroppedComponent(componentInfo)}
          {getComponentInfo()}
        </div>
      ))}
    </div>
  );
};

export default DropZone;