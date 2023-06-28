let numers = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Z%C3%A9ro.svg/120px-Z%C3%A9ro.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/120px-Un1.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/120px-Deux.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/120px-Trois.svg.png'
  ];
  let num = 0
  
  function next(volgende) {
    num = (num + volgende + numers.length) %numers.length
    document.getElementById('my-image').src = numers[num];
  }