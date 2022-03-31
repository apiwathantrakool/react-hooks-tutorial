import React from 'react';
import ReactDOM from 'react-dom';

const PortalUI = () => <div>{'Hello, I am a portal'}</div>;

export default function Portal() {
  return (
    <div>
      {ReactDOM.createPortal(
        // Mostly uses for modal overlay.
        <PortalUI />,
        document.getElementById('portal-gate')
      )}
    </div>
  );
}
