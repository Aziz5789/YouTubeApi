
$(document).ready(function(){



    var API_KEY = "AIzaSyCOXRZbSuiWVLhfvzzhN-Sv8zMLgsyXjto"

    var video = ''

    
    
    $("#form").submit(function (event) {
        event.preventDefault()
        $("#results").empty()
        $("#videos").empty()


        var search1 = $("#search").val()

        videoSearch(API_KEY, search1, 10)
    })

    function videoSearch(key, search,max){

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key 
        + "&type=video&part=snippet&maxResults=" +max+ "&q=" + search, function(data){
            console.log(data)

            var videoData = "";

             $("#table").show();

             data.items.forEach((item) => {
                     videoData = `
                    
                    <tr class="trow" id="${item.id.videoId}">
                    <td>
                    ${item.snippet.title}</td>
                    <td>
                    <img width="200" height="200" src="${item.snippet.thumbnails.high.url}"/>
                    </td>
                    <td>
                    <a target="_blank" href="https://www.youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a>
                    </td>
                    </tr>

                    `;

                  $("#results").append(videoData);
             });

        });

        
    }

    $('#results').on('click', 'tr', function() {
        $("#videos").empty();

        var vidID = $(this).closest('tr').attr('id');
        video = `
                
                <iframe  width="0" height="0"
                src="https://www.youtube.com/embed/${vidID}?autoplay=1" allow="autoplay" frameborder="0" 
                 ></iframe> 
                
                `
                $("#videos").append(video)

       
    });

    $('#results').on('vclick', 'tr', function() {
        $("#videos").empty();

        var vidID = $(this).closest('tr').attr('id');
        video = `
                
                <iframe  width="0" height="0"
                src="https://www.youtube.com/embed/${vidID}?autoplay=1" allow="autoplay" frameborder="0" 
                 ></iframe> 
                
                `
                $("#videos").append(video)

       
    });

    
})


