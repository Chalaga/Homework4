const footer = document.createElement("footer");
document.body.append(footer);

footer.style.background = "#FFFFFF";

const footercontainer = document.createElement("div");
footer.append(footercontainer);

footercontainer.style.display = "flex";
footercontainer.style.justifyContent = "center";
footercontainer.style.marginTop = "160px";
footercontainer.style.gap = "80px";
// footercontainer.style.marginBottom = '162px'
footercontainer.style.flexDirection = "column";

const footerintro = document.createElement("div");
footercontainer.append(footerintro);
footerintro.style.gap = "10px";
footerintro.style.display = "flex";
footerintro.style.flexDirection = "column";
footerintro.style.alignItems = "center";

const advice = document.createElement("h1");
footerintro.append(advice);
advice.innerText = "Practice Advice";
advice.style.color = "#23A6F0";
advice.style.fontSize = "14px";
advice.style.marginTop = "160px";

const featured = document.createElement("h1");
footerintro.append(featured);
featured.innerText = "Featured Products";
featured.style.fontWeight = "700";
featured.style.fontSize = "40px";
featured.style.color = "#252B42";

const prob = document.createElement("p");
footerintro.append(prob);
prob.innerText =
  "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ";
prob.style.fontSize = "14px";
prob.style.lineHeight = "20px";
prob.style.paddingInline = "111px";
prob.style.textAlign = "center";

const emailcontainer = document.createElement("div");
footercontainer.append(emailcontainer);
emailcontainer.style.margin = "auto";
emailcontainer.style.marginBottom = "182px";

const emailinput = document.createElement("input");
emailcontainer.append(emailinput);
emailinput.type = "email";
emailinput.placeholder = "Your Email";
emailinput.style.paddingBlock = "15px";
emailinput.style.paddingLeft = "20px";
emailinput.style.paddingRight = "393px";
emailinput.style.fontSize = "14px";
emailinput.style.background = "#E6E6E6";
emailinput.style.border = "none";

const subscribe = document.createElement("button");
emailcontainer.append(subscribe);

subscribe.innerText = "Subscribe";
subscribe.style.paddingBlock = "15px";
subscribe.style.border = "none";
subscribe.style.cursor = "Pointer";
subscribe.style.background = "#23A6F0";
subscribe.style.color = "#FFFFFF";
subscribe.style.fontSize = "14px";

