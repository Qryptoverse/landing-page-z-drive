//active with menu bar
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  const onActiveMenu = (name) => {
    elementsName.forEach((item) => {
      let element = document.getElementById(item);
      if (item == name) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };

  //list menu
  let elementsName = ['home-nav', 'company-nav', 'product-nav', 'contact-nav'];
  //home
  if (document.documentElement.scrollTop < 881) {
    onActiveMenu('home-nav');
  }
  //company
  else if (
    document.documentElement.scrollTop > 880 &&
    document.documentElement.scrollTop < 1683
  ) {
    onActiveMenu('company-nav');
  }
  //product
  else if (
    document.documentElement.scrollTop > 1683 &&
    document.documentElement.scrollTop < 2000
  ) {
    onActiveMenu('product-nav');
  }
  //contact
  else if (document.documentElement.scrollTop > 2000) {
    onActiveMenu('contact-nav');
  }
};
//size screnn for change
window.addEventListener('resize', () => {
  responsive();
});

window.onload = () => {
  responsive();
};

const responsive = () => {
  if (window.innerWidth < 1400) {
    removeComponent();
    addFont();
  } else {
    addComponent();
    removeFont();
  }

  if (window.innerWidth < 1200) {
    addBackGround();
  }
  if (window.innerWidth < 991) {
    addContentFPPT();
  }

  if (window.innerWidth >= 1200) {
    removeBackGround();
  }
  if (window.innerWidth > 991) {
    removeContentFPPT();
  }
};
const removeComponent = () => {
  //logic remove image component
  let element = document.getElementsByClassName('component');
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add('hidden-component');
  }
};

const addComponent = () => {
  //logic add image component
  let element = document.getElementsByClassName('component');
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove('hidden-component');
  }
};

const addFont = () => {
  let element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-2', 'text-center');
  element1.classList.remove('content-text-header-1');

  //remove  bracket
  let bracket = document.getElementsByClassName('bracket');
  for (let i = 0; i < bracket.length; i++) {
    bracket[i].innerHTML = '';
  }
  // tab digital
  let element2 = document.getElementById('digital');
  element2.classList.add('d-block');

  //logic text content
  let element3 = document.getElementById('content-home');
  element3.innerHTML =
    ' พื้นที่จัดเก็บข้อมูล ให้กับแพลตฟอร์ม<br>หรือแอพพลิเคชั่น ตามความต้องการ <br>ของผู้ใช้งานกลุ่มเฉพาะ ปลดล็อคข้อจำกัดต่าง ๆ<br>ด้วยเทคโนโลยีบริหารที่มีความยืดหยุ่น รองรับการ<br>ใช้งาน  เพิ่มประสิทธิภาพการทำงานสูงสุดและความ<br>ปลอดภัยที่เชื่อมโยงผู้ใช้งานเข้าด้วยกันได้อย่าง<br>ไร้รอยต่อตลอด 24 ชม.';
};

const removeFont = () => {
  //logic text
  let element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-1');
  element1.classList.remove('content-text-header-2', 'text-center');
  let bracket = document.getElementsByClassName('bracket');

  //add bracket
  bracket[0].innerHTML = '{';
  bracket[1].innerHTML = '}';

  // tab digital
  let element2 = document.getElementById('digital');
  element2.classList.remove('d-block');

  //logic text content
  let element3 = document.getElementById('content-home');
  element3.innerHTML =
    ' พื้นที่จัดเก็บข้อมูล ให้กับแพลตฟอร์ม หรือแอพพลิเคชั่น <br> ตามความต้องการ ของผู้ใช้งานกลุ่มเฉพาะ ปลดล็อคข้อจำกัดต่าง ๆ<br>ด้วยเทคโนโลยีบริหารที่มีความยืดหยุ่น รองรับการใช้งาน<br>เพิ่มประสิทธิภาพการทำงานสูงสุดและความปลอดภัย<br>ที่เชื่อมโยงผู้ใช้งานเข้าด้วยกันได้อย่างไร้รอยต่อตลอด 24 ชม.';
};

