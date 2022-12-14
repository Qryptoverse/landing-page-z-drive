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
  let element1v2 = document.getElementById('text-context-service-wide');
  let element1v3 = document.getElementById('text-context-service-mobile');
  let element2 = document.getElementById('image2-2');
  let element2v2 = document.getElementById('image2-2v2');
  let element3 = document.getElementById('image3-1');
  let element3v2 = document.getElementById('image3-1v2');
  let element3v3 = document.getElementById('text-context-wallet-wide');//text animation pc
  let element3v4 = document.getElementById('text-context-wallet-mobile');//text animation mobile
  let element4 = document.getElementById('network-z-drive');
  let element5 = document.getElementById('image4-2');
  let element6 = document.getElementById('image5-1');
  let element6v2 = document.getElementById('image5-1v2');
  let element7 = document.getElementById('image6-1');
  //list menu
  let elementsName = ['home-nav', 'product-nav', 'campain-nav', 'contact-nav'];
  //home part1
  if (document.documentElement.scrollTop < 70) {
    onActiveMenu('home-nav');
  }
  //company part2
  else if (
    document.documentElement.scrollTop >= 100 &&
    document.documentElement.scrollTop < 1200
  ) {
    onActiveMenu('product-nav');
    element1.classList.add('fade-in-image');
	element1v2.classList.add('fade-in-image5');
	element1v3.classList.add('fade-in-image5');
  }
  //product part3
  else if (
    document.documentElement.scrollTop >= 1200 &&
    document.documentElement.scrollTop < 1850
  ) {
    onActiveMenu('campain-nav');
    element2.classList.add('fade-in-image2');
	element2v2.classList.add('fade-in-image5');
	element3v2.classList.add('fade-in-image5');
  }
  //contact part4
  else if (
    document.documentElement.scrollTop > 1850 &&
    document.documentElement.scrollTop < 3200
  ) {
    onActiveMenu('contact-nav');
    element3.classList.add('fade-in-image3');
	element3v3.classList.add('fade-in-image5');
	element3v4.classList.add('fade-in-image5');
	//part6
    element4.classList.add('fade-in-image');
	//?????????
    //part5
  } else if (
    document.documentElement.scrollTop > 3200 &&
    document.documentElement.scrollTop < 3900
  ) {
    element5.classList.add('fade-in-image');
    //part7
  } else if (
    document.documentElement.scrollTop > 3900 &&
    document.documentElement.scrollTop < 5000
  ) {
    element6.classList.add('fade-in-image4');
	element6v2.classList.add('fade-in-image5');
    //part7
  } else if (
    document.documentElement.scrollTop > 5000 &&
    document.documentElement.scrollTop < 6000
  ) {
    element7.classList.add('fade-in-image4');
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
    ' ???????????????????????????????????????????????????????????? ?????????????????????????????????????????????<br>???????????????????????????????????????????????? ?????????????????????????????????????????? <br>?????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????? ???<br>???????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????<br>??????????????????  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>??????????????????????????????????????? 24 ??????.';
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
    ' ???????????????????????????????????????????????????????????? ????????????????????????????????????????????? ???????????????????????????????????????????????? <br> ?????????????????????????????????????????? ?????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????? ???<br>???????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????<br>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 24 ??????.';
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
  let element8 = document.getElementById('id-bg1');

  element1.innerHTML = '';
  element4.innerHTML = '';
  element4.innerHTML.p = '';
  element2.classList.add('text-center', 'content-text');
  element3.classList.add('text-center', 'content-text');
  element2.style.fontSize = '0.65rem';
  element3.style.fontSize = '0.65rem';
  element5.style.fontSize = '0.65rem';
  element7.style.top = '10rem';
  element7.style.paddingTop = '60px';
  element2.innerHTML =
    '????????????????????????????????????????????????????????????????????????<br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 1.7rem;">????????????????????????????????????????????????????????????????????????</b><br>??????????????????????????????????????????????????? ??????????????????????????? ???????????????????????????<br> ????????????????????????????????????????????????????????????????????????????????????????????? 365 ?????????';
  element3.innerHTML =
    '?????????????????????????????????????????????????????????????????? <br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 1.7rem;">???????????? Point ???????????????????????????????????? <br></b>?????????????????????????????????????????????????????? ???????????????????????????*';
  element5.innerHTML =
    '<span class="fs-3" style="color: rgb(120, 120, 120); font-size: 0.65rem;">Wallet ????????????????????????????????????????????????????????????????????????????????????</span> <br> <b class="fs-1"style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;">??????????????? ??????????????????????????????????????????????????????????????? </b> <p class="fs-3" style="color: rgb(120, 120, 120); font-size: 0.65rem;">????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //element6.src = '';

  element8.src = './images/part-1/BG1-m.png';
  

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
  let element8 = document.getElementById('id-bg1');
  element1.classList.remove('text-center');
  element2.classList.remove('text-center');
  element3.classList.remove('text-center');
  element2.innerHTML = '';
  element5.innerHTML = '';
  //?????????????????????
  
  var heightcookieza007;
  heightcookieza007 = window.innerHeight;
  if(heightcookieza007 >= 700 && heightcookieza007 <= 800 || heightcookieza007 >=540 && heightcookieza007 <=600){
	  //???????????????????????????????????????
	  element1.innerHTML =
    '<font style="line-height: 3rem;font-size: 18px;">????????????????????????????????????????????????????????????????????????</font><br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 28px;white-space: nowrap;">????????????????????????????????????????????????????????????????????????</b><br><font style="font-size: 18px;white-space: nowrap;">??????????????????????????????????????????????????? ??????????????????????????? ???????????????????????????</font><font style="font-size: 18px;white-space: nowrap;">????????????????????????????????????????????????????????????????????????????????????????????? 365 ?????????</font>';
	  element3.innerHTML =
    '<font style="line-height: 3rem;font-size: 18px;">??????????????????????????????????????????????????????????????????</font><br><font><b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 28px;white-space: nowrap;">???????????? Point ????????????????????????????????????</font></b><font style="font-size: 18px;"> <br>?????????????????????????????????????????????????????? ???????????????????????????*</font>';
	  element4.innerHTML =
    '<br><font style="line-height: 3rem;font-size: 18px;">Wallet ????????????????????????????????????????????????????????????????????????????????????<font> <br> <b class="fs-1"style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 28px;white-space: nowrap;">??????????????? ??????????????????????????????????????????????????????????????? </b><br><font style="font-size: 18px;">????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</font>';
	
	
  }else{
	  
	  //??????????????????????????????
	  element1.innerHTML =
    '<font style="line-height: 5rem;">????????????????????????????????????????????????????????????????????????</font><br> <b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;white-space: nowrap;">????????????????????????????????????????????????????????????????????????</b><br>??????????????????????????????????????????????????? ??????????????????????????? ???????????????????????????<br> ????????????????????????????????????????????????????????????????????????????????????????????? 365 ?????????';
	  element3.innerHTML =
    '?????????????????????????????????????????????????????????????????? <br><b style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;white-space: nowrap;">???????????? Point ???????????????????????????????????? <br></b>?????????????????????????????????????????????????????? ???????????????????????????*';
	  element4.innerHTML =
    'Wallet ???????????????????????????????????????????????????????????????????????????????????? <br> <b class="fs-1"style="color:rgba(90, 142, 248, 1); font-family: Anantason-Medium; font-size: 3rem;white-space: nowrap;">??????????????? ??????????????????????????????????????????????????????????????? </b> <p class="fs-3">????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  }
  
  /*???????????? text ??????????????? ??????????????????????????? ??????????????????????????????????????????????????????????????????*/
  if(heightcookieza007 >= 1600 && heightcookieza007 <= 1750){
	  //ipad air
	  element7.style.top = '25rem';
  }else if(heightcookieza007 >= 1400 && heightcookieza007 <= 1500){
	  //ipad mini
	  element7.style.top = '20rem';
  }else{
	  element7.style.top = '15rem';
  }
  //alert(heightcookieza007);
  //element1.style.lineHeight = '4rem';
  //element3.style.lineHeight = '4rem';
  //element6.src = './images/part-4/p4.png';
  element8.src = './images/part-1/bg1.png';
  
};

const addLogo = () => {
  let logo = document.getElementById('img-logo');
  logo.style.marginLeft = '00px';
};

const removeLogo = () => {
  let logo = document.getElementById('img-logo');
  logo.style.marginLeft = '30px';
};
