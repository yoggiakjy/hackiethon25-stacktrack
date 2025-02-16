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

  export default DraggableWrapper;