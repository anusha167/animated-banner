const barData = [
    { word: 'AI',           color: 'b-cyan',   dots: [1, 1, 1, 0] },
    { word: 'PYTHON',       color: 'b-amber',  dots: [1, 1, 1, 1] },
    { word: 'ML',           color: 'b-purple', dots: [1, 1, 0, 0] },
    { word: 'DATA',         color: 'b-green',  dots: [1, 1, 1, 1] },
    { word: 'NCP',          color: 'b-pink',   dots: [1, 1, 0, 0] },
    { word: 'DESIGN',       color: 'b-sky',    dots: [1, 1, 1, 0] },
    { word: 'AI',           color: 'b-cyan',   dots: [1, 1, 1, 0] },
    { word: 'NEURAL COMP',  color: 'b-purple', dots: [1, 1, 1, 0] },
    { word: 'DATA SCI',     color: 'b-green',  dots: [1, 1, 1, 0] },
    { word: 'PYTHON',       color: 'b-amber',  dots: [1, 1, 0, 0] },
    { word: 'ML',           color: 'b-pink',   dots: [1, 0, 0, 0] },
    { word: 'DESIGN',       color: 'b-sky',    dots: [1, 1, 0, 0] },
  ];
  
  function makeBar({ word, color, dots }) {
    const row = document.createElement('div');
    row.className = 'bar-row';
  
    const outer = document.createElement('div');
    outer.className = `bar-outer ${color}`;
  
    const inner = document.createElement('div');
    inner.className = 'bar-inner';
  
    const label = document.createElement('span');
    label.className = 'bar-word';
    label.textContent = word;
  
    inner.appendChild(label);
    outer.appendChild(inner);
  
    const dotWrap = document.createElement('div');
    dotWrap.className = 'bar-side-dots';
  
    dots.forEach(on => {
      const d = document.createElement('div');
      d.className = 'sdot' + (on ? ' lit' : '');
      dotWrap.appendChild(d);
    });
  
    row.appendChild(outer);
    row.appendChild(dotWrap);
    return row;
  }
  
  // build bars (duplicate for seamless loop)
  const scroll = document.getElementById('barsScroll');
  [...barData, ...barData].forEach(b => scroll.appendChild(makeBar(b)));
  
  // typewriter
  const text = "Hi, I'm Anusha";
  let i = 0;
  const el = document.getElementById('typed');
  
  function typeChar() {
    if (i < text.length) {
      el.textContent = text.slice(0, ++i);
      setTimeout(typeChar, i === 1 ? 500 : 70 + Math.random() * 50);
    }
  }
  
  setTimeout(typeChar, 700);
  