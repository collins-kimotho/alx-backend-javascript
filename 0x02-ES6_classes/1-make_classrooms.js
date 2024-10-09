// Import the ClassRoom class
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // Create 3 instances of ClassRoom with different sizes
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return them in an array
  return [room1, room2, room3];
}