const addBackGround = () => {
  //logic change background
  document.getElementById('bgId-3').src =
    './images/part-3-mobile/bg3-mobile.png';
  document.getElementById('bgId-1').src = './images/part-1/Group 1.png';
  let element1 = document.getElementById('bgId-3');
  let element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-2');
  element1.classList.remove('content-bg-img-1');
  element2.classList.add('position-mobile');
  element2.classList.remove('top-50', 'mt-5', 'pt-5');
};

const removeBackGround = () => {
  //logic change background
  document.getElementById('bgId-3').src = './images/part-3/bgpart3.png';
  document.getElementById('bgId-1').src = './images/part-1/bg1.png';
  let element1 = document.getElementById('bgId-3');
  let element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-1');
  element1.classList.remove('content-bg-img-2');
  element2.classList.add('top-50', 'mt-5', 'pt-5');
  element2.classList.remove('position-mobile');
};
// reverse component at content fppt
const addContentFPPT = () => {
  let element1 = document.getElementById('text-context-fppt-wide');
  let element2 = document.getElementById('text-context-fppt-mobile');
  let element3 = document.getElementById('text-context-abbc-mobile');
  element1.innerHTML = '';
  element2.classList.add('text-center', 'content-text');
  element3.classList.add('text-center');
  element2.style.fontSize = '0.75rem';
  element3.style.fontSize = '0.75rem';
  element2.classList.remove('fs-5');
  element3.classList.remove('fs-5');
  element2.innerHTML =
    'คอร์ แอสเซท มุ่งเน้นบริหารจัดการดิจิตอลแอสเซท<br> <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 0.8rem;">สร้างระบบด้วยแนวคิด FPPT</b><br>เพื่อจัดการบริหารธุรกิจและส่งเสริมการสร้างผลิตภัณฑ์<br>ในเครือของบริษัทคอร์ แอสเซท';
  element3.innerHTML =
    'ด้วยการนำ <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 0.8rem;">เทคโนโลยี ABBC<br></b>เข้ามาบริหารจัดการธุรกิจ<br>ให้เกิดการ Sharing Economic บน Eco system ของตนเอง เพื่อสร้างสังคม<br>แห่งการแบ่งปันพร้อมทั้งต่อยอดธุรกิจ<br>ในหลากหลายแพลตฟอร์ม ยกระดับธุรกิจให้เติบโต<br>และสร้างรากฐานที่มั่นคง เตรียมศักยภาพความพร้อม<br>ในการแข่งขันที่เพิ่มขึ้นในอนาคต';
};

const removeContentFPPT = () => {
  let element1 = document.getElementById('text-context-fppt-wide');
  let element2 = document.getElementById('text-context-fppt-mobile');
  let element3 = document.getElementById('text-context-abbc-mobile');
  element1.classList.remove('text-center');
  element2.classList.remove('text-center', 'content-text');
  element3.classList.remove('text-center');
  element2.classList.add('fs-5');
  element3.classList.add('fs-5');
  element2.innerHTML = '';
  element1.innerHTML =
    ' คอร์ แอสเซท มุ่งเน้นบริหารจัดการดิจิตอลแอสเซท<br>   <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 1.5rem;">สร้างระบบด้วยแนวคิด FPPT </b><br>เพื่อจัดการบริหารธุรกิจและส่งเสริมการสร้างผลิตภัณฑ์<br>ในเครือของบริษัทคอร์ แอสเซท';
  element3.innerHTML =
    'ด้วยการนำ <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 1.5rem;">เทคโนโลยี ABBC</b><br>เข้ามาบริหารจัดการธุรกิจให้เกิดการ Sharing Economic บน Eco system<br>ของตนเอง เพื่อสร้างสังคมแห่งการแบ่งปัน<br>พร้อมทั้งต่อยอดธุรกิจในหลากหลายแพลตฟอร์ม ยกระดับธุรกิจให้เติบโต<br>และสร้างรากฐานที่มั่นคง เตรียมศักยภาพความพร้อมในการแข่งขัน<br>ที่เพิ่มขึ้นในอนาคต';
};
