
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
    document.cookie = 'cookie1=value1; SameSite=Lax';
    
$(document).ready(function(){



    var API_KEY = "AIzaSyCOXRZbSuiWVLhfvzzhN-Sv8zMLgsyXjto"

    var video = ''

    
    
    $("#form").submit(function (event) {
        event.preventDefault()
        alert("form is submitted")
        var search1 = $("#search").val()

        videoSearch(API_KEY, search1, 10)
    })

    function videoSearch(key, search,max){

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key 
        + "&type=video&part=snippet&maxResults=" +max+ "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item => {
            
                video = `
                
                <iframe  width="420" height="315"
                src="https://www.youtube.com/embed/${item.id.videoID}" frameborder="0" allowfullscreen"
                 ></iframe> 
                
                `
                $("#videos").append(video)
                
            });

        });

        
    }

})


