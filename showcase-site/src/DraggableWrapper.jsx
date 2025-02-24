import { useDrag } from 'react-dnd';

const DraggableWrapper = ({ children, type, itemData, moveType = 'clone' }) => {
    // Get the component's display name or fallback to a default
    const componentType = children?.type?.displayName ||
                         children?.type?.name ||
                         'UnknownComponent';
    
    const [{ isDragging }, drag] = useDrag({
        type: type,
        item: {
            ...itemData,
            component: children.type,
            componentType,
            props: children.props,
            moveType 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    // If moving and successfully dropped dont render the original
    if (isDragging && moveType === 'move') {
        return <div ref={drag} style={{ display: 'none' }} />;
    }
    // If clone type - ie dragging and dropping from dropdown tab
    return (
        <div ref={drag} 
              style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}>
            {children}
        </div>
    );
};

export default DraggableWrapper;