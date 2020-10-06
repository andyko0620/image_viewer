var viewer_content = document.getElementById('display')
var viewer_url = document.getElementById('url')

var image=['images/1.jpg','images/2.jpg','images/3.jpg',
            'images/4.jpg','images/5.jpg'];

 var url=['https://images2.alphacoders.com/100/thumb-1920-1007550.jpg',
         'https://i.pinimg.com/originals/1e/30/68/1e30680a2c7cebe45e98975244cab9bd.jpg',
         'https://c4.wallpaperflare.com/wallpaper/508/596/918/anime-demon-slayer-kimetsu-no-yaiba-shinobu-kochou-hd-wallpaper-preview.jpg',
         'https://www.kolpaper.com/wp-content/uploads/2020/05/Demon-Slayer-Computer-Wallpaper.jpg',
         'https://24wallpapers.com/Content/Images/WallpaperImages/wi705bb27c74a-c76c-43c6-a7e2-fcfab36143f55.jpg']

var i=1;

function nextImage(){
    if(i>=0 && i<image.length-1){
        i++;
        if(i===1) 
            document.getElementById("previous").classList.remove("disabled");     
    }
    if(i===image.length-1){
        document.getElementById("next").classList.add("disabled");
    }
    viewer_content.src=url[i];
    viewer_url.href=url[i];
    viewer_url.innerHTML=url[i];
     
}

function prevImage(){
    if(i<image.length &&i>0){
        i--;
        if(i===image.length-2){
            document.getElementById("next").classList.remove("disabled");
        }
        
    }
    if(i===0){
        document.getElementById("previous").classList.add("disabled");
    }
    
    viewer_content.src=url[i];
    viewer_url.href=url[i];
    viewer_url.innerHTML=url[i];
}