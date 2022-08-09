const dataSet = [
  {
    startHour: 0,
    endHour: 4,
    message: "Good night",
  },
  {
    startHour: 5,
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
    endHour: 24,
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
