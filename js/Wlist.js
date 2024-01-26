const tableBody = document.querySelector("tBody")
const clearBtn = document.querySelector(".clear-cart")
let cartData = JSON.parse(localStorage.getItem("wish")) || []

function display() {
    let list = ""
    for (let i = 0; i < cartData.length; i++){
        list += `
        <tr>
            <td scope="col">${i+1}</td>
            <td scope="col">${cartData[i].name}</td>
            <td scope="col"><img src="${cartData[i].image_url[0]}"" class="card-img-top img-fluid" style="width: 100px"></td>
            <td scope="col">${cartData[i].price}</td>
            <td scope="col"><button class="btn btn-danger" onclick="deleteRow(${i})">Remove</button></td>
            <td scope="col"><button class="btn btn-primary" onclick="addCart(${cartData[i].product_id})">add to cart</button></td>
        </tr>
        `
    }
    tableBody.innerHTML = list
}
display()


function deleteRow(index){
    if(cartData[index].count>0){
        cartData[index].count-=1;
        display()
    }
    else{
        cartData.splice(index,1)
        display()
    }
}

clearBtn.addEventListener('click',()=>{
    cartData = [];
    display()
})