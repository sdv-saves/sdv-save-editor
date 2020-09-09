export function find(path: string)  {
    const selector = this.querySelector(path);
    addFunctions(selector);
    return selector;
}

export function findAll(path: string) {
    let selectors = this.querySelectorAll(path);
    selectors.forEach(addFunctions);
    return Array.from(selectors);  
}

export function addFunctions(element) {
    element.find = find;
    element.findAll = findAll;
    element.child = new Proxy(element, proxyHandler);
    if (!('list' in element)) {
        Object.defineProperty(element, 'list', { 
            get: function() {
                const arr = Array.from(element.children); 
                arr.forEach(addFunctions); 
                return arr; 
            }
        });
    }
}

export const proxyHandler = {
    get(target, name, receiver) {
        const elements = target.getElementsByTagName(name); 
        if (elements && elements.length > 0) {
            if (elements[0].children && elements[0].children.length === 0) {
                return elements[0].textContent; 
            }
            else {
                addFunctions(elements[0]);
                return elements[0];
            }
        }
        return null; 
    },
    set(target, name, value, receiver) {
        const elements = target.getElementsByTagName(name); 
        if (elements && elements.length > 0 && elements[0].children.length === 0) {
            elements[0].textContent = value;
            return true;
        } else {
            if (elements && elements.length > 0) {
                elements[0] = value;
            }
        }
        return true;
    }
};