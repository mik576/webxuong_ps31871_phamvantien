const code_menu = () => {
    let str = ``;
    str += `<li> <a href="#">Trang chủ</a> </li> `;
    str += `<li> <a href="#listdulich"> du lịch </a> </li> `;
    str += `<li> <a href="#trongnuoc-list">du lịch trong nước </a> </li> `;
    str += `<li> <a href="#ngoainuoc-list">du lịch ngoài nước </a> </li> `;
    str += `<li>
              <a href="#">Dịch vụ <span>&#x25BC;</span></a>
              <ul class="submenu">
                <li><a href="#">Đăng ký  </a></li>
                <li><a href="#">Đăng nhập  </a></li>
                <li><a href="#">Đơn hàng</a></li>
                 <li><a href="#">giỏ hàng</a></li>
              </ul>
            </li>`;
    return `<ul>${str}</ul>`;
};
const code_header = () => {
    let str = ``;
    str += `
    <div class="navbar">
        <div class="sodienthoai">
            <a class="navbar-brand" href="sodienthoai">
                <h1><span>Hotline: <strong class="eff text-warning">1900 1177</strong></span></h1>
            </a>
        </div>
        <div class="ngonngu">
            <a class="nav-link text-red" href="ngonngu"><h1>English</h1></a>
            <a class="nav-link text-red" href="ngonngu"><h1>Tiếng Việt</h1></a>
        </div>
    </div>
`;
    return `<ul>${str}</ul>`;
};
