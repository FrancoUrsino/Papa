const container = document.querySelector('.about__container--2');


const showContainer = () => {
  const containerContent = document.createElement('div');
  containerContent.className = '.about__container--2--container'
  
  containerContent.innerHTML =
  `
  <div class="about__container--2--container--container">
    <div class="about__container--2--container--container--1">
      <button class="about__container--2--container--container--1--btn active" id="btn1">¿Qué hacemos? <br> <i class="fa-sharp fa-solid fa-block-brick"></i> <i class="fa-solid fa-helmet-safety"></i></button>
      <button class="about__container--2--container--container--1--btn" id="btn2">¿Qué utilizamos? <br> <i class="fa-solid fa-hammer"></i></button>
    </div>
    <div class="about__container--2--container--container--2">
      <p class="about__container--2--container--container--2--text" id="text1" style="display: none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia, minima quidem dignissimos id numquam, at cupiditate explicabo nostrum fuga, quos porro modi.</p>
      <p class="about__container--2--container--container--2--text" id="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia, minima quidem dignissimos id numquam, at cupiditate explicabo nostrum fuga, quos porro modi. quidem dignissimos id numquam, at cupiditate explicabo nostrum fuga, quos porro modi.</p>
    </div>
  </div>
  `
  container.append(containerContent);
  
  const btn2 = document.querySelector('#btn2');
  const btn1 = document.querySelector('#btn1');
  const text1 = document.querySelector('#text1');
  const text2 = document.querySelector('#text2');


  const changeText2 = btn2.addEventListener('click',() =>{text2.style.display = "none", text1.style.display = "flex", btn2.classList.add('active'), btn1.classList.remove('active')});
  const changeText1 = btn1.addEventListener('click',() =>{text1.style.display = "none", text2.style.display = "flex", btn1.classList.add('active'), btn2.classList.remove('active')});

  
}
showContainer();