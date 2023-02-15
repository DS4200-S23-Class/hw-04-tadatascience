// add a border to a point if the point is clicked
// if the point already has a border, remove it
// update the coordinates on display
// assumes grid is a square
function onPointClick(circleElement) {
  const frame = document.getElementById('frame');

  const frameHeight = frame.height.baseVal.value;

  const coordinateDisplay = document.getElementById('coordinates');
  coordinateDisplay.innerHTML = getCoordinates(circleElement, frameHeight, 100);

  if (circleElement.classList.contains('border')) {
    circleElement.classList.remove('border');
  } else {
    circleElement.classList.add('border');
  }
}

function getCoordinates(circleElement, height, scalar = 1) {
  const xCoordinate = circleElement.cx.baseVal.value / scalar;
  const yCoordinate = (height - circleElement.cy.baseVal.value) / scalar;

  return `(${xCoordinate}, ${yCoordinate})`;
}
