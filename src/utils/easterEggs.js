

export function easterEgg() {
  document.title = "each⠀(Нигилисты⠀=>⠀{ Т 0 Ч К 4 _ Д 0 С Т У П 4; });";
  var divs = ["div", "a", "b", "body", "header", "span", 'p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'img', 'button', 'article'];
  var pics = [
    /* COVERS */
    "https://pp.userapi.com/c824501/v824501501/771d5/bU7XdFZGfZg.jpg",
    "https://pp.userapi.com/c636119/v636119299/3e95c/n1Hj3mLvM7g.jpg",
    "https://pp.userapi.com/c636119/v636119299/3e966/JiLln8wexCc.jpg",
    "https://pp.userapi.com/c636119/v636119299/3e999/AiQCbQ09A9M.jpg",
    "https://pp.userapi.com/c837420/v837420530/1a55d/-74itzrBufg.jpg",
    "https://pp.userapi.com/c637420/v637420530/32886/smBJhI4k8ac.jpg",
    "https://pp.userapi.com/c840229/v840229479/5caa1/LpCT_j7ny_g.jpg",
    "https://sun9-3.userapi.com/c840522/v840522046/120e8/jLCz84TnvKg.jpg",
    "https://pp.userapi.com/c841237/v841237143/41422/DQvw5iq2i7U.jpg",
    "https://pp.userapi.com/c824200/v824200005/534d5/4fDD05fhxdU.jpg",
    "https://pp.userapi.com/c841637/v841637479/469f0/o3Z7A3S0XaM.jpg",
    "https://pp.userapi.com/c841637/v841637479/469e6/7FY2DNlEoh4.jpg",
    /* LOGOS */
    "https://pp.userapi.com/c604821/v604821261/13997/cv1_ah5Ju_A.jpg",
    "https://pp.userapi.com/c638623/v638623299/7c84/bGiQZDp33kU.jpg",
    "https://pp.userapi.com/c638920/v638920299/138b1/D_oq44Zf-O8.jpg",
    "https://pp.userapi.com/c636119/v636119299/3e985/lHBkgwbZ300.jpg",
    "https://pp.userapi.com/c836320/v836320299/1a73b/YiFoZSrAd40.jpg",
    "https://pp.userapi.com/c637420/v637420530/32897/BowL7-CgJJI.jpg",
    "https://pp.userapi.com/c637828/v637828299/4ba79/SkfC3_Mzgxk.jpg",
    "https://pp.userapi.com/c637419/v637419089/5da0e/kLpc5WEJlsY.jpg",
    "https://pp.userapi.com/c840332/v840332818/5e8b/Hn0rLjvWsKQ.jpg",
    "https://pp.userapi.com/c639322/v639322344/4e3e3/bK3C8o8SYk4.jpg",
    "https://pp.userapi.com/c841235/v841235626/36197/4Onpf3S2V3k.jpg",
    "https://pp.userapi.com/c841128/v841128932/39d75/1XtGo2MgsVA.jpg",
    "https://pp.userapi.com/c834102/v834102738/3ab31/dQYKJ9rbrjI.jpg",
    "https://pp.userapi.com/c824504/v824504244/5d64e/07ZUDCkNceQ.jpg",
    "https://pp.userapi.com/c830108/v830108279/d5bbd/rRD_vPxlrB4.jpg",
    /* ACID MEMES */
    "https://sun9-9.userapi.com/c840634/v840634722/71977/sd5TRwkfbD8.jpg",
    "https://pp.userapi.com/c626517/v626517530/4d084/xujN6C-JKho.jpg",
    "https://pp.userapi.com/c604525/v604525089/58d6c/3Dg4lAj5R3g.jpg",
    "https://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
    "https://pp.userapi.com/c637520/v637520089/5b4db/f2zBKmOZxw4.jpg",
    "https://pp.userapi.com/c638823/v638823530/1c87a/-CwT9e6_6Yk.jpg",
    "https://pp.userapi.com/c637721/v637721530/1c8c9/_I9If2WbSKM.jpg",
    "https://pp.userapi.com/c626829/v626829530/3f9ff/bDfQGlwUDWU.jpg",
    "https://pp.userapi.com/c639729/v639729089/38344/Jf7LyroPa9w.jpg",
    /* 3D MEMES */
    "https://pp.userapi.com/c621705/v621705123/824a4/d5xIzWMJqjk.jpg",
    "https://pp.userapi.com/c846219/v846219293/3cd3a/TgrO6Dv-Fko.jpg",
    "https://sun9-1.userapi.com/c840723/v840723340/77116/Dx_ukyuqDXg.jpg",
    "https://pp.userapi.com/c846418/v846418754/17655/azRopPgo30E.jpg",
    "https://pp.userapi.com/c844721/v844721562/4aada/mzfQIVMOwG0.jpg",
    "https://sun9-1.userapi.com/c840439/v840439048/75a79/OBfmrAcigAE.jpg",
    /* RELIGIOUS MEMES */
    "https://pp.userapi.com/c840327/v840327334/77188/VLm_diMG7Bg.jpg",
    /* COOL MEMES */
    "https://pp.userapi.com/c831408/v831408646/a21dd/fpCACj3JAw8.jpg",
    "https://pp.userapi.com/c841025/v841025800/7b1fb/fEPXapyhU7o.jpg",
    "https://pp.userapi.com/c830308/v830308800/a2384/BL3FnTX5dQ0.jpg",
    "https://pp.userapi.com/c841332/v841332771/784bd/ZurztY1znRY.jpg",
    "https://sun9-8.userapi.com/c840535/v840535885/6d9ab/XkwcSGLl1KU.jpg",
    "https://pp.userapi.com/c824603/v824603194/68b00/DdJDvmZa_u0.jpg",
    "https://pp.userapi.com/c841322/v841322470/26fc7/5eQwMrmoTsc.jpg",
    "https://pp.userapi.com/c836330/v836330089/54e24/-yl1ECznkk8.jpg",
    "https://pp.userapi.com/c637720/v637720530/1ea48/XqOJVyAC1Wc.jpg",
    "https://pp.userapi.com/c637720/v637720530/1b682/lLWKSRxFR8Q.jpg",
    /* LIFE CHANGING MEMES */
    "https://pp.userapi.com/c626829/v626829530/40060/ioXZBFoABcU.jpg",
    "https://pp.userapi.com/c626829/v626829530/3fa15/2w0J9JocXYw.jpg",
    "https://pp.userapi.com/c638623/v638623299/8198/Fdj9cYLVSEQ.jpg",
    "https://pp.userapi.com/c626829/v626829530/3f9de/e2nRVatoDz8.jpg",
    "https://pp.userapi.com/c846524/v846524797/5b4cb/PsTO0wv5QPg.jpg",
    "https://pp.userapi.com/c840325/v840325880/84b78/v-XFIybbx28.jpg",
    "https://pp.userapi.com/c637520/v637520089/5b4af/pFAtApywPPo.jpg",
    "https://pp.userapi.com/c841222/v841222914/55b4c/Ov-mnVmdjWA.jpg",
    /* FUNNY MEMES */
    "https://pp.userapi.com/c836329/v836329089/530fd/4uiqu6_Y-8o.jpg",
    "https://pp.userapi.com/c639323/v639323889/4b2e9/npFjjOFHJp0.jpg",
    "https://pp.userapi.com/c830709/v830709421/280e/_AzXO6j1zoc.jpg",
    "https://pp.userapi.com/c824602/v824602496/55fdb/HMcoRYA6LuY.jpg",
    "https://pp.userapi.com/c834203/v834203190/d594a/t1FQfVm6ukw.jpg",
    "https://pp.userapi.com/c845219/v845219868/13e75/m1tlkepmmLo.jpg",
    "https://pp.userapi.com/c638823/v638823530/1b774/6QSaoe59iFg.jpg",
    "https://pp.userapi.com/c637420/v637420089/64135/z-hC5GLXDZM.jpg",
    "https://pp.userapi.com/c830209/v830209633/ccd9a/oW0LuLOYKbI.jpg",
    "https://pp.userapi.com/c845121/v845121739/410e6/sF_ZTKBe7GY.jpg",
    "https://pp.userapi.com/c639730/v639730530/18b3a/Sg9KbkH-LVo.jpg",
    /* THEIR MEMES */
    "https://pp.userapi.com/c604419/v604419272/3fbab/jTCoj-DGRb4.jpg",
    "https://pp.userapi.com/c841123/v841123744/25d4f/wc8oA_O4fYM.jpg",
    "https://pp.userapi.com/c841520/v841520270/20d1b/S9ULKx5NY40.jpg",
    "https://pp.userapi.com/c604821/v604821261/1390a/qbq17sMrqD4.jpg",
    "https://pp.userapi.com/c636126/v636126261/328bc/E2uKfb4u72g.jpg",
    "https://pp.userapi.com/c636126/v636126261/32a51/R9y2ayRcbnw.jpg",
    "https://pp.userapi.com/c837224/v837224744/657a9/fiP9zJMRf5U.jpg",
    "https://sun9-1.userapi.com/c840429/v840429744/10633/sNUdIw1y8fE.jpg",
    "https://pp.userapi.com/c841232/v841232744/23da3/UzDW2lwBvyU.jpg",
    "https://sun9-6.userapi.com/c840430/v840430744/e722/wYB_4vCgNG4.jpg",
    "https://pp.userapi.com/c837422/v837422089/52d0e/CeUVGIGyZYs.jpg",
    "https://pp.userapi.com/c837421/v837421089/49397/yqJh5SFpLQg.jpg",
    "https://pp.userapi.com/c824201/v824201840/121505/419yH4DTzbc.jpg",
  ];

  if (this.state.firstRun) {
    var sound      = document.createElement('audio');
    sound.autoplay = "autoplay";
    sound.src      = '/img/rangers.mp3';
    sound.type     = 'audio/mp3';
    document.getElementById("title-container").appendChild(sound);
  }
  // this.setState({iterations: this.state.iterations + 1});

  if (this.state.firstRun)
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      // if (a[j].id === "title-container")
      //   continue;
      if (!this.state.mobile && this.state.firstRun) {
        a[j].style.transition = "all " + (Math.random() * 120 + 25) + "s";
      }
      // if (this.state.firstRun || Math.random() < 0.15) {
      //   a[j].style.backgroundPosition = (Math.random() * 5000 - 2500) + "% " + (Math.random() * 2000 - 1000) + "%";
      // }
      if (!this.state.mobile && (this.state.firstRun || Math.random() < (this.state.iterations + 10) / (this.state.iterations + 50) * 0.25) && a[j].className !== "content" && a[j].className !== "container" && a[j].clientHeight < window.innerHeight * .95 && a[j].clientWidth < window.innerWidth * .95) {
        a[j].style.transform = "rotate(" + (Math.random() * 150 - 75) + "deg)";
      }
      if (this.state.firstRun || Math.random() < 0.1) {
        // a[j].style.fontSize = (Math.random() + 1) * 35 + "px";
        // a[j].padding = Math.random() * 205 + "px";

        a[j].style.opacity = 0.75 + Math.random() * 0.25;
      }
      if (Math.random() < 0.1 && !a[j].innerHTML.includes("mp3")) {
        a[j].innerHTML += 'each⠀(Нигилисты⠀=>⠀{ Т 0 Ч К 4 _ Д 0 С Т У П 4; });';
      }
      if (this.state.firstRun || Math.random() < 0.35 && !a[j].innerHTML.includes("mp3")) {
        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
      }
      if (this.state.firstRun || Math.random() < .5) {
        a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 66 + 'px';
      }
      if (Math.random() < .05 && a[j].clientHeight < window.innerHeight * .5 && a[j].clientWidth < window.innerWidth * .5) {
        // a[j].style.position = "relative";
        // a[j].style.top = Math.random() * 700 + "px";
        // a[j].style.margin = Math.random() * Math.random() * 200 + "px";
      }
    }
  }
  if (this.state.firstRun)
    this.setState({firstRun: false});
}
export function easterEggNata() {
  document.title = "160 дней -- это не шутка";
  var divs = ["div", "a", "b", "body", "header", "span", 'p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'img', 'button', 'article'];
  var pics = [
    //NATA
    "https://pp.userapi.com/c626130/v626130965/de63/pIHmFfxNoSc.jpg",
    "https://pp.userapi.com/c837437/v837437965/33a08/iDkfXzfevVA.jpg",
    "https://pp.userapi.com/c841627/v841627144/2c9e0/SLQERPJnD-A.jpg",
    "https://pp.userapi.com/c824410/v824410774/10aa58/a6lY5j4r0-M.jpg",
    "https://pp.userapi.com/c824204/v824204948/15a2f1/zvkeSJezM20.jpg",
    "https://pp.userapi.com/c627520/v627520965/35cd2/MspaFTTR5lg.jpg",
    "https://pp.userapi.com/c604528/v604528965/2d063/WlQ9IWMV8d0.jpg",
    "https://pp.userapi.com/c840229/v840229717/1b795/cTBlrt-EA_Q.jpg",
    "https://pp.userapi.com/c824201/v824201948/1390e8/4O-kNvLPRH4.jpg",
    //NATA (REPEAT)
    "https://pp.userapi.com/c626130/v626130965/de63/pIHmFfxNoSc.jpg",
    "https://pp.userapi.com/c837437/v837437965/33a08/iDkfXzfevVA.jpg",
    "https://pp.userapi.com/c841627/v841627144/2c9e0/SLQERPJnD-A.jpg",
    "https://pp.userapi.com/c824410/v824410774/10aa58/a6lY5j4r0-M.jpg",
    "https://pp.userapi.com/c824204/v824204948/15a2f1/zvkeSJezM20.jpg",
    "https://pp.userapi.com/c627520/v627520965/35cd2/MspaFTTR5lg.jpg",
    "https://pp.userapi.com/c604528/v604528965/2d063/WlQ9IWMV8d0.jpg",
    "https://pp.userapi.com/c840229/v840229717/1b795/cTBlrt-EA_Q.jpg",
    "https://pp.userapi.com/c824201/v824201948/1390e8/4O-kNvLPRH4.jpg",
    //SAVED PICS
    "https://pp.userapi.com/c847020/v847020266/955b/9UiHOEPkNWA.jpg",
    "https://pp.userapi.com/c834403/v834403267/19c800/PLRTsJZ6Mz8.jpg",
    "https://pp.userapi.com/c834403/v834403267/19c800/PLRTsJZ6Mz8.jpg",
    "https://pp.userapi.com/c844720/v844720357/1d925/e8H_jK4NxeM.jpg",
    "https://sun9-4.userapi.com/c840531/v840531892/7b6d8/SFqCNvDCaKw.jpg",
    "https://pp.userapi.com/c849228/v849228740/2ff11/WvA_NuuzTGc.jpg",
    "https://pp.userapi.com/c834100/v834100354/187fbd/R5DuRh843WA.jpg",
    "https://pp.userapi.com/c848628/v848628830/2550b/mfbob0mtLZQ.jpg",
    "https://pp.userapi.com/c848632/v848632793/181c2/vvSGP0oVFrQ.jpg",
    "https://sun9-5.userapi.com/c7005/v7005394/43cb4/x4_JBBbUilo.jpg",
    "https://pp.userapi.com/c624716/v624716502/f9cf/hN6oiIAHhoQ.jpg",
    "https://pp.userapi.com/c841131/v841131877/5766e/by4_JJx1D9Y.jpg",
    "https://pp.userapi.com/c840222/v840222727/72867/711QxSazpnc.jpg",
    "https://pp.userapi.com/c841223/v841223730/a003/MM82TDUzJtc.jpg",
    "https://pp.userapi.com/c845416/v845416827/7981c/yI9P-a1X-JQ.jpg",
    "https://pp.userapi.com/1Q6PmKDz7OYITTm4UoIlgGUpPLQc3hCwoPtegA/ksJokzeA6ts.jpg",
    "https://pp.userapi.com/c849224/v849224531/136f2/kiH4wc5QUdk.jpg",
    "https://pp.userapi.com/c630316/v630316218/26776/U1rd6Itr8SM.jpg",
    "https://pp.userapi.com/c850020/v850020760/2bfa/IoGkFksnjr0.jpg",
    "https://pp.userapi.com/c830708/v830708509/8ede4/NtJp27624N4.jpg",
    "https://pp.userapi.com/tmieDP_Dy5ofnsF37PcU7QYhI2dIii02j8lH9w/dDFwywTvO7U.jpg",
    "https://pp.userapi.com/c847021/v847021816/6527c/QziyhsL-k-Y.jpg",
    "https://pp.userapi.com/c847221/v847221831/6d898/iVVwzIOMiic.jpg",
    "https://pp.userapi.com/c845416/v845416513/1877e/NOpBDBzSaF0.jpg",
    "https://pp.userapi.com/c846523/v846523948/6017c/iQRdu0LnfPg.jpg",
    "https://pp.userapi.com/c638019/v638019495/5e363/QYrPRYFT0Q0.jpg",
    "https://pp.userapi.com/c846021/v846021782/58644/6cpgePSE9Cg.jpg",
    "https://sun9-4.userapi.com/c543103/v543103678/407b1/GDBwb_xKEYo.jpg",
    "https://pp.userapi.com/c846321/v846321831/44046/GPWGcfWXS8Q.jpg",
    "https://pp.userapi.com/c844724/v844724713/4861e/ZIW0HYcny90.jpg",
    "https://pp.userapi.com/c626229/v626229646/1948f/yOxHP-KD1C8.jpg",
    "https://pp.userapi.com/c837129/v837129080/537df/wR017KEVE9k.jpg",
    "https://pp.userapi.com/c623900/v623900214/f38bf/69Z7OzK8g8k.jpg",
    "https://pp.userapi.com/c837137/v837137964/50eb2/LnV1u7IVWxA.jpg",
    "https://pp.userapi.com/c841427/v841427760/76fab/wSzF26yVyEM.jpg",
    "https://pp.userapi.com/c847217/v847217113/4bdc/vziYV_JG5mc.jpg",
    "https://pp.userapi.com/c841230/v841230000/6c627/fAExH9hcN4E.jpg",
    "https://pp.userapi.com/c840327/v840327000/580d7/dlJDRpIl2so.jpg",
    "https://pp.userapi.com/c840126/v840126072/8733c/Ru_vADt5RmQ.jpg",
    "https://pp.userapi.com/c845522/v845522350/2a123/x_UHxqSJRjY.jpg",
    "https://pp.userapi.com/c836638/v836638485/82de/lTiSACj0yeo.jpg",
    //NIHILISTIC
    "https://sun9-9.userapi.com/c840634/v840634722/71977/sd5TRwkfbD8.jpg",
    "https://pp.userapi.com/c626517/v626517530/4d084/xujN6C-JKho.jpg",
    "https://pp.userapi.com/c604525/v604525089/58d6c/3Dg4lAj5R3g.jpg",
    "https://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
    "https://pp.userapi.com/c637520/v637520089/5b4db/f2zBKmOZxw4.jpg",
    "https://pp.userapi.com/c638823/v638823530/1c87a/-CwT9e6_6Yk.jpg",
    "https://pp.userapi.com/c637721/v637721530/1c8c9/_I9If2WbSKM.jpg",
    "https://pp.userapi.com/c626829/v626829530/3f9ff/bDfQGlwUDWU.jpg",
    "https://pp.userapi.com/c639729/v639729089/38344/Jf7LyroPa9w.jpg",
  ];

  if (this.state.firstRun) {
    var sound      = document.createElement('audio');
    sound.autoplay = "autoplay";
    sound.src      = '/img/rangers.mp3';
    sound.type     = 'audio/mp3';
    document.getElementById("title-container").appendChild(sound);
  }
  // this.setState({iterations: this.state.iterations + 1});

  if (this.state.firstRun)
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      // if (a[j].id === "title-container")
      //   continue;
      if (!this.state.mobile && this.state.firstRun) {
        a[j].style.transition = "all " + (Math.random() * 120 + 25) + "s";
      }
      // if (this.state.firstRun || Math.random() < 0.15) {
      //   a[j].style.backgroundPosition = (Math.random() * 5000 - 2500) + "% " + (Math.random() * 2000 - 1000) + "%";
      // }
      if (!this.state.mobile && (this.state.firstRun || Math.random() < (this.state.iterations + 10) / (this.state.iterations + 50) * 0.25) && a[j].className !== "content" && a[j].className !== "container" && a[j].clientHeight < window.innerHeight * .95 && a[j].clientWidth < window.innerWidth * .95) {
        a[j].style.transform = "rotate(" + (Math.random() * 150 - 75) + "deg)";
      }
      if (this.state.firstRun || Math.random() < 0.1) {
        // a[j].style.fontSize = (Math.random() + 1) * 35 + "px";
        // a[j].padding = Math.random() * 205 + "px";

        a[j].style.opacity = 0.75 + Math.random() * 0.25;
      }
      if (Math.random() < 0.1 && !a[j].innerHTML.includes("mp3")) {
        a[j].innerHTML += 'давайте все похлопаем Нате !!!';
      }
      if (this.state.firstRun || Math.random() < 0.35 && !a[j].innerHTML.includes("mp3")) {
        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * Math.random() * pics.length)] + ')';
      }
      if (this.state.firstRun || Math.random() < .5) {
        a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 66 + 'px';
      }
      if (Math.random() < .05 && a[j].clientHeight < window.innerHeight * .5 && a[j].clientWidth < window.innerWidth * .5) {
        // a[j].style.position = "relative";
        // a[j].style.top = Math.random() * 700 + "px";
        // a[j].style.margin = Math.random() * Math.random() * 200 + "px";
      }
    }
  }
  if (this.state.firstRun)
    this.setState({firstRun: false});
}

