'use strict'

const pagination = document.getElementsByClassName("page-item");
const pagWrapper = document.querySelector('#pagination');

let state = 1;

pagWrapper.addEventListener('click', (e) => {
    setState(e.target.innerText)
})


function setState(nextState) {
    state = nextState;
    render();
}


function render() {
    const arr = pagination;
   for(let i = 0; i < arr.length; i++) {
    const span = arr[i].childNodes[1].childNodes[1];
    if (span.innerText == state) {
        arr[i].classList.add('active')
    } else {
        arr[i].classList.remove('active')
    }
   }
}

render();






// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', function(event) {
//         // console.log(e)
//         li[i].classList.add('active'); 
//         for (let a = 0; a < li.length; a++) {
//             if (a != i) {
//                 li[a].classList.remove('active');
//             }
//         }
//     });
// }
// let navBar = document.getElementsByClassName("nav-item");
//     for (let i = 0; i < navBar.length; i++) {
//         navBar[i].addEventListener('click', function() {
//             navBar[i].classList.add('active'); 
//             for (let a = 0; a < navBar.length; a++) {
//                 if (a != i) {
//                     navBar[a].classList.remove('active');
//                 }
//             }
//         });
//     }

// let card = document.getElementsByClassName("card");
//     for (let i = 0; i < card.length; i++) {
//         card[i].addEventListener('click', function() {
//             card[i].classList.add('active'); 
//             for (let a = 0; a < card.length; a++) {
//                 if (a != i) {
//                     card[a].classList.remove('active');
//                 }
//             }
//         });
//     }
    



// li[1].addEventListener('mouseenter', function() {
//     li.class.List.add('active');
//     console.log("sfgw")
// });
// li[1].addEventListener('mouseleave', function() {
//     li.class.List.remove('active');
//     console.log("sfgref")
// });


    // btn[1].addEventListener('mouseenter', function() {
    //     let li = document.getElementById("list");
    //     li.classList.add('active');
    //     // li.class.List.remove('active');
    //     console.log("sfgref")
    // })

    // let li = document.getElementsByClassName("page-item");
    // console.log(li);
    
        // console.log(i);
        // for (let i = 0; i < li.length; i++) {
        //     li.forEach(function());
        //     li[i].addEventListener('click', function() {
        //         li[i].classList.add('active');

                // li[--i].classList.remove('active');
                
                
                // console.log(li);
            // })}