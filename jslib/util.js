const { Readable } = require('stream');
const { EventEmitter } = require('events');


function error(...msg) {
  console.error(...msg);
}

function log(...msg) {
  console.log(...msg)
}

function info (...args) {
  console.info(...args);
}

function debug (...msg) {
  console.debug(...msg);
}


function *classes_of(obj) {

  let proto = obj;

  while (true) {
    proto = Object.getPrototypeOf(proto)
    if (!proto)
      break;
    yield proto;
  }
}


function sleep(time)
{
  return new Promise(resolve => {
    setTimeout(resolve, 1000*time);
  });
}

function idle() {
  return new Promise(resolve => {
    setTimeout(resolve);
  });
}



class Set extends EventEmitter {

  constructor() {
    super();
    this.data = new global.Set();
  }

  async add(...els) {
    for(let e of els) {
      this.data.add(e);
      this.push({add: e});
    }
  }

  async rm(...els) {
    for(let e of els) {
      if (!this.data.has(e))
        continue;
      this.data.delete(e);
      this.push({rm: e});
    }
  }

  snap() {
    this.push({snap: [...this.data]});
  }

  push(x) { this.emit('data',x); }
};


class Pipe extends Readable
{

  constructor() {
    super({
      
      objectMode: true,
      highWaterMark: 0,

      read: function() {}
/*
        if (0 == self.queue.length) {
          self.wait = this;
          return;
        }

        this.push(self.queue.shift());
      }
*/
    });

    let self = this;
    this.queue = [];
  }

  write(data) {

    if (this.wait) {
      const wait = this.wait;
      this.wait = null;
      wait.push(data);
    }
    else
      this.queue.push(data);
  }
}



module.exports = {
  classes_of, log, info, debug,
  sleep, idle, Pipe, Set
};
