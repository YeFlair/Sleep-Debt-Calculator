const dailySleepHours = {
    Monday: 3,
    Tuesday: 3,
    Wednesday: 3,
    Thursday: 6,
    Friday: 6,
    Saturday: 6,
    Sunday: 3,
  };
  
  const getSleepHours = day => {
    const sleepInput = document.getElementById(day);
    const sleepHours = parseInt(sleepInput.value, 10);
    return sleepHours || 0;
  };
  
  const getActualSleepHours = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days.reduce((total, day) => total + getSleepHours(day), 0);
  };
  
  const getIdealSleepHours = age => {
    if (age >= 3 && age <= 5) {
      return 91;
    } else if (age >= 6 && age <= 12) {
      return 84;
    } else if (age >= 13 && age <= 18) {
      return 70;
    } else {
      return 49;
    }
  };
  
  const calculateSleepDebt = (actualSleepHours, idealSleepHours) => {
    const difference = idealSleepHours - actualSleepHours;
    if (difference > 0) {
      return `Your sleep debt is ${difference} hours.`;
    } else if (difference < 0) {
      return `You got more sleep than needed. Your sleep surplus is ${Math.abs(difference)} hours.`;
    } else {
      return "You got the perfect amount of sleep.";
    }
  };
  
  const displaySleepDebt = () => {
    const totalSleepHours = getActualSleepHours();
    const userAgeInput = document.getElementById("user-age");
    const userAge = parseInt(userAgeInput.value, 10);
    const idealSleepHours = getIdealSleepHours(userAge);
    const result = document.getElementById("result");
    const totalSleepHoursElement = document.getElementById("total-sleep-hours");
    const idealSleepTimeElement = document.getElementById("ideal-sleep-time"); // Add this line
  
    idealSleepTimeElement.innerText = `Ideal Sleep Time: ${idealSleepHours} hours`; // Add this line
    totalSleepHoursElement.innerText = `Total Sleep Hours: ${totalSleepHours}`;
    result.innerText = calculateSleepDebt(totalSleepHours, idealSleepHours);
  };
  
document.getElementById("calculate-btn").addEventListener("click", displaySleepDebt);