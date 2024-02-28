console.log("1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки")
const arr = [1, 5, 7, 9]
console.log(Math.min(...arr))

console.log("2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.")

const createCounter = () => {
    let increment = 0
    let decrement = 0
    return () => {
        return {
            increment: ++increment,
            decrement: --decrement
        }
    }
}

const counter = createCounter()
console.log(counter().increment)
console.log(counter().decrement)
console.log(counter().increment)

console.log("3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.")

const rootElem = document.body
let elemFound

function findElementByClass (root, myClass) {
    //  console.log(root)
    if (root.classList.contains(myClass)) return root
    else {
        for (let i = 0; i < root.children.length; i ++) {
            if (root.children[i].classList.contains(myClass)) return root.children[i]
            elemFound = findElementByClass(root.children[i], myClass)
        }
    }
    return elemFound ? elemFound : "not found"
}

console.log(findElementByClass(rootElem, "my-class"))
