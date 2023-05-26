
var data = [
    { id: 1, name: "mercedes" },
    { id: 2, name: "audi" },
    { id: 3, name: "ford" },
    { id: 4, name: " lamborghini" }
]
//Bai 1: show sản phẩm
function showProduct() {
    var list = this.data
    if (list.length > 0) {
        return `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          ${list.map((item) => {
            return `
              <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.name}</td>
              </tr>
              `
        }).join("")}


        </tbody>
      </table>
        `

    } else {
        console.log("Không có sản phẩm để hiển thị ")
    }

}
showProduct()
document.querySelector('#app').innerHTML = showProduct()

//Bai 2 Thêm sản phẩm

function AddProduct() {
    const idProduct = prompt("nhap id")
    const id = Number(idProduct)
    const nameProductA = prompt("nhap ten san Pham")
    if (nameProductA.length > 5) {
        const item = { id: id, name: nameProductA }
        this.data.push(item)
        console.log(data)
    } else {
        console.log("nhap lai ten san pham")
    }

}
AddProduct()


//Bài 3: Xóa sản phẩm

function DeleteProduct() {
    const nameSP = prompt("nhap ten san pham can xoa")
    var listData = this.data

    // const spXoa = listData.filter(item => {
    //     return (item.name !== nameSP)
    // })
    // console.log(spXoa)
    const spXoa = listData.find(item => {
        return (item.name == nameSP)
    })
    // console.log(spXoa.id)
    if (spXoa) {
        for (let item of listData) {
            // console.log(item.id)
            if (item.id == spXoa.id) {
                listData.splice(spXoa.id - 1, 1)
                console.log(listData)
            }

        }
    } else {
        console.log("Không tìm thấy sản phẩm cần xóa")
    }
}
DeleteProduct()

//Bài 4: update sản phẩm

function updateProduct() {
    const nameSP = prompt("nhap ten san pham can sua truoc")
    const nameUpdate = prompt("nhap ten san pham da sua")

    var listData = this.data
    const spUpdate = listData.find(item => {
        return (item.name == nameSP)
    })
    // console.log(spXoa.id)
    if (spUpdate) {
        for (let item of listData) {
            // console.log(item.id)
            if (item.id == spUpdate.id) {
                listData.splice(spUpdate.id - 1, 1, { id: spUpdate.id, name: nameUpdate })
                console.log(listData)
            }

        }
    } else {
        console.log("Không tìm thấy sản phẩm cần update")
    }



}
updateProduct()

function removeAllProduct() {
    const arraylength = this.data.length
    // console.log(arraylength)

    this.data.splice(0, arraylength)
    showProduct()

}
removeAllProduct()
