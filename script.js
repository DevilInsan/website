// Custom Cursor Logic
document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.getElementById('custom-cursor');
  const cursorCircle = document.getElementById('cursor-circle');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
    cursorCircle.style.left = `${e.clientX}px`;
    cursorCircle.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', () => {
    customCursor.style.width = '15px';
    customCursor.style.height = '15px';
    cursorCircle.style.borderWidth = '3px';
  });

  document.addEventListener('mouseup', () => {
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';
    cursorCircle.style.borderWidth = '2px';
  });

  // Hover effects for buttons and links
  const hoverElements = document.querySelectorAll('button, a, .upload-label');
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      customCursor.style.transform = 'scale(1.5)';
      cursorCircle.style.transform = 'scale(1.2)';
    });

    element.addEventListener('mouseleave', () => {
      customCursor.style.transform = 'scale(1)';
      cursorCircle.style.transform = 'scale(1)';
    });
  });
});