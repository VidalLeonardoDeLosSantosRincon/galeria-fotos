(function(){
    let photo = document.getElementById("photo"),
    fileChooseField = document.getElementById("file-choose"),
    form = document.forms["formulario"];


    photo.addEventListener("change",(e)=>{
        fileChooseField.innerHTML = e.target.files[0].name;
    });

    function sendPhoto(_title,_photo){
        let formData = new FormData();
        formData.append("title",_title);
        formData.append("photo",_photo);

        fetch("http://localhost/json/php/api%20galeria/php/upload_image.php",{
            method:"POST",
            body: formData,
            mode:"no-cors"
        }).then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((er)=>console.log(er));
    }

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let title = e.target["title"].value,
            picture = e.target["photo"].files[0];
            if(title.trim()==="" || picture.trim()===""){
                alert("Empty fields are allowed");
            }else{
                sendPhoto(title,picture);
            }
    })


    
})();