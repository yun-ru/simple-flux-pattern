const NUM_ADD = "NUM_ADD";
const NUM_REDUCE = "NUM_REDUCE";
const NAME_CHANGE = "NAME_CHANGE";

class Action {
    changeName(name) {
        return {type: NAME_CHANGE, name: name}
    }
    addNum() {
        return {type: NUM_ADD}
    }
    reduceNum() {
        return {type: NUM_REDUCE}
    }
}


class Store {
    init() {
        this.name = "Ruby";
        this.num = 0;
    }
    dispatch(action) {
        switch(action.type){
            case NUM_ADD:
                this.store = Object.assign({},this.store,{num: this.store.num+1});
                break;
            case NUM_REDUCE:
                this.store = Object.assign({},this.store,{num: this.store.num-1});
                break;
            case NAME_CHANGE:
                this.store = Object.assign({},this.store,{name: action.name});
                break;
            default:
                break;
        }
        console.log(this.store);
    }
}


class Main {
    init() {
        this.cacheDom();
        this.eventBinding();
        this.store = new Store();
        this.store.init();
        this.dispatch = this.store.dispatch;
        this.action = new Action();
    }
    cacheDom() {
        this.num = document.getElementById("num");
        this.name = document.getElementById("name");
        this.addBtn = document.getElementById("addBtn");
        this.reduceBtn = document.getElementById("reduceBtn");
        this.myInput = document.getElementById("myInput");
        this.myBtn = document.getElementById("myBtn");
    }
    eventBinding() {
        window.addEventListener("load",this.render.bind(this));
        this.myBtn.addEventListener("click",this.handleNameSubmit.bind(this));
        this.addBtn.addEventListener("click",this.handleNumAdd.bind(this));
        this.reduceBtn.addEventListener("click",this.handleNumReduce.bind(this));
    }
    handleNameSubmit() {
        const name = this.myInput.value;
        this.dispatch(this.action.changeName(name));
        this.render();
    }
    handleNumAdd() {
        this.dispatch(this.action.addNum());
        this.render();
    }
    handleNumReduce() {
        this.dispatch(this.action.reduceNum());
        this.render();
    }
    render() {
        this.num.innerText = this.store.num;
        this.name.innerText = this.store.name;
    }
}

const app = new Main();
app.init();