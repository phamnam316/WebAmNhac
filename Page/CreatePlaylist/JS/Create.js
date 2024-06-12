const file = document.querySelector("#file")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#image").src = reader.result
  })
  reader.readAsDataURL(this.files[0]);
})


var username = document.querySelector(".card-title")
var btn = document.querySelector(".create")
btn.addEventListener("click", function(){
  if(username.value === "" ){
    alert("Xin hay nhập lại giá trị") 
  }else if(username.value !== ""){
    alert("Tạo playlist thành công")
    window.location = "../Playlist/Playlist_Page.html";
  }
})


