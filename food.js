import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodELement = document.createElement('div')
  foodELement.style.gridRowStart = food.y
  foodELement.style.gridColumnStart = food.x
  foodELement.classList.add('food')
  gameBoard.appendChild(foodELement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}