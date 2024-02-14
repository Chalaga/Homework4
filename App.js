document.body.style.background = "#252B42";

const firstbox = document.createElement("div");
document.body.appendChild(firstbox);
firstbox.style.display = "flex";
firstbox.style.paddingTop = "184px";
firstbox.style.flexDirection = "column";
firstbox.style.width = "699px";
firstbox.style.margin = "auto";
firstbox.style.gap = "40px";
firstbox.style.paddingBottom = "80px";

const welcome = document.createElement("h1");
firstbox.append(welcome);
welcome.innerText = "Welcome";

welcome.style.color = "#23A6F0";
welcome.style.fontSize = "16px";
welcome.style.fontWeight = "700";
welcome.style.display = "flex";
welcome.style.justifyContent = "center";
welcome.style.paddingTop = "40px";
welcome.style.margin = "0px";

const header = document.createElement("h1");
firstbox.append(header);
header.innerText = "Selling on the internet like a pro";

header.style.display = "flex";
header.style.color = "#FFFFFF";
header.style.fontSize = "58px";
header.style.fontWeight = "700";
header.style.justifyContent = "center";
header.style.paddingInline = "78px";
header.style.textAlign = "center";
header.style.lineHeight = "80px";
header.style.margin = "0px";

const IntroDuction = document.createElement("p");
firstbox.append(IntroDuction);
IntroDuction.innerText =
  "We know how large objects will act, but things on a small scale just do not act that way.";

IntroDuction.style.fontWeight = "400";
IntroDuction.style.fontSize = "20px";
IntroDuction.style.lineHeight = "30px";
IntroDuction.style.textAlign = "center";
IntroDuction.style.color = "#FFFFFF";
IntroDuction.style.paddingInline = "81px";
IntroDuction.style.margin = "0px";

const buttonContainer1 = document.createElement("button");
const buttonContainer2 = document.createElement("button");
const buttonContainer = document.createElement("div");

firstbox.append(buttonContainer);
buttonContainer.append(buttonContainer1);
buttonContainer.append(buttonContainer2);

buttonContainer.style.display = "flex";
buttonContainer.style.gap = "10px";
buttonContainer.style.margin = "auto";

buttonContainer1.innerText = "Get Quote Now";
buttonContainer1.style.background = "#23A6F0";
buttonContainer1.style.paddingInline = "40px";
buttonContainer1.style.paddingBlock = "15px";
buttonContainer1.style.borderRadius = "5px";
buttonContainer1.style.border = "none";
buttonContainer1.style.color = "#FFFFFF";
buttonContainer1.style.cursor = 'pointer'

buttonContainer2.innerText = "Get Quote Now";
buttonContainer2.style.background = "transparent";
buttonContainer2.style.paddingInline = "40px";
buttonContainer2.style.paddingBlock = "15px";
buttonContainer2.style.borderRadius = "5px";
buttonContainer2.style.border = "1px";
buttonContainer2.style.borderColor = "#23A6F0";
buttonContainer2.style.color = "#23A6F0";



