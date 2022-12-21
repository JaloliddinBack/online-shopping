
let collected = document.querySelector(".collected")
let savats = []
let modal = document.querySelector(".modal-body")
let productDiv = document.querySelector(".productDiv")
let row = document.createElement("div")
row.classList.add("row")

//reRender(products)

function reRender(products){
    row.innerHTML = ""
    products.map((item, index) =>{
        
        let productImg = document.createElement("img")
        productImg.src = item.img_src
        productImg.style.width = "100%"
        productImg.style.height ="250px"
        productImg.style.boxShadow = "0 0 5px blue"

        let productName = document.createElement("p")
        productName.innerText = item.name
        productName.style.textAlign = "center"
        productName.style.color = "blue"
        productName.style.boxShadow = "0 0 10px blue"
        
        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")
        card.style.boxShadow = "0 0 5px blue"
    
        let col = document.createElement("div")
        col.classList.add("col-4")

        let button1 = document.createElement("button")
        button1.innerText = "Ko'rish"
        button1.setAttribute("onclick",`seeProducts(${index})` )
        button1.setAttribute("data-bs-toggle", "modal" )
        button1.setAttribute("data-bs-target", "#seeProduct" )
        button1.setAttribute("class", "btn btn-primary")
        document.querySelector("body").appendChild(button1)
        button1.style.boxShadow = "0 0 10px blue"

        let button2 = document.createElement("button")
        button2.innerText = "Sotib olish"
        button2.setAttribute("onclick",`buyProducts(${index})`)
        button2.setAttribute("class", "btn btn-success")
        button2.style.boxShadow = "0 0 10px green"

        card.appendChild(productImg)
        card.appendChild(productName)
        card.appendChild(button1)
        card.appendChild(button2)
        col.appendChild(card)
        row.appendChild(col)
        productDiv.appendChild(row)

    })
}

function searchTittle(key){
    let newCurrentName = products.filter(item =>{
    return item.name.toLowerCase().includes(key.value.toLowerCase())
    })
    reRender(newCurrentName)
  }

  
function sellectCategory(key){
    let sortCategory = products.filter(item =>{
    return item.category.toLowerCase().includes(key.value.toLowerCase())
    })
    reRender(sortCategory)
  }

function danGacha(){
  let dan = Number(document.querySelector(".danMin").value)
  let gacha = Number(document.querySelector(".gachaMax").value)

    let fromTo = products.filter(item =>{
    return Number(item.cost >= dan) && Number(item.cost <= gacha)
    })
   reRender(fromTo)
  }

  function seeProducts(index){
    currentIndex = index
    let titleHour  = document.createElement("p")
    titleHour.innerText = products[index].name

    let imgHour = document.createElement("img")
    imgHour.src = products[index].img_src
    imgHour.style.width = "350px"
    imgHour.style.height ="250px"

    let categoryHour = document.createElement("p")
    categoryHour.innerText = products[index].category

    let costHour = document.createElement("p")
    costHour.innerText = products[index].cost + " $"

    let countHour = document.createElement("p")
    countHour.innerText = products[index].count

    modal.innerHTML = ""
    modal.appendChild(imgHour)
    modal.appendChild(titleHour)
    modal.appendChild(costHour)
    modal.appendChild(countHour)
    modal.appendChild(categoryHour)
    
}

function mahsulotlar(){
  reRender(products)
}

function buyProducts(index){
  savats.push({
    id: products[index].id,
    name: products[index].name,
    cost: products[index].cost,
    count: products[index].count,
    category: products[index].category,
    img_src: products[index].img_src
  })
}

function savat(){
  row.innerHTML = ""
  savats.map(savat =>{
    let productImg = document.createElement("img")
    productImg.src = savat.img_src
    productImg.style.width = "100%"
    productImg.style.height ="250px"
    productImg.style.boxShadow = "0 0 5px blue"

    let productName = document.createElement("p")
    productName.innerText = savat.name
    productName.style.textAlign = "center"
    productName.style.color = "blue"
    productName.style.boxShadow = "0 0 10px blue"
    
    let productCategory = document.createElement("p")
    productCategory.innerText = savat.category
    productCategory.style.textAlign = "center"
    productCategory.style.color = "blue"
    productCategory.style.boxShadow = "0 0 10px blue"

    let productcost = document.createElement("p")
    productcost.innerText = savat.cost + " $"
    productcost.style.textAlign = "center"
    productcost.style.color = "blue"
    productcost.style.boxShadow = "0 0 10px blue"
    
    let card = document.createElement("div")
    card.classList.add("card", "m-3", "p-3")
    card.style.boxShadow = "0 0 5px blue"
    
    let col = document.createElement("div")
    col.classList.add("col-3")

    card.appendChild(productImg)
    card.appendChild(productName)
    card.appendChild(productcost)
    card.appendChild(productCategory)
    col.appendChild(card)
    row.appendChild(col)
    collected.appendChild(row)

  })

}