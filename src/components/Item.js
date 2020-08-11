class Item{

    static lastId = localStorage.getItem("lastId");

    constructor(text){
        console.log(`Valor de lastId: ${Item.lastId}`);
        if (Item.lastId === isNaN || Item.lastId === null || Item.lastId === undefined) {
            Item.lastId = 0;
        }else{
            Item.lastId = parseInt(Item.lastId);
        }
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
        localStorage.setItem("lastId", Item.lastId);
    }

}

export default Item;