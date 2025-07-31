import { useEffect, useState } from 'react';
import Cursor from '../assets/arrow.png';


export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      let node = e.target;
      let interactive = false;
      while (node) {
        const tag = node.tagName?.toLowerCase();
        const role = node.getAttribute?.('role');
        const isClickableTag = ['a', 'button', 'input', 'textarea', 'select', 'label'].includes(tag);
        const hasPointerCursor = window.getComputedStyle(node).cursor === 'pointer';

        if (isClickableTag || hasPointerCursor || role === 'button' || role === 'link') {
          interactive = true;
          break;
        }

        node = node.parentElement;
      }

      setIsInteractive(interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isInteractive) return null;

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: '25px',
          height: '25px',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          backgroundImage: `url(${Cursor})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
}
