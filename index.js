// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
    // TODO
  }

  console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
  console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
  console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
  console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
  console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');