const dataSet = [
  {
    startHour: 23,
    endHour: 24,
    message: "Good night",
  },
  {
    startHour: 0,
    endHour: 5,
    message: "Good night",
  },
  {
    startHour: 6,
    endHour: 11,
    message: "Good morning",
  },
  {
    startHour: 12,
    endHour: 17,
    message: "Good afternoon",
  },
  {
    startHour: 18,
    endHour: 22,
    message: "Good evening",
  },
];

const hourMessage = () => {
  const hr = new Date().getHours();
  let message;
  dataSet.forEach((set) => {
    if (hr >= set.startHour && hr <= set.endHour) {
      message = set.message;
    }
  });
  return message;
};
if (typeof module !== "undefined" && module.exports) {
  module.exports = hourMessage;
}
