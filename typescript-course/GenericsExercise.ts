interface EditableDictionary<T extends number | string> {
    
    /**
     * Create a new key-value pair
     * @param key string
     * @param item T
     */
    setItem(key: string, item: T): void;
    
    /**
     * Retrieve the value of the provided key
     * @param key: string
     */
    getItem(key: string): T | null;
    
    /**
     * Remove all key-value pairs
     */
    clear(): void;

    /**
     * Output key-value pairs
     */
    printMap(): void;
}

class MyMap<T extends number | string> implements EditableDictionary<T> {
    private map: { [key: string]: T } = {};
    
    setItem = (key: string, item: T): void => {
        this.map[key] = item;
    }

    getItem = (key: string): T | null => {
        return this.map[key] ? this.map[key] : null;
    }

    clear = (): void => {
        this.map = {};
    }

    printMap = (): void => {
        Object.keys(this.map).forEach((key: string) => {
            console.log(`${key}: ${this.map[key]}`);
        });
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();