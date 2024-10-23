const URL_API =`http://localhost:3000`;
type  Tdiadiem ={    
    id: number ,
    kind : string
}
interface Idu_lich  {
    id: number ;
    ten:string ;
    kind:Tdiadiem ; 
    image : string ;
    sale : number ;
    duration : string ;
    transport : string ;
    start :string ;
    hot : number 
 }

 



 export const lay_diadiem = async () => {
    let diadiem_arr:Tdiadiem[];
    diadiem_arr =  await fetch(URL_API + `/diadiem`).then( res => res.json()).then ( data => {return data});
    let str = `<li class="nav-item"><a class="nav-link fw-bold" href="index.html">Trang Chủ</a></li>`;
    diadiem_arr.forEach( diadiem =>{
       str+=`<li id="${diadiem.kind}" class="nav-item"><a class="nav-link" href = "sptrongloai.html?id=${diadiem.id}">${diadiem.kind}</a></li>`;
    })
    console.log(diadiem_arr);
    return `<ul class="navbar-nav">${str}</ul>`;
}

export const lay_ten_loai = async (id) => {
    let loai:Tdiadiem;
    try {
       loai =  await fetch(URL_API + `/diadiem/${id}`).then( res => res.json()).then ( d => d);
    }     
    catch(err){
        return `Không có .  (Không có id loại là ${id})`;
    };
    return `${loai.kind}`;
}


const code_mot_sp = (sp:Idu_lich):string => {
    return `    
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div class="card">
                <img src="${sp.image}" class="card-img-top img-fluid" alt="${sp.ten}">
                <div class="card-body">
                    <h5 class="card-title">${sp.ten}</h5>
                    <p class="card-text">Giá: ${Number(sp.sale).toLocaleString("vi")} VND</p>
                    <p class="card-text">ngày đi: ${new Date(sp. start).toLocaleDateString("vi")}</p>
                    <a href="chitietsp.html?id=${sp.id}" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
    </div>`;
}

export const lay_sp_trong_loai = async (id) => {
    let sp_arr:Idu_lich[];
    let url = URL_API + `/du_lich?id_diadiem=${id}`;
    sp_arr = await fetch(url).then( res => res.json()).then ( d => d);
    console.log(sp_arr);
    let str=``;
    sp_arr.forEach( sp => str+= code_mot_sp(sp));
    return str;
}

export const lay_sp_tu_id = async (id) => {
    let sp_arr:Idu_lich[];
    let url = URL_API + `/du_lich?id=${id}`;
    sp_arr = await fetch(url).then( res => res.json()).then ( d => d);
    console.log(sp_arr);
    let str=``;
    sp_arr.forEach( sp =>{      
    str+=  `<div class="container mt-5">
    <div class="row">
        <!-- Phần trái: Hiển thị hình ảnh sản phẩm -->
        <div class="col-md-6">
            <img src="${sp.image}" alt="${sp.ten}" class="img-fluid">
        </div>
        <!-- Phần phải: Thông tin chi tiết sản phẩm -->
        <div class="col-md-6">
            <h2>${sp.ten}</h2>
             <p>${sp.kind}</p>
              <p>${sp.transport}</p>
              <p>${sp.duration}</p>
              <p>${sp.start}</p>
            <p>Giá: ${Number(sp.sale).toLocaleString("vi")} vn₫</p>
            <div class="d-flex">
                <a class="btn btn-primary me-2" id="add-to-cart-${sp.id}" href="giohang.html">Thêm vào giỏ hàng</a>
                <a class="btn btn-danger" href="top">Mua ngay</a>
            </div>  
            </div>
        </div>
    </div>`;
    })
    return str;
}

export const lay_sp = async () => {
    let sanpham_arr:Idu_lich[];
    sanpham_arr =  await fetch(URL_API + `/du_lich`).then( res => res.json()).then ( data => {return data});
    let str = ` `;
    sanpham_arr.forEach( sanpham =>{
       str+=code_mot_sp(sanpham);  
    })
    console.log(sanpham_arr);
    return str;
}

export const lay_sp_moi = async (so_sp=6) => {
    let sp_arr:Idu_lich[];
    let url = URL_API + `/du_lich?_sort=-ngay&_limit=${so_sp}`;
    sp_arr = await fetch(url).then( res => res.json()).then ( d => d);
    let str=``;
    sp_arr.forEach( sp => str+= code_mot_sp(sp));
    return str;
}

export const lay_sp_hot = async (so_sp=6) => {
    let sp_arr:Idu_lich[];
    let url = URL_API + `/du_lich?hot=1&_limit=${so_sp}`;
    sp_arr = await fetch(url).then( res => res.json()).then ( d => d);
    let str=``;
    sp_arr.forEach( sp => str+= code_mot_sp(sp));
    return str;
}

export const lay_sp_xem_nhieu = async (so_sp=6) => {
    let sp_arr:Idu_lich[];
    let url = URL_API + `/du_lich?_sort=-luot_xem&_limit=${so_sp}`;
    sp_arr = await fetch(url).then( res => res.json()).then ( d => d);
    let str=``;
    sp_arr.forEach( sp => str+= code_mot_sp(sp));
    return str;
}

const gioHang: Idu_lich[] = JSON.parse(localStorage.getItem('gioHang') || '[]');

export const hienThiGioHang = () => {
    const cartDataContainer = document.getElementById('cart-data');
    const emptyMessage = "Giỏ hàng của bạn đang trống.";

    if (gioHang.length === 0) {
        cartDataContainer.innerHTML = `<p>${emptyMessage}</p>`;
        return;
    }

    cartDataContainer.innerHTML = gioHang.map(sp => `
        <div>
            <h5>${sp.ten}</h5>
            <p>Giá: ${Number(sp.sale).toLocaleString("vi")} vn₫</p>
            <button class="btn btn-danger">Xóa</button>
        </div>
    `).join('');
};









const code_menu = () => {
    let str: string = ``;
    str += `<li> <a href="#">Trang chủ</a> </li>`;
    str += `<li> <a href="#sptrongloai">Du lịch</a> </li>`;
    str += `<li> <a href="#trongnuoc-list">Địa điểm nổi tiếng </a> </li>`;
    str += `<li> <a href="#ngoainuoc-list">giới thiệu</a> </li>`;
    str += `<li>
              <a href="#">Dịch vụ <span>&#x25BC;</span></a>
              <ul class="submenu">
                <li><a href="#">Đăng ký</a></li>
                <li><a href="#">Đăng nhập</a></li>
                <li><a href="#">Giỏ hàng</a></li>
              </ul>
            </li>`;

    return `<ul>${str}</ul>`;
} // code_menu

const code_header = () => {
    let str = ``;
    str += `
    <div class="navbar">
        <div class="sodienthoai">
            <a class="navbar-brand" href="#">
                <h1><span>Hotline: <strong class="eff text-warning">1900 1177</strong></span></h1>
            </a>
        </div>
        <div class="ngonngu">
            <a class="nav-link text-red" href="#"><h1>English</h1></a>
            <a class="nav-link text-red" href="#"><h1>Tiếng Việt</h1></a>
        </div>
    </div>
    `;
    return str; // Trả về đoạn div
} // code_header
   



document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#menu").innerHTML = code_menu();
    document.querySelector("#header").innerHTML = code_header();
});



  