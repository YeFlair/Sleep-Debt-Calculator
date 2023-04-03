const dailySleepHours = {
    Monday: 3,
    Tuesday: 3,
    Wednesday: 3,
    Thursday: 6,
    Friday: 6,
    Saturday: 6,
    Sunday: 3,
  };
  
  const sleepHours = day => dailySleepHours[day] || 0;
  
  const getActualSleepHours = () => {
    let totalHours = 0;
    for (const day in dailySleepHours) {
      totalHours += sleepHours(day);
    }
    return totalHours;
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
    const resultElement = document.getElementById("result");
    resultElement.innerText = calculateSleepDebt();
  };
  
  document.getElementById("calculate-btn").addEventListener("click", displaySleepDebt);
  