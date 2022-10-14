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

  let element1 = document.getElementById('image2-1');
  let element2 = document.getElementById('image2-2');
  let element3 = document.getElementById('image3-1');
  let element4 = document.getElementById('network-z-drive');
  let element5 = document.getElementById('image4-2');
  let element6 = document.getElementById('image5-1');
  let element7 = document.getElementById('image6-1');
  //list menu
  let elementsName = ['home-nav', 'company-nav', 'product-nav', 'contact-nav'];
  //home part1
  if (document.documentElement.scrollTop < 200) {
    onActiveMenu('home-nav');
  }
  //company part2
  else if (
    document.documentElement.scrollTop >= 400 &&
    document.documentElement.scrollTop < 1000
  ) {
    onActiveMenu('company-nav');
    element1.classList.add('fade-in-image');
  }
  //product part3
  else if (
    document.documentElement.scrollTop > 1000 &&
    document.documentElement.scrollTop < 2200
  ) {
    onActiveMenu('product-nav');
    element2.classList.add('fade-in-image');
  }
  //contact part4
  else if (
    document.documentElement.scrollTop > 2200 &&
    document.documentElement.scrollTop < 3200
  ) {
    onActiveMenu('contact-nav');
    element3.classList.add('fade-in-image');
    //part5
  } else if (
    document.documentElement.scrollTop > 3200 &&
    document.documentElement.scrollTop < 3900
  ) {
    //part6
    element4.classList.add('fade-in-image');
    element5.classList.add('fade-in-image');
    //part7
  } else if (
    document.documentElement.scrollTop > 3900 &&
    document.documentElement.scrollTop < 5000
  ) {
    element6.classList.add('fade-in-image');
    //part7
  } else if (
    document.documentElement.scrollTop > 5000 &&
    document.documentElement.scrollTop < 6000
  ) {
    element7.classList.add('fade-in-image');
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
    //removeComponent();
    //addFont();
  } else {
    //addComponent();
    //removeFont();
  }

  if (window.innerWidth < 1200) {
    //addBackGround();
  }
  if (window.innerWidth < 991) {
    addContentCommon();
  }

  if (window.innerWidth >= 1200) {
    //removeBackGround();
  }
  if (window.innerWidth > 991) {
    removeContentCommon();
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
const addContentCommon = () => {
  addLogo();
  let element1 = document.getElementById('text-context-service-wide');
  let element2 = document.getElementById('text-context-service-mobile');
  let element3 = document.getElementById('text-context-point-mobile');
  let element4 = document.getElementById('text-context-wallet-wide');
  let element5 = document.getElementById('text-context-wallet-mobile');
  //let element6 = document.getElementById('network-z-drive');
  let element7 = document.getElementById('id-content-1');

  element1.innerHTML = '';
  element4.innerHTML = '';
  element4.innerHTML.p = '';
  element2.classList.add('text-center', 'content-text');
  element3.classList.add('text-center', 'content-text');
  element2.style.fontSize = '0.65rem';
  element3.style.fontSize = '0.65rem';
  element5.style.fontSize = '0.65rem';
  element7.style.top = '10rem';
  element2.innerHTML =
    'กระจายความเป็นเจ้าของ<br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 1.7rem;">ให้ผู้ใช้บริการแพลตฟอร์ม</b><br>ร่วมสนุกกับกิจกรรม และสร้างรายได้ จากการถือครองพื้นจัดเก็บในยุคดิจิทัล <br> ตลอด 365 วัน';
  element3.innerHTML =
    'ร่วมสนุกกิจกรรมประจำแพลตฟอร์ม <br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 1.7rem;">สะสม Point รับของรางวัล <br></b>และผลิตภัณฑ์ต่างๆของบริษัท';
  element5.innerHTML =
    'Wallet ช่องทางการชำระเงินที่ง่าย <br> <b class="fs-1"style="color:rgba(90, 142, 248, 1)">สะดวก ในการเข้าใช้แพลตฟอร์ม </b> <p class="fs-3">และเชื่อมต่อกับบริการอื่นๆ';
  //element6.src = '';
};

const removeContentCommon = () => {
  removeLogo();
  let element1 = document.getElementById('text-context-service-wide');
  let element2 = document.getElementById('text-context-service-mobile');
  let element3 = document.getElementById('text-context-point-mobile');
  let element4 = document.getElementById('text-context-wallet-wide');
  let element5 = document.getElementById('text-context-wallet-mobile');
  //let element6 = document.getElementById('network-z-drive');
  let element7 = document.getElementById('id-content-1');
  element1.classList.remove('text-center');
  element2.classList.remove('text-center');
  element3.classList.remove('text-center');
  element2.innerHTML = '';
  element5.innerHTML = '';
  element1.innerHTML =
    'กระจายความเป็นเจ้าของ<br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;">ให้ผู้ใช้บริการแพลตฟอร์ม</b><br>ร่วมสนุกกับกิจกรรม และสร้างรายได้ จากการถือครองพื้นจัดเก็บในยุคดิจิทัล<br> ตลอดอายุสัญญา 365 วัน';
  element3.innerHTML =
    'ร่วมสนุกกิจกรรมประจำแพลตฟอร์ม <br><b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;">สะสม Point รับของรางวัล <br></b>และผลิตภัณฑ์ต่างๆของบริษัท';
  element4.innerHTML =
    'Wallet ช่องทางการชำระเงินที่ง่าย <br> <b class="fs-1"style="color:rgba(90, 142, 248, 1)">สะดวก ในการเข้าใช้แพลตฟอร์ม </b> <p class="fs-3">และเชื่อมต่อกับบริการอื่นๆ';
  element1.style.lineHeight = '4rem';
  element3.style.lineHeight = '4rem';

  //element6.src = './images/part-4/p4.png';
  element7.style.top = '15rem';
};

const addLogo = () => {
  let logo = document.getElementById('img-logo');
  logo.style.marginLeft = '00px';
};

const removeLogo = () => {
  let logo = document.getElementById('img-logo');
  logo.style.marginLeft = '60px';
};
