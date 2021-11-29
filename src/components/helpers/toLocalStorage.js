export function saveToLocalStorage(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj));
}

export function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

export function removeFromLocalStorage(name){
    localStorage.removeItem(name);
}