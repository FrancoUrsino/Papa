const container = document.querySelector('.about__container--2');


const showContainer = () => {
  const containerContent = document.createElement('div');
  containerContent.className = '.about__container--2--container'
  
  containerContent.innerHTML =
  `
  <div class="about__container--2--container--1">
    <button class="about__container--2--container--1--btn active" id="btn1">¿Qué hacemos?</button>
    <button class="about__container--2--container--1--btn" id="btn2">¿Qué utilizamos?</button>
  </div>
  <div class="about__container--2--container--2">
    <p class="about__container--2--container--2--text" id="text1" style="display: none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia, minima quidem dignissimos id numquam, at cupiditate explicabo nostrum fuga, quos porro modi.</p>
    <p class="about__container--2--container--2--text" id="text2">Resolución de problemas y Conflictos | Creativo | Gestión de Personas | Liderazgo | Trabajo en Equipo | Tolerancia a Trabajar Bajo Presión | Escucha Activa | Responsabilidad | Proactivo</p>
  </div>
  `
  container.append(containerContent);
  
  const btn2 = document.querySelector('#btn2');
  const btn1 = document.querySelector('#btn1');
  const hardText = document.querySelector('#text1');
  const softText = document.querySelector('#text2');


  const changeText2 = btn2.addEventListener('click',() =>{text2.style.display = "none", text1.style.display = "block", btn2.classList.add('active'), btn1.classList.remove('active')});
  const changeText1 = btn1.addEventListener('click',() =>{text1.style.display = "none", text2.style.display = "block", btn1.classList.add('active'), btn2.classList.remove('active')});

  
}
showContainer();