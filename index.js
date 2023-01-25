let searchParam = location.search.split("=").pop();

const accessKey = "cI-zVnPd8cSIcrhLixmx4rXX87Mw-wavm_qVO3mtRv0";

const randomPhotoURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;
const searchPhotoURL = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchParam}&per_page=50`;

const gallery = document.querySelector(".gallery");

let allImages;

const getImages = async () =>{

    const result = await fetch(randomPhotoURL);
    const data = await result.json();
    console.log(data);
    allImages = data;
    makeImages(allImages);
}

const searchImages = async () =>{
    const result = await fetch(searchPhotoURL);
    const data = await result.json();
    console.log(data.result);
    allImages = data.results;
    makeImages(allImages);
}

const makeImages = (data) => {
    // console.log(data);
    data.forEach((item, index) => {
        // console.log(item);
       let img = document.createElement("img");
       img.src = item.urls.regular;
       img.className = "gallery_img";

       gallery.appendChild(img);
    })
}
if(searchParam == ""){
    getImages();
}else{
    searchImages();
}
// getImages();