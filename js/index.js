//Coal County Clicker -  JS FILE

let coalpay = 0;
let clickUpgrade = 1;
let helper = 0;
let helperAddExp = 0;
let helperUp = 1;
let mine_cart = 0;
let mine_cartAddExp = 0;
let mine_cartUp = 1;
let crane = 0;
let craneAddExp = 0;
let craneUp = 1;
let breaker = 0;
let breakerAddExp = 0;
let breakUp = 1;
let strip_mine = 0;
let strip_mineAddExp = 0;
let strip_mineUp = 1;
const acheivements = [];

//Quotes
const jibjab = ['Time to start digging boys! <br><i style="font-size: .6em;">- some random dude</i>', 'Black Gold.  PA candy. <br><i style="font-size: .6em;">- Coal Town Mayor</i>','The coal mines are simply making too much cash.  Where are we going to store all this money? <br><i style="font-size: .6em;">- Small Town Banker</i>','Are you telling me the kids are not working in the mines too?!? <br><i style="font-size: .6em;">- Barron Coal Rich</i>',
'The creeks are orange and the forest is gone, but at least I have a job. <br><i style="font-size: .6em;">- Overheard Miner</i>','When will those coal powered cars be ready for production? <br><i style="font-size: .6em;">- CEO to Underpaid Inventor</i>','Time to switch from dynamite to nuclear.  We need to get this coal out! <br><i style="font-size: .6em;">- Stressed Foreman</i>'];
document.getElementById("jibjab").innerHTML = ' " ' + jibjab[0] + ' " ';

myInterval = setInterval(function() {clicker(); helperBuy(); mine_cartBuy(); craneBuy(); breakerBuy(); strip_mineBuy(); upInc();
firstClick(); helpingHand(); transportation(); craneA(); breakerA(); stripmineA(); quotesPrint()}, 1000);

document.getElementById("coals").innerHTML = coalpay;
document.getElementById("helper").innerHTML = helper;
document.getElementById("mine_cart").innerHTML = mine_cart;
document.getElementById("crane").innerHTML = crane;
document.getElementById("breaker").innerHTML = breaker;
document.getElementById("strip_mine").innerHTML = strip_mine;

//Quotes Print
function quotesPrint() {
  const jibjabNum = Math.random();
  const jibjabRan = Math.floor(Math.random() * 7)
  if (jibjabNum >= .97) {
    document.getElementById("jibjab").innerHTML = ' " ' + jibjab[jibjabRan] + ' " ';
  }
}


//'⛏️First Click','⚒️Helping Hand','🚃Transportation','🏗️A Quick Pick-Me-Up','🏭Industrializing','🌎Big Business'
//Acheivements
function firstClick(){
    if (acheivements.includes('⛏️First Click')){
    } else {
      if (coalpay >= 1){
          acheivements.push('⛏️First Click');
          const toast = new bootstrap.Toast(document.getElementById('liveToast'));
          toast.show();
          document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
        }
      }
    }
  function helpingHand(){
      if (acheivements.includes('⚒️Helping Hand')){
      } else {
        if (helper >= 1){
            acheivements.push('⚒️Helping Hand');
            const toast = new bootstrap.Toast(document.getElementById('liveToastHelper'));
            toast.show();
            document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
          }
        }
      }
  function transportation(){
      if (acheivements.includes('🚃Transportation')){
      } else {
        if (mine_cart >= 1){
            acheivements.push('🚃Transportation');
            const toast = new bootstrap.Toast(document.getElementById('liveToasttransportation'));
            toast.show();
            document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
          }
        }
      }
  function craneA(){
      if (acheivements.includes('🏗️A Quick Pick-Me-Up')){
      } else {
        if (crane >= 1){
            acheivements.push('🏗️A Quick Pick-Me-Up');
            const toast = new bootstrap.Toast(document.getElementById('liveToastCrane'));
            toast.show();
            document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
          }
        }
      }
  function breakerA(){
      if (acheivements.includes('🏭Industrializing')){
      } else {
        if (breaker >= 1){
            acheivements.push('🏭Industrializing');
            const toast = new bootstrap.Toast(document.getElementById('liveToastBreaker'));
            toast.show();
            document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
          }
        }
      }
  function stripmineA(){
      if (acheivements.includes('🌎Big Business')){
      } else {
        if (strip_mine >= 1){
            acheivements.push('🌎Big Business');
            const toast = new bootstrap.Toast(document.getElementById('liveToastStripMine'));
            toast.show();
            document.getElementById("acheivements").innerHTML = acheivements.join(' • ');
          }
        }
      }

