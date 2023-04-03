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
  
  const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep!";
    } else if (actualSleepHours > idealSleepHours) {
      return "You got more sleep than needed.";
    } else {
      return "You should get more rest.";
    }
  };
  
  const displaySleepDebt = () => {
    const result = document.getElementById("result");
    result.innerText = calculateSleepDebt();
  };
  
  document.getElementById("calculate-btn").addEventListener("click", displaySleepDebt);
  