const calculateIdealSleepHours = age => {
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
  
  const getSleepHours = dayId => {
    const dayHours = parseFloat(document.getElementById(dayId).value);
    return dayHours || 0;
  };
  
  const getTotalSleepHours = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days.reduce((total, day) => total + getSleepHours(day), 0);
  };
  
  const displayResults = (idealSleepTime, totalSleepHours, sleepDebt) => {
    document.getElementById('ideal-sleep-time').innerText = `Ideal sleep time: ${idealSleepTime} hours`;
    document.getElementById('total-sleep-hours').innerText = `Total sleep hours: ${totalSleepHours} hours`;
  
    if (sleepDebt < 0) {
      document.getElementById('result').innerText = `You got ${-sleepDebt} more hours of sleep than needed.`;
    } else if (sleepDebt === 0) {
      document.getElementById('result').innerText = 'You got the perfect amount of sleep.';
    } else {
      document.getElementById('result').innerText = `You have a sleep debt of ${sleepDebt} hours. You should get more rest.`;
    }
  };
  
  document.getElementById('calculate-btn').addEventListener('click', () => {
    const userAge = parseInt(document.getElementById('user-age').value);
    const idealSleepTime = calculateIdealSleepHours(userAge);
    const totalSleepHours = getTotalSleepHours();
    const sleepDebt = idealSleepTime - totalSleepHours;
  
    displayResults(idealSleepTime, totalSleepHours, sleepDebt);
  });
  