export function easterEggRomanova() {
  var divs = ['p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'div', 'img', 'button', 'article', 'section', 'header'];
  var pics = [
    "https://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
    "https://pp.userapi.com/c845019/v845019623/57677/iqDYT0CM5Gs.jpg",
    "https://pp.userapi.com/c845019/v845019623/5766d/pd03ffAAY34.jpg",
    "https://pp.userapi.com/c845019/v845019623/57663/U4RkweytaXk.jpg",
    "https://pp.userapi.com/c834201/v834201205/10531b/hbJn95uXfN0.jpg",
    "https://pp.userapi.com/c638424/v638424429/4b5c6/fVcWPcHDrtQ.jpg",
    "https://pp.userapi.com/c841636/v841636863/5992/mBpqD-2vStk.jpg",
    "https://pp.userapi.com/c836235/v836235822/50bc7/yzxVWVzM_1U.jpg",
    "https://pp.userapi.com/c840326/v840326209/c97/dDNu-kkjT-4.jpg",
    "https://pp.userapi.com/c638226/v638226223/5a10d/TneBzVadgd0.jpg",
    "https://pp.userapi.com/c841224/v841224688/1f8c1/32d91Vnu2TE.jpg",
    "https://sun9-7.userapi.com/c840725/v840725300/10336/MATRZoT57gQ.jpg",
    "https://pp.userapi.com/c841225/v841225477/2ac91/Y8h1mWTnqiE.jpg",
    "https://pp.userapi.com/c834201/v834201917/11b77/S5qxdakwfis.jpg",
    "https://sun9-3.userapi.com/c840529/v840529266/1d965/LlEhGxS9jeI.jpg",
    "https://pp.userapi.com/c834303/v834303147/5485f/Z88BLyv7-90.jpg",
    "https://pp.userapi.com/c637828/v637828299/4a1e9/HKMSOuYhQRE.jpg",
    "https://pp.userapi.com/c9212/u117487465/147531382/w_e194a306.jpg",
    "https://pp.userapi.com/c637723/v637723289/5384b/HhgLVFQTMR0.jpg",
    "https://pp.userapi.com/c637723/v637723289/5362d/REG8v3H_P-w.jpg",
    "https://pp.userapi.com/c637722/v637722140/5cf3e/XZpOsD_cBIw.jpg",
    "https://pp.userapi.com/c837128/v837128289/37e8b/xrdLc0jFpTE.jpg",
    "https://pp.userapi.com/c837428/v837428289/3e95b/CxfQ4GdnnIk.jpg",
    "https://pp.userapi.com/c637828/v637828289/5012c/cUaKZMGNtYU.jpg",
    "https://pp.userapi.com/c639628/v639628423/24ea5/QQy9bqkyJm8.jpg",
    "https://pp.userapi.com/c638016/v638016725/3d16d/ZLMAyaAO3cg.jpg",
    "https://pp.userapi.com/c639525/v639525289/1a012/pk8SN3Um6G0.jpg",
    "https://pp.userapi.com/c639916/v639916299/1b78a/MdJd_LHoMas.jpg",
    "https://pp.userapi.com/c836126/v836126289/241ee/boBP7_YYvDk.jpg",
    "https://pp.userapi.com/c604323/v604323717/2ff03/9EP4gf7J16o.jpg",
    "https://pp.userapi.com/c604323/v604323717/33e3c/pFnCP7jTdkI.jpg",
    "https://pp.userapi.com/c626726/v626726717/426cf/pL6ifYPb6nA.jpg",
    "https://pp.userapi.com/c626726/v626726717/447d0/9N9fSS9pBvE.jpg",
    "https://pp.userapi.com/c837732/v837732717/18690/ZcdbGbNsEck.jpg",
    "https://pp.userapi.com/c837339/v837339299/13ed0/WsNigxZSFF8.jpg",
    "https://pp.userapi.com/c638424/v638424717/1aeb7/4_fSJS5qIC0.jpg",
    "https://pp.userapi.com/c638424/v638424717/1aed2/d5ftLMk7tcU.jpg",
    "https://pp.userapi.com/c172/v172639/66c/WcDJ0CKwq64.jpg",
    "https://pp.userapi.com/c638317/v638317717/16dbf/4bbddFIZut0.jpg",
    "https://pp.userapi.com/c1209/u10575639/20113476/x_715d454e.jpg",
    "https://pp.userapi.com/c604622/v604622717/26963/2EIBDusOvFk.jpg",
    "https://pp.userapi.com/c636821/v636821717/4d826/P3hjz7wOZ6E.jpg",
    "https://pp.userapi.com/c836126/v836126289/21291/ZWwsZwO8-3E.jpg",
    "https://pp.userapi.com/c836126/v836126289/241e5/JcdQm-_4oKI.jpg",
    "https://pp.userapi.com/c1209/u10575639/20113476/x_7d784c00.jpg",
    "https://pp.userapi.com/c836126/v836126289/247a7/Uc0TRlipQ6A.jpg",
    "https://pp.userapi.com/c639519/v639519289/f395/qxx8tlQAtm4.jpg",
  ];
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      if (divs[i] === 'img') {
        a[j].style.content = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].src = pics[Math.floor(Math.random() * pics.length)];
      }
      else {
        if (divs[i] !== 'div' && divs[i] !== 'section' && divs[i] !== 'article')
          a[j].innerHTML = 'С Днём Рождения 🎉🎉🎉';
        else
          a[j].innerHTML += 'С Днём Рождения 🎉🎉🎉';

        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 70 + 'px';
      }
    }
  }
}
export function easterEggCramp() {
  var divs = ['p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'div', 'img', 'button', 'article', 'section', 'header'];
  var pics = [
    "https://pp.userapi.com/c840120/v840120566/5a093/o74bbeeWStY.jpg",
    "https://pp.userapi.com/c841126/v841126482/5e90d/tvK2GKqX7cU.jpg",
    "https://pp.userapi.com/c834104/v834104743/16481a/A8-vQcgt_Yc.jpg",
    "https://pp.userapi.com/c604326/v604326753/3bb55/ZIto6zaf5sA.jpg",
    "https://pp.userapi.com/c604625/v604625753/47b2a/vYIT8ZLjAPc.jpg",
    "https://pp.userapi.com/c836635/v836635753/3d339/6OIjfurXsjI.jpg",
    "https://pp.userapi.com/c841129/v841129753/5274/9Hovg_hUrXA.jpg",
    "https://pp.userapi.com/c837537/v837537381/537ea/JR2nUEX_VRc.jpg",
    "https://pp.userapi.com/c824603/v824603148/1fffa/S8bCjkz1sqg.jpg",
    "https://pp.userapi.com/c840424/v840424561/2c0fa/LZyxLnJWzow.jpg",
    "https://pp.userapi.com/c841535/v841535626/631fa/ssrEj_D_Kgc.jpg",
    "https://pp.userapi.com/c840027/v840027211/8e434/woqqkjlkAXY.jpg",
    "https://pp.userapi.com/c846216/v846216027/519cb/bFnBql6Bgqg.jpg",
    "https://pp.userapi.com/c834200/v834200170/1589ea/fPn6nadQobQ.jpg",
    "https://pp.userapi.com/c824504/v824504956/3ddb3/05Mxuf4CcqI.jpg",
    "https://pp.userapi.com/c639320/v639320913/5352d/FbOmwBtcky4.jpg",
    "https://pp.userapi.com/c840126/v840126798/4721f/2MfwSYM3O0M.jpg",
    "https://pp.userapi.com/c836727/v836727556/5c037/AEugs9__l-c.jpg",
    "https://pp.userapi.com/c841231/v841231108/132bb/AP9LJjHcYL4.jpg",
    "https://pp.userapi.com/c841228/v841228199/d0a5/Q28WlvxYBow.jpg",
    "https://pp.userapi.com/c841129/v841129749/14560/ILiYSrShUs4.jpg",
  ];
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      if (divs[i] === 'img') {
        a[j].style.content = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].src = pics[Math.floor(Math.random() * pics.length)];
      }
      else {
        if (divs[i] !== 'div' && divs[i] !== 'section' && divs[i] !== 'article')
          a[j].innerHTML = 'Мамку твою ебал';
        else
          a[j].innerHTML += 'Мамку твою ебал';

        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 70 + 'px';
      }
    }
  }
}
export function easterEggDarya() {
  var divs = ['p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'div', 'img', 'button', 'article', 'section', 'header'];
  var pics = [
    "https://pp.userapi.com/c837239/v837239338/5baeb/zGXlLGeKx48.jpg",
    "https://pp.userapi.com/c841521/v841521703/2531d/Kv31DNMyZag.jpg",
    "https://pp.userapi.com/c841331/v841331782/41cac/71fUCnYOFx4.jpg",
    "https://pp.userapi.com/c824701/v824701738/8386d/MG_R2nbyPxs.jpg",
    "https://pp.userapi.com/c847019/v847019477/2f743/-qtucpomYl0.jpg",
    "https://pp.userapi.com/c849216/v849216116/12dd0/AUfqm-3Wo-Y.jpg",
    "https://pp.userapi.com/c638319/v638319581/5c899/FeQJgd47wG4.jpg"
  ];
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      if (divs[i] === 'img') {
        a[j].style.content = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].src = pics[Math.floor(Math.random() * pics.length)];
      }
      else {
        if (divs[i] !== 'div' && divs[i] !== 'section' && divs[i] !== 'article')
          a[j].innerHTML = 'Шутки кончились.';
        else
          a[j].innerHTML += 'Шутки кончились.';

        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 70 + 'px';
      }
    }
  }
}


export default easterEgg;
