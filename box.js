const boxcontainer = document.createElement("div");
document.body.append(boxcontainer);
boxcontainer.style.marginBottom = '80px'
boxcontainer.style.marginInline = '198px'

const box1 = document.createElement("div");
const box1IMG = document.createElement("img");
box1IMG.style.width = "70px";
boxcontainer.append(box1);
box1.append(box1IMG);
box1IMG.src = "./Assets/box1.svg";
const box1p = document.createElement("h1");
box1.append(box1p);
const box1paragraph = document.createElement("p");
box1.append(box1paragraph);

const box2 = document.createElement("div");
const box2IMG = document.createElement("img");
box2IMG.style.width = "70px";
boxcontainer.append(box2);
box2.append(box2IMG);
box2IMG.src = "./Assets/box2.svg";
const box2p = document.createElement("h1");
box2.append(box2p);
const box2paragraph = document.createElement("p");
box2.append(box2paragraph);

const box3 = document.createElement("div");
const box3IMG = document.createElement("img");
box3IMG.style.width = "70px";
boxcontainer.append(box3);
box3.append(box3IMG);
box3IMG.src = "./Assets/box3.svg";
const box3p = document.createElement("h1");
box3.append(box3p);
const box3paragraph = document.createElement("p");
box3.append(box3paragraph);

boxcontainer.style.display = "flex";
boxcontainer.style.gap = "31px";
boxcontainer.style.justifyContent = "center";

box1.style.display = "flex";
box1.style.flexDirection = "column";
box1.style.gap = "20px";
box1p.innerText = "training Courses";
box1p.style.color = "#252B42";
box1.style.background = "#FFFFFF";
box1.style.paddingTop = "35px";
box1.style.paddingLeft = "40px";
box1p.style.fontSize = "16px";
box1paragraph.innerText = 'The gradual accumulation of information about atomic and small-scale behaviour...'
box1paragraph.style.paddingRight = '66px'
box1paragraph.style.color = '#737373'
box1paragraph.style.fontSize = '14px'
box1paragraph.style.lineHeight = '20px'

box2.style.display = "flex";
box2.style.flexDirection = "column";
box2.style.gap = "20px";
box2p.innerText = "2,769 online courses";
box2p.style.fontSize = "16px";
box2p.style.color = "#252B42";
box2.style.background = "#FFFFFF";
box2.style.paddingTop = "35px";
box2.style.paddingLeft = "40px";
box2paragraph.innerText = 'The gradual accumulation of information about atomic and small-scale behaviour...'
box2paragraph.style.paddingRight = '66px'
box2paragraph.style.color = '#737373'
box2paragraph.style.fontSize = '14px'
box2paragraph.style.lineHeight = '20px'

box3.style.display = "flex";
box3.style.flexDirection = "column";
box3.style.gap = "20px";
box3p.innerText = "training Courses";
box3p.style.color = "#FFFFFF";
box3p.style.fontSize = "16px";
box3.style.background = "#23A6F0";
box3.style.paddingTop = "35px";
box3.style.paddingLeft = "40px";
box3paragraph.innerText = 'The gradual accumulation of nformation about atomic and small-scale behaviour...'
box3paragraph.style.color = '#FFFFFF'
box3paragraph.style.paddingRight = '66px'
box3paragraph.style.fontSize = '14px'
box3paragraph.style.lineHeight = '20px'
box3paragraph.style.paddingBottom = '35px'