// Elements
const container = document.getElementById('container');
const flexItem3 = container.children[2];

// Container properties
const flexDirection = document.getElementById('flex-direction');
const flexWrap = document.getElementById('flex-wrap');
const justifyContent = document.getElementById('justify-content');
const alignItems = document.getElementById('align-items');
const alignContent = document.getElementById('align-content');
const gap = document.getElementById('gap');

// Item properties
const flexGrow = document.getElementById('flex-grow');
const flexShrink = document.getElementById('flex-shrink');
const flexBasis = document.getElementById('flex-basis');
const alignSelf = document.getElementById('align-self');
const order = document.getElementById('order');

// Code display elements
const codeDirection = document.getElementById('code-direction');
const codeWrap = document.getElementById('code-wrap');
const codeJustify = document.getElementById('code-justify');
const codeAlignItems = document.getElementById('code-align-items');
const codeAlignContent = document.getElementById('code-align-content');
const codeGap = document.getElementById('code-gap');

const codeGrow = document.getElementById('code-grow');
const codeShrink = document.getElementById('code-shrink');
const codeBasis = document.getElementById('code-basis');
const codeAlignSelf = document.getElementById('code-align-self');
const codeOrder = document.getElementById('code-order');

// Description elements
const propertyDescription = document.getElementById('property-description');
const itemDescription = document.getElementById('item-description');

// Add flex item highlighting
flexItem3.style.border = '2px dashed #805ad5';
flexItem3.textContent = '3 (modified)';

// Description objects
const descriptions = {
  'flex-direction': {
    'row': 'Items are placed in a row, from left to right.',
    'row-reverse': 'Items are placed in a row, from right to left.',
    'column': 'Items are placed in a column, from top to bottom.',
    'column-reverse': 'Items are placed in a column, from bottom to top.'
  },
  'flex-wrap': {
    'nowrap': 'All items will be on a single line.',
    'wrap': 'Items wrap onto multiple lines from top to bottom.',
    'wrap-reverse': 'Items wrap onto multiple lines from bottom to top.'
  },
  'justify-content': {
    'flex-start': 'Items are packed at the start of the main axis.',
    'flex-end': 'Items are packed at the end of the main axis.',
    'center': 'Items are centered along the main axis.',
    'space-between': 'Items are evenly distributed with the first item at the start and the last item at the end.',
    'space-around': 'Items are evenly distributed with equal space around them.',
    'space-evenly': 'Items are distributed so that the spacing between any two items is equal.'
  },
  'align-items': {
    'stretch': 'Items stretch to fill the container on the cross axis.',
    'flex-start': 'Items are placed at the start of the cross axis.',
    'flex-end': 'Items are placed at the end of the cross axis.',
    'center': 'Items are centered along the cross axis.',
    'baseline': 'Items are aligned so that their baselines align.'
  },
  'align-content': {
    'stretch': 'Lines stretch to fill the container on the cross axis.',
    'flex-start': 'Lines are packed at the start of the cross axis.',
    'flex-end': 'Lines are packed at the end of the cross axis.',
    'center': 'Lines are centered along the cross axis.',
    'space-between': 'Lines are evenly distributed with the first line at the start and the last line at the end.',
    'space-around': 'Lines are evenly distributed with equal space around them.'
  },
  'gap': {
    '0': 'No gap between flex items.',
    '5px': 'Small gap of 5px between flex items.',
    '10px': 'Medium gap of 10px between flex items.',
    '20px': 'Large gap of 20px between flex items.',
    '30px': 'Extra large gap of 30px between flex items.'
  },
  'flex-grow': {
    '0': 'The item will not grow to fill available space.',
    '1': 'The item will grow to fill available space equally with other items with flex-grow: 1.',
    '2': 'The item will grow to fill available space twice as much as items with flex-grow: 1.',
    '3': 'The item will grow to fill available space three times as much as items with flex-grow: 1.'
  },
  'flex-shrink': {
    '0': 'The item will not shrink if there is not enough space.',
    '1': 'The item will shrink equally with other items if there is not enough space.',
    '2': 'The item will shrink twice as much as items with flex-shrink: 1.',
    '3': 'The item will shrink three times as much as items with flex-shrink: 1.'
  },
  'flex-basis': {
    'auto': 'The item size is based on its content.',
    '0': 'The item has no initial size, will depend entirely on flex-grow.',
    '100px': 'The item has a fixed initial size of 100px.',
    '200px': 'The item has a fixed initial size of 200px.',
    '50%': 'The item has an initial size that is 50% of the container.'
  },
  'align-self': {
    'auto': 'The item inherits the align-items value from its parent.',
    'flex-start': 'The item is placed at the start of the cross axis.',
    'flex-end': 'The item is placed at the end of the cross axis.',
    'center': 'The item is centered along the cross axis.',
    'stretch': 'The item stretches to fill the container on the cross axis.',
    'baseline': 'The item is aligned so that its baseline aligns with other baselines.'
  },
  'order': {
    '0': 'Default order (follows source order).',
    '-1': 'The item appears before other items.',
    '1': 'The item appears after items with order 0.',
    '2': 'The item appears after items with order 1.',
    '3': 'The item appears after items with order 2.'
  }
};

