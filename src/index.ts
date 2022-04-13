import './styles/main.scss';
import { showMessage } from './lib/dom';

// // 1. asynchronious using callbacks
// async function bake() {
//     const title = 'Baking cookies';
//     let counter = 0;

//     console.clear();
//     console.group(title);

//     counter++;
//     console.log(`${counter} - Add ingredients`);
//     showMessage(`${counter} - Add ingredients`, title);

//     counter++;
//     console.log(`${counter} - Mix ingredients`);
//     showMessage(`${counter} - Mix ingredients`, title, true);

    // function bakeInOven(cb: () => void) {
    //     setTimeout(() => {
    //         counter++;
    //         console.log(`${counter} - Bake at 325 degrees for 10 minutes`);
    //         showMessage(
    //             `${counter} - Bake at 325 degrees for 10 minutes`,
    //             title,
    //             true,
    //         );
    //         cb();
    //     }, 3000);
//     }

//     bakeInOven(eat);

//     function eat() {
//         counter++;
//         console.log(`${counter} - Eat cookies`);
//         showMessage(`${counter} - Eat cookies`, title, true);

//     console.groupEnd();
//     }

    
// }

// // 2. asynchronious using Promise
// async function bake() {
//     const title = 'Baking cookies';
//     let counter = 0;

//     console.clear();
//     console.group(title);

//     counter++;
//     console.log(`${counter} - Add ingredients`);
//     showMessage(`${counter} - Add ingredients`, title);

//     counter++;
//     console.log(`${counter} - Mix ingredients`);
//     showMessage(`${counter} - Mix ingredients`, title, true);

//     const bakeOven = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             counter++;
//             console.log(`${counter} - Bake at 325 degrees for 10 minutes`);
//             showMessage(
//                 `${counter} - Bake at 325 degrees for 10 minutes`,
//                 title,
//                 true,
//             );
//             resolve(true);  // resolve triggers 'then'
//         }, 3000);
//     });

//     bakeOven.then(eat);

//     function eat() {
//         counter++;
//         console.log(`${counter} - Eat cookies`);
//         showMessage(`${counter} - Eat cookies`, title, true);

//     console.groupEnd();
//     }

    
// }

async function bake() {
    const title = 'Baking cookies';
    let counter = 0;

    console.clear();
    console.group(title);

    counter++;
    console.log(`${counter} - Add ingredients`);
    showMessage(`${counter} - Add ingredients`, title);

    counter++;
    console.log(`${counter} - Mix ingredients`);
    showMessage(`${counter} - Mix ingredients`, title, true);

    function* bakeOven() {
        yield new Promise((resolve, reject) => {
            function magic() {
                counter++;
                console.log(`${counter} - Bake at 325 degrees for 10 minutes`);
                showMessage(
                    `${counter} - Bake at 325 degrees for 10 minutes`,
                    title,
                    true,
                );
                resolve(true);
            }
            setTimeout(magic, 3000);
        });
    };

    const b = bakeOven()
    b.next().value.then(eat);

    function eat() {
        counter++;
        console.log(`${counter} - Eat cookies`);
        showMessage(`${counter} - Eat cookies`, title, true);

    console.groupEnd();
    }

    
}

// @ts-ignore
document.querySelector('#bake-cookies').addEventListener('click', async () => {
    bake();
});