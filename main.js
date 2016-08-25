const NUM_ADD = "NUM_ADD";
const NUM_REDUCE = "NUM_REDUCE";
const NAME_CHANGE = "NAME_CHANGE";

class App {
    init() {
        this.store = {
            name: "Ruby",
            num: 0
        };
        this.cacheDom();
        this.eventBinding();
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
        window.addEventListener("load",this.renderData.bind(this));
        window.addEventListener("resize",this.onWinResize.bind(this));
        this.addBtn.addEventListener("click",this.dispatch.bind(this,{type: NUM_ADD}));
        this.reduceBtn.addEventListener("click",this.dispatch.bind(this,{type: NUM_REDUCE}));
        this.myBtn.addEventListener("click",e=>{
            const name = this.myInput.value;
            this.dispatch(this.changeName(name));
        });
    }
    changeName(name) {
        return {type: NAME_CHANGE, name: name}
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
        this.renderData();
    }
    onWinResize() {
        console.log(window.innerWidth);
    }
    renderData() {
        this.num.innerText = this.store.num;
        this.name.innerText = this.store.name;
    }
    onKeyUp(e) {
        console.log(e.keyCode);
    }
}

const app = new App();
app.init();