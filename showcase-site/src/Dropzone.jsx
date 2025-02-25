import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import './DropZone.css';
import DraggableWrapper from './DraggableWrapper';
import { initializeComponentRegistry } from './registry';

const DropZone = () => {
    const [droppedComponents, setDroppedComponents] = useState([]);
    
    // Initialize component registry with persistence
    useEffect(() => {
        // Load saved components
        //loadSavedComponents();

        initializeComponentRegistry();
        // Load saved components
        loadSavedComponents();
    }, []);

    const loadSavedComponents = () => {
        try {
            const saved = localStorage.getItem('droppedComponents');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Only set components if we have data to load
                if (parsed && parsed.length > 0) {
                    setDroppedComponents(parsed);
                }
            }
        } catch (error) {
            console.error('Error loading saved components:', error);
        }
    };

    const saveComponents = (components) => {
        try {
            const serializable = components.map(comp => ({
                ...comp,
                component: undefined // Don't serialize the component function
            }));
            localStorage.setItem('droppedComponents', JSON.stringify(serializable));
        } catch (error) {
            console.error('Error saving components:', error);
        }
    };

    const [{ isOver }, drop] = useDrop({
        accept: 'ITEM',
        drop: (item, monitor) => {
            try {
                const offset = monitor.getSourceClientOffset();
                if (!offset) return;
                
                const dropZoneEl = document.getElementById('dropzone');
                if (!dropZoneEl) return;
                
                const dropZoneRect = dropZoneEl.getBoundingClientRect();
                const position = {
                    x: offset.x - dropZoneRect.left,
                    y: offset.y - dropZoneRect.top
                };

                if (item.moveType === 'move' && item.id) {
                    setDroppedComponents(prev => {
                        const updated = prev.map(comp => 
                            comp.id === item.id 
                                ? { ...comp, position }
                                : comp
                        );
                        saveComponents(updated);
                        return updated;
                    });
                } else {
                    // Register new component
                    if (!window.componentRegistry.has(item.componentType)) {
                        window.componentRegistry.set(item.componentType, item.component);
                    }

                    const newComponent = {
                        id: Date.now(),
                        componentType: item.componentType,
                        props: item.props,
                        position,
                        originalProps: item.originalProps
                    };

                    setDroppedComponents(prev => {
                        const updated = [...prev, newComponent];
                        saveComponents(updated);
                        return updated;
                    });
                }

                return { dropped: true };
            } catch (error) {
                console.error('Error handling drop:', error);
                return { dropped: false };
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const renderDroppedComponent = (componentInfo) => {
        try {
            console.log(componentInfo.componentType.toLowerCase());
            const Component = window.componentRegistry.get(componentInfo.componentType.toLowerCase());
            if (!Component) {
                console.error(`Component not found: ${componentInfo.componentType}`);
                return null;
            }

            return (
                <DraggableWrapper
                    key={componentInfo.id}
                    type="ITEM"
                    moveType="move"
                    itemData={{
                        id: componentInfo.id,
                        componentType: componentInfo.componentType
                    }}
                >
                    <Component {...componentInfo.originalProps || componentInfo.props} />
                </DraggableWrapper>
            );
        } catch (error) {
            console.error('Error rendering component:', error);
            return null;
        }
    };

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
                        position: 'absolute',
                        left: `${componentInfo.position.x}px`,
                        top: `${componentInfo.position.y}px`
                    }}
                > 

                    {renderDroppedComponent(componentInfo)}
                </div>
            ))}
        </div>
    );
};

export default DropZone;