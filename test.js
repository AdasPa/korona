var data = {
 TRK: [], 
 VISTAL: [],
 MFO: [],
 MIRBUD: [],
 MOSTALPLC: [],
 MOSTALWAR: [],
 POLIMEXMS: [],
 ATERM: [],
 DECORA: [],
 AZOTY: [],
 CIECH: [],
 VRG: [],
 LPP: [],
 SOLAR: [],
 WITTCHEN: [],
 SANOK: [],
 INTERCARS: [],
 AGORA: []  
}


var all;
var selected;
var cc = {};

function mk_el(id) {
  const el = dd_source(mk("div", "chart"));
  el.id = id;
  el.innerText = id;
  all.appendChild(el);
  cc[id] = el;
  return el;
}


const dd = {

  allow : ev => { ev.preventDefault(); },

  cancel : ev => { ev.cancelBubble = true; },

  drag : ev => {
    ev.dataTransfer.setData("id", ev.target.id);
  },

  mark : ev => {
    //console.info("mark");
    ev.pos = ev.target.id;
  },

  drop : (ev,tgt) => {
    //console.info("drop");
    ev.preventDefault();
    const id = ev.dataTransfer.getData("id");

    if ("" == id)
      return;

    const where = ev.pos ? cc[ev.pos] : null;

    tgt.insertBefore(cc[id], where);
  }

}


function dd_source(el) {
  el.setAttribute('draggable', true);
  el.addEventListener('dragstart', ev => dd.drag(ev));
  el.addEventListener('dragover', ev => { dd.allow(ev) });
  el.addEventListener('drop', ev => { dd.mark(ev); });
  return el;
}

function dd_target(el) {
  el.addEventListener('dragover', ev => dd.allow(ev));
  el.addEventListener('drop', ev => dd.drop(ev,el));
  return el;
}

// ------------------------------------------------

function mk_chart(el) {
  return new ApexCharts(el, chart_options);
}

const chart_options = {
  series: [{
    name: 'test',
    data: data0
  }],
  chart: {
    type: 'candlestick',
    height: 256,
    width: 512,
    toolbar: { show: false },
    animations: { enabled: false },
    zoom: { enabled: false }
  },
  grid: {
    borderColor: "darkgray"
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    min : (m => 0.9*m),
    tickAmount: 6
  }
};

function get_el(id)
{
  return document.getElementById(id);
}

