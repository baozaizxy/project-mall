/**
 * storage封装
 */
const STORAGE_KEY = 'mall';
export default{
    //存储值（）
    setItem(){

    },
    getItem(){
        this.getStorage();

    },
    getStorage(){
        return JSON.parse(window.settingStorage.getItem(STORAGE_KEY)||'{}');

    },
    clear(){

    }
}