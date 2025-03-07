
import React from 'react';

interface DebugRenderProps {
  componentName: string;
  children: React.ReactNode;
}

const DebugRender: React.FC<DebugRenderProps> = ({ componentName, children }) => {
  console.log(`Rendering ${componentName}`);
  
  return (
    <div className="debug-wrapper" data-component-name={componentName}>
      {children}
    </div>
  );
};

export default DebugRender;