// Update container properties
function updateContainer() {
  container.style.flexDirection = flexDirection.value;
  container.style.flexWrap = flexWrap.value;
  container.style.justifyContent = justifyContent.value;
  container.style.alignItems = alignItems.value;
  container.style.alignContent = alignContent.value;
  container.style.gap = gap.value;
  
  // Update code display
  codeDirection.textContent = flexDirection.value;
  codeWrap.textContent = flexWrap.value;
  codeJustify.textContent = justifyContent.value;
  codeAlignItems.textContent = alignItems.value;
  codeAlignContent.textContent = alignContent.value;
  codeGap.textContent = gap.value;
  
  // Update description
  updatePropertyDescription();
}

// Update item properties
function updateItem() {
  flexItem3.style.flexGrow = flexGrow.value;
  flexItem3.style.flexShrink = flexShrink.value;
  flexItem3.style.flexBasis = flexBasis.value;
  flexItem3.style.alignSelf = alignSelf.value;
  flexItem3.style.order = order.value;
  
  // Update code display
  codeGrow.textContent = flexGrow.value;
  codeShrink.textContent = flexShrink.value;
  codeBasis.textContent = flexBasis.value;
  codeAlignSelf.textContent = alignSelf.value;
  codeOrder.textContent = order.value;
  
  // Update description
  updateItemDescription();
}

function updatePropertyDescription() {
  const property = document.activeElement.id;
  const value = document.activeElement.value;
  
  if (descriptions[property] && descriptions[property][value]) {
    propertyDescription.innerHTML = `<strong>${property}: ${value}</strong> - ${descriptions[property][value]}`;
  }
}

function updateItemDescription() {
  const property = document.activeElement.id;
  const value = document.activeElement.value;
  
  if (descriptions[property] && descriptions[property][value]) {
    itemDescription.innerHTML = `<strong>${property}: ${value}</strong> - ${descriptions[property][value]}`;
  }
}

// Add event listeners to all selects
const allSelects = document.querySelectorAll('select');
allSelects.forEach(select => {
  select.addEventListener('change', function() {
    if (['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'gap'].includes(this.id)) {
      updateContainer();
    } else {
      updateItem();
    }
  });
  
  select.addEventListener('focus', function() {
    if (['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'gap'].includes(this.id)) {
      propertyDescription.innerHTML = `<strong>${this.id}: ${this.value}</strong> - ${descriptions[this.id][this.value]}`;
    } else {
      itemDescription.innerHTML = `<strong>${this.id}: ${this.value}</strong> - ${descriptions[this.id][this.value]}`;
    }
  });
});

// Initialize with default values
updateContainer();
updateItem();