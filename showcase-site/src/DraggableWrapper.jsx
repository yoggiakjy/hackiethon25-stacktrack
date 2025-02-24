import { useDrag } from 'react-dnd';

const DraggableWrapper = ({ children, type, itemData, moveType = 'clone' }) => {

    const componentType = children?.type?.displayName ||
                         children?.type?.name ||
                         'UnknownComponent';
    
    // Serialize component props, filtering out functions and complex objects
    const serializableProps = Object.entries(children.props).reduce((acc, [key, value]) => {
        if (typeof value !== 'function' && typeof value !== 'object') {
            acc[key] = value;
        }
        return acc;
    }, {});

    const [{ isDragging }, drag] = useDrag({
        type: type,
        item: {
            ...itemData,
            component: children.type,
            componentType,
            props: serializableProps,
            moveType,
            originalProps: children.props // Keep original props for reference
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    return (
        <div 
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                display: (isDragging && moveType === 'move') ? 'none' : 'block'
            }}
        >
            {children}
        </div>
    );
};

export default DraggableWrapper;