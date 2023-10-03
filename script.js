let inputValue = document.getElementsByClassName('search-box')[0]
const showBtn = document.getElementById('show-btn')
const itemBox = document.getElementById('item-box')

// async function getItems() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         console.log(response)
        
//         const data = await response.json()
//         console.log(data)
        
//         data.forEach((result) => {
//             const image = document.createElement('img')
//             image.src = result.image
//             itemBox.appendChild(image)
//         })
//     }

//     catch (error) {
//         console.error(error)
//     }
// }

async function getItems() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        
        const data = await response.json()
        console.log(data);
        
        const valueNumber = Number(inputValue.value)
        console.log('입력값', valueNumber)
        
        for (let i= 0; i < data.length; i++) {
            console.log('콘솔i', i);
            console.log('i의 평점', data[i].rating.rate)
            
            if (data[i].rating.rate >= valueNumber) {
                const image = document.createElement('img')
                image.src = data[i].image
                console.log('이미지', image)
                itemBox.appendChild(image)
            }
        }
    }
    catch (error) {
        console.error(error)
    }
}


showBtn.addEventListener('click', getItems)