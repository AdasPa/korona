
function mk(type, cc) {
  if (undefined == type)
    type = "div";
  const el = document.createElement(type);
  if (typeof cc == "string")
    el.classList.add(cc);
  else if (Array.isArray(cc))
    cc.forEach(c => el.classList.add(c));
  return el;
}

module.exports.mk = mk;


function add_spacer(node, cc) {
  var spacer = mk("div");
  if (typeof cc == "string")
    spacer.classList.add(cc);
  spacer.classList.add("spacer");
  node.appendChild(spacer);
}


class XBox {

  constructor(type) {
    this.node = document.createElement("div");
    this.node.classList.add(type);
  }

  add(node, cc) {
    if (0 < this.node.childElementCount)
      add_spacer(this.node, cc);
    this.node.appendChild(node);
    return node;
  }

  rm(node) {
    if (node.nextSibling)
      this.node.removeChild(node.nextSibling)
    else if (node.previousSibling)
      this.node.removeChild(node.previousSibling);
    this.node.removeChild(node);
  }


  clr() {
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.firstChild);
    }
  }

}

module.exports.XBox = XBox;

