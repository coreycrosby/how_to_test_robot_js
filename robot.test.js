const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const robot = newRobot(true, true, false)
  // act
  const stationNumber = station(robot)

  // assert
  expect(stationNumber).toBe(1);
}); 

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const robot = newRobot(true, false, true)
  // act
  const stationNumber = station(robot)
  // assert
  expect(stationNumber).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const robot = newRobot(true, false, false)
  // act
  const stationNumber = station(robot)
  // assert
  expect(stationNumber).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const robot = newRobot(false, false, false)

  // act
  const stationNumber = station(robot)

  // assert
  expect(stationNumber).toBe(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const robot = newRobot(false, false, false)

  // act
  const todo = prioritizeTasks(robot)

  // assert
  expect(todo).toBe(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const robot = newRobot(false, false, false)
  robot.todos = [1, 99, 0, 34]

  // act
  const todo = prioritizeTasks(robot)

  // assert
  expect(todo).toBe(99);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const robot = newRobot(false, true, false)
  robot.dayOff = 'Sunday';

  // act
  const testwork = isWorkday(robot, 'Sunday')

  // assert
  expect(testwork).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const robot = newRobot(true, true, true)
  robot.dayOff = 'Sunday'
  // act
  const testwork = isWorkday(robot, 'Monday')

  // assert
  expect(testwork).toBe(true);
});
