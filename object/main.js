//! Create an object that describes a rectangle (stores the coordinates of the top-left and bottom-right points)
//! and write the following functions for working with such an object:

const rectangle = {
  top_left: {
    x: 0,
    y: 0,
  },
  bottom_right: {
    x: 10,
    y: 10,
  },
};

//? 1. The function accepts a rectangle object and outputs information about it
//? (where which point is located).

function showRectangle(obj) {
  console.log(
    `Top-left point: (${rectangle.top_left.x}, ${rectangle.top_left.y})`
  );
  console.log(
    `Bottom-right point: (${rectangle.bottom_right.x}, ${rectangle.bottom_right.y})`
  );
}

showRectangle(rectangle);

//? 2. The function takes a rectangle object and returns it width.

function getRectangleWidth(obj) {
  return obj.bottom_right.x - obj.top_left.x;
}

console.log(`Rectangle width: ${getRectangleWidth(rectangle)}`);

//? 3. The function takes a rectangle object and returns it height.

function getRectangleHeight(obj) {
  return obj.bottom_right.y - obj.top_left.y;
}

console.log(`Rectangle height: ${getRectangleHeight(rectangle)}`);

//? 4. The function accepts a rectangle object and returns it area.

function getRectangleArea(obj) {
  return getRectangleWidth(obj) * getRectangleHeight(obj);
}

console.log(`Rectangle area: ${getRectangleArea(rectangle)}`);

//? 5. The function accepts a rectangle object and returns it perimeter.

function getRectanglePerimeter(obj) {
  return getRectangleWidth(obj) + getRectangleHeight(obj);
}

console.log(`Rectangle perimeter: ${getRectanglePerimeter(rectangle)}`);

//? 6. The function of changing the width of the rectangle. She accepts
//? rectangle object and how many units to change the width to.

function changeRectangleWidth(obj, unitsToChange) {
  const newWidth = getRectangleWidth(obj) + unitsToChange;
  obj.bottom_right.x = obj.top_left.x + newWidth;

  return newWidth;
}

console.log(`New rectangle width: ${changeRectangleWidth(rectangle, -2)}`);

//? 7. The function of changing the height of the rectangle. She accepts
//? rectangle object and how many units to change the height.

function changeRectangleHeight(obj, unitsToChange) {
  const newHeight = getRectangleHeight(obj) + unitsToChange;
  obj.bottom_right.y = obj.top_left.y + newHeight;

  return newHeight;
}

console.log(`New rectangle height: ${changeRectangleHeight(rectangle, 5)}`);

//? 8. The function of changing the width and height of the rectangle. She
//? takes a rectangle object and two values ​​to modify width and height.

function changeRectangleSize(obj, widthChange, heightChange) {
  const newWidth = getRectangleWidth(obj) + widthChange;
  obj.bottom_right.x = obj.top_left.x + newWidth;

  const newHeight = getRectangleHeight(obj) + heightChange;
  obj.bottom_right.y = obj.top_left.y + newHeight;

  return {
    newWidth,
    newHeight,
  };
}

console.log(
  `New rectangle size (width, height): (${
    changeRectangleSize(rectangle, 5, 10).newWidth
  }, ${changeRectangleSize(rectangle, 5, 10).newHeight})`
);

//? 9. The function of shifting a rectangle along the X axis. It takes
//? rectangular object and how many units to move it.

function shiftRectangleX(obj, unitsToMove) {
  obj.top_left.x += unitsToMove;
  obj.bottom_right.x += unitsToMove;
}

shiftRectangleX(rectangle, 2);
console.log("Updated rectangle (X axis):");
showRectangle(rectangle);

//? 10. The function of shifting a rectangle along the Y axis. It takes
//? rectangular object and how many units to move it.

function shiftRectangleY(obj, unitsToMove) {
  obj.top_left.y += unitsToMove;
  obj.bottom_right.y += unitsToMove;
}

shiftRectangleY(rectangle, 5);
console.log("Changed rectangle (Y axis):");
showRectangle(rectangle);

//? 11. The function to shift a rectangle along the X and Y axes.
//? It accepts a rectangle object and two values: the shift along
//? the X axis and shift along the Y axis.

function shiftRectangle(obj, unitsToMove) {
  obj.top_left.x += unitsToMove;
  obj.bottom_right.x += unitsToMove;
  obj.top_left.y += unitsToMove;
  obj.bottom_right.y += unitsToMove;
}

shiftRectangle(rectangle, 5);
console.log("Changed rectangle:");
showRectangle(rectangle);

//? 12. Function to check if a point is insiderectangle It accepts
//? a rectangle object and point coordinates.

function isPointInsideRectangle(obj, pointX, pointY) {
  return (
    pointX >= obj.top_left.x &&
    pointX <= obj.bottom_right.x &&
    pointY >= obj.top_left.y &&
    pointY <= obj.bottom_right.y
  );
}

console.log(
  `Is point inside rectangle: ${isPointInsideRectangle(rectangle, 8, 22)}`
);