//miner
function mouseDown() {
  document.getElementById("miner").src = "./img/miner_dwn.png";
  coalpay = coalpay + 1;
  coalpay = coalpay + clickUpgrade - 1;
  document.getElementById("coals").innerHTML = coalpay;
}
function mouseUp() {
  document.getElementById("miner").src = "./img/miner_up.png";
}
function mouseOver() {
  document.getElementById("miner").src = "./img/miner_over.png";
}

//VISUALS
//clicker
function clicker(){
  if (clickUpgrade == 1 && coalpay >= 50){
    document.getElementById("clickerUp").style = "visibility: visible";
  }
}
//helper
function helperBuy(){
  //aggregate
  if (helperUp == 1 && coalpay >= 100)
    {
      document.getElementById("helperBuyUpgrade").style = "visibility: visible";
  }
  if (helperUp == 10 && coalpay >= 1000)
    {
      document.getElementById("helperBuyUpgrade").style = "visibility: visible";
  }
  //
  if (coalpay <= 9){
    document.getElementById("helperBuy").style = "visibility: hidden";
  }
  else {
    if (coalpay >= (helperAddExp)){
      document.getElementById("helperBuy").style = "visibility: visible";
    }
    else {
      document.getElementById("helperBuy").style = "visibility: hidden";
    }
  }
}
//mine_cart
function mine_cartBuy(){
  if (coalpay <= 99){
    document.getElementById("mine_cartBuy").style = "visibility: hidden";
  }
  else {
    if (coalpay >= (mine_cartAddExp)){
      document.getElementById("mine_cartBuy").style = "visibility: visible";
    }
    else {
      document.getElementById("mine_cartBuy").style = "visibility: hidden";
    }
  }
}
//crane
function craneBuy(){
  if (coalpay <= 999){
    document.getElementById("craneBuy").style = "visibility: hidden";
  }
  else {
    if (coalpay >= (craneAddExp)){
      document.getElementById("craneBuy").style = "visibility: visible";
    }
    else {
      document.getElementById("craneBuy").style = "visibility: hidden";
    }
  }
}
//breaker
function breakerBuy(){
  if (coalpay <= 9999){
    document.getElementById("breakerBuy").style = "visibility: hidden";
  }
  else {
    if (coalpay >= (breakerAddExp)){
      document.getElementById("breakerBuy").style = "visibility: visible";
    }
    else {
      document.getElementById("breakerBuy").style = "visibility: hidden";
    }
  }
}
//strip_mine
function strip_mineBuy(){
  if (coalpay <= 99999){
    document.getElementById("strip_mineBuy").style = "visibility: hidden";
  }
  else {
    if (coalpay >= (strip_mineAddExp)){
      document.getElementById("strip_mineBuy").style = "visibility: visible";
    }
    else {
      document.getElementById("strip_mineBuy").style = "visibility: hidden";
    }
  }
}
///*visuals//


