// Menyimpan jumlah item yang sudah ditambahkan ke keranjang
let cartCount = 0;

function tambahKeranjang(namaMenu) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  console.log(namaMenu + ' ditambahkan ke keranjang');
}
