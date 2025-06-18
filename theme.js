const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
 
  //Typed js part for text change thing, pretty good

  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed', {
      strings: [        
        "Krishna",
        "Vengeance"     
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|', // You can change this to any character you prefer
    });
  });


 