//HELPER
function helperAdd() {
    if (helper <= 0) {
      coalpay = coalpay - 10;
      helperAddExp = 40;
    }
    else {
      coalpay = coalpay - helperAddExp;
      helperAddExp = helperAddExp*2;
      document.getElementById("helperBuy").innerHTML = 'Buy: ' + helperAddExp;
    }
    helper = helper + 1;
    document.getElementById("helper").innerHTML = helper;
    document.getElementById("coals").innerHTML = coalpay;
    document.getElementById("helperBuy").style = "visibility: hidden";
}
//mine_cart
function mine_cartAdd() {
  if (mine_cart <= 0) {
    coalpay = coalpay - 100;
    mine_cartAddExp = 400;
  }
  else {
    coalpay = coalpay - mine_cartAddExp;
    mine_cartAddExp = mine_cartAddExp*2;
    document.getElementById("mine_cartBuy").innerHTML = 'Buy: ' + mine_cartAddExp;
  }
  mine_cart = mine_cart + 1;
  document.getElementById("mine_cart").innerHTML = mine_cart;
  document.getElementById("coals").innerHTML = coalpay;
  document.getElementById("mine_cartBuy").style = "visibility: hidden";
}
//crane
function craneAdd() {
    if (crane <= 0) {
      coalpay = coalpay - 1000;
      craneAddExp = 4000;
    }
    else {
      coalpay = coalpay - craneAddExp;
      craneAddExp = craneAddExp*2;
      document.getElementById("craneBuy").innerHTML = 'Buy: ' + craneAddExp;
    }
    crane = crane + 1;
    document.getElementById("crane").innerHTML = crane;
    document.getElementById("coals").innerHTML = coalpay;
    document.getElementById("craneBuy").style = "visibility: hidden";
}
//breaker
function breakerAdd() {
    if (breaker <= 0) {
      coalpay = coalpay - 10000;
      breakerAddExp = 40000;
    }
    else {
      coalpay = coalpay - breakerAddExp;
      breakerAddExp = breakerAddExp*2;
      document.getElementById("breakerBuy").innerHTML = 'Buy: ' + breakerAddExp;
    }
    breaker = breaker + 1;
    document.getElementById("breaker").innerHTML = breaker;
    document.getElementById("coals").innerHTML = coalpay;
    document.getElementById("breakerBuy").style = "visibility: hidden";
}
//strip_mine
function strip_mineAdd() {
    if (strip_mine <= 0) {
      coalpay = coalpay - 100000;
      strip_mineAddExp = 400000;
    }
    else {
      coalpay = coalpay - strip_mineAddExp;
      strip_mineAddExp = strip_mineAddExp*2;
      document.getElementById("strip_mineBuy").innerHTML = 'Buy: ' + strip_mineAddExp;
    }
    strip_mine = strip_mine + 1;
    document.getElementById("strip_mine").innerHTML = strip_mine;
    document.getElementById("coals").innerHTML = coalpay;
    document.getElementById("strip_mineBuy").style = "visibility: hidden";
}

//TIME INC
function upInc() {
  ///helper
    helperpayout = helper * 2 * helperUp;
    coalpay = coalpay + helperpayout;
  //mine_cart
    mine_cartpayout = mine_cart  * 20;
    coalpay = coalpay + mine_cartpayout;
  //crane
    cranepayout = crane  * 200;
    coalpay = coalpay + cranepayout;
  //breaker
    breakerpayout = breaker  * 2000;
    coalpay = coalpay + breakerpayout;
  //strip_mine
    strip_minepayout = strip_mine  * 20000;
    coalpay = coalpay + strip_minepayout;

    document.getElementById("coals").innerHTML = coalpay;
    document.title = 'Coals:' + coalpay + ' - CoalCountyClicker';

    //current cps
    let current_cps = helperpayout + mine_cartpayout + cranepayout + breakerpayout + strip_minepayout;
    document.getElementById("current_cps_earn").innerHTML = current_cps;
    document.getElementById("helper_earn").innerHTML = helperpayout;
    document.getElementById("mine_cart_earn").innerHTML = mine_cartpayout;
    document.getElementById("crane_earn").innerHTML = cranepayout;
    document.getElementById("breaker_earn").innerHTML = breakerpayout;
    document.getElementById("strip_mine_earn").innerHTML = strip_minepayout;
}

//UPGRADES
//helper
function clickerUp(){
  clickUpgrade = clickUpgrade *2;
  document.getElementById("coal_earn").innerHTML = clickUpgrade;
  document.getElementById("clickerUp").style = "visibility: hidden";
}
function helperBuyUpgrade(){
  helperUp = helperUp * 10;
  document.getElementById("helperBuyUpgrade").style = "visibility: hidden";
}
//mine_cart
function mine_cartBuyUpgrade(){
  mine_cartUp = mine_cartUp * 10;
  document.getElementById("mine_cartBuyUpgrade").style = "visibility: hidden";
}
//crane
function craneBuyUpgrade(){
  craneUp = craneUp * 10;
  document.getElementById("craneBuyUpgrade").style = "visibility: hidden";
}
//breaker
function breakerBuyUpgrade(){
  breakerUp = breakerUp * 10;
  document.getElementById("breakerBuyUpgrade").style = "visibility: hidden";
}
//strip_mine
function strip_mineBuyUpgrade(){
  strip_mineUp = strip_mineUp * 10;
  document.getElementById("strip_mineBuyUpgrade").style = "visibility: hidden";
}

//*UPGRADES//
