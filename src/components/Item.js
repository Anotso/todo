class Item{

    static lastId = 0;

    constructor(text, id){
        if (Item.lastId === 0 && id !== 0) {
            Item.lastId = id;
        }
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }

}

export default Item;