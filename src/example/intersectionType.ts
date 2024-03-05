type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag: () => {
    console.log('Dragging the text box...');
  },
  resize: () => {
    console.log('Resizing the text box...');
  },
};

// Simulate dragging and resizing
textBox.drag();
textBox.resize();
