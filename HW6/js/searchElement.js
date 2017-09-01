var searchElement = (function () {
    function searchElement() { };
    searchElement.prototype.addSearchfunctionality = function () {
        var ySearchElementDv = document.createElement("div");

        var title = document.createElement("h2");
        title.appendChild(document.createTextNode("Youtube Search Application"));

        var ySearchInputTxb = document.createElement("input");
        ySearchInputTxb.setAttribute("id", "ySearchInputTxb");
        ySearchInputTxb.setAttribute("type", "text");

        var ySearchBtn = document.createElement("input");
        ySearchBtn.setAttribute("type", "button");
        ySearchBtn.setAttribute("value", "search");
        ySearchBtn.addEventListener("click", this.mapSearchInputResults);

        var hrElement = document.createElement("hr");

        ySearchElementDv.appendChild(title);
        ySearchElementDv.appendChild(ySearchInputTxb);
        ySearchElementDv.appendChild(ySearchBtn);
        ySearchElementDv.appendChild(hrElement);

        document.body.appendChild(ySearchElementDv);
    }




    searchElement.prototype.mapSearchInputResults = function () {
        var searchText = document.querySelector("#ySearchInputTxb");

        //alert(searchText.value);
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=' + searchText.value)
               .then(function (response) {

                   var testDivMain = document.createElement("div");
                   var fragment = document.createDocumentFragment();
                   var fragment1 = document.createDocumentFragment();

                   var a = document.querySelectorAll(".mainDiv");
                   for (var i = 0 ; i < a.length; i++) {
                       a[i].parentNode.removeChild(a[i]);
                   }

                   response.json().then(function (kind) {

                       debugger;
                       page.setTotalVideos(kind.items);
                       var maxNumberPages = page.getMaxPageNumbers();
                       var videosPerPage = page.getMaxNumberOfVideosPerPage();
                       var currentPage = page.getCurrentPageNumber();

                       var i = (currentPage - 1) * maxNumberPages;
                       //var j;
                       var temparray = kind.items.slice(i, i + videosPerPage);
                       //for (var i = 0, j = kind.items.length; i < j; i += videosPerPage) {
                       //    temparray = kind.items.slice(i, i + videosPerPage);
                       //}

                       for (var i = 0 ; i < temparray.length; i++) {

                           var template = document.querySelector(".yt-template");
                           var templateData = document.importNode(template.content, true);

                           var mainDiv = templateData.querySelector(".mainDiv");
                           mainDiv.setAttribute("style", " width: 330px; height: 350px;min-height: 400px;background : #f4edf4; margin: 15px;float: left")

                           var image = templateData.querySelector(".yt-image");
                           image.setAttribute("src", temparray[i].snippet.thumbnails.medium.url);
                           image.setAttribute("height", temparray[i].snippet.thumbnails.medium.height);
                           image.setAttribute("width", temparray[i].snippet.thumbnails.medium.width);
                           image.setAttribute("style", "padding : 5px 5px 5px 5px;");

                           var titleDiv = templateData.querySelector(".title-div");

                           var title = templateData.querySelector(".yt-title");
                           title.setAttribute('href', 'https://www.youtube.com/watch?v=' + temparray[i].id.videoId);

                           title.appendChild(document.createTextNode(temparray[i].snippet.title));


                           var subDiv = templateData.querySelector(".sub-div");
                           var ul = document.querySelector(".yt-ul");

                           var description = templateData.querySelector(".yt-description");
                           //description.setAttribute("width", "300px");

                           description.appendChild(document.createTextNode("Description      : " + temparray[i].snippet.description));

                           var publishedDate = templateData.querySelector(".yt-publishedDate");
                           publishedDate.appendChild(document.createTextNode("Publication date : " + temparray[i].snippet.publishedAt));

                           if (i == 0) {
                               var n = Name();
                               fragment.appendChild(n);
                           }

                           fragment.appendChild(templateData);
                       }

                       //var hrElement1 = document.createElement("hr");
                       //fragment.appendChild(hrElement1);

                       //var n = Name();
                       //fragment.appendChild(n);
                       //debugger;

                       function Name() {
                           debugger;

                           for (var number = 0; number < maxNumberPages; number++) {

                               debugger;

                               //var ySearchElementDv = document.createElement("div");

                               var ySearchBtn1 = document.createElement("input");
                               ySearchBtn1.setAttribute("type", "button");
                               ySearchBtn1.setAttribute("value", "Page - " + (number + 1));
                               //ySearchBtn.addEventListener("click", this.paginationXXX);
                               ySearchBtn1.addEventListener("click", function () {
                                   var XX = "Page - " + (number + 1);
                                   alert(XX);
                                   //iffi to resove this issue
                                   //return this.paginationXXX(XX);
                               });
                               fragment1.appendChild(ySearchBtn1);

                               //var pagingtemplate = document.querySelector(".yt-Pagination");
                               //var pagingtemplateData = document.importNode(pagingtemplate.content, true);

                               ////var youtubePagination = pagingtemplateData.querySelector(".yt-PageNo");
                               //var youtubePagination = document.createElement("input");
                               ////pagingtemplateData.setAttribute("style", " width: 60px;");
                               //youtubePagination.setAttribute("style", " width: 100px;height: 20px");
                               //youtubePagination.setAttribute("type", "button");
                               //youtubePagination.setAttribute("value", "Page - " + (number + 1));

                               ////var youtubePageNo = youtubePagination.querySelector(".yt-PageNo");
                               //youtubePagination.addEventListener("click", this.paginationClick);

                               ////youtubePagination.appendChild(document.createTextNode(`Page - ${number + 1}`));


                               //fragment1.appendChild(pagingtemplateData);


                               //var pagingtemplate = document.querySelector(".yt-Pagination");
                               //var pagingtemplateData = document.importNode(pagingtemplate.content, true);

                               //var youtubePagination = pagingtemplateData.querySelector(".yt-PageNo");

                               ////var youtubePageNo = youtubePagination.querySelector(".yt-PageNo");
                               //youtubePagination.addEventListener("onclick", this.paginationClick);
                               //youtubePagination.appendChild(document.createTextNode("Page - " + (number + 1)));


                               //fragment1.appendChild(pagingtemplateData);
                           }

                           return fragment1;
                       }


                       document.body.appendChild(fragment);
                   });

               }, function (error) {

                   console.log(error);

               });
    }

    searchElement.prototype.paginationXXX = function (a) {
        alert("Hi" + a);
    }


    return searchElement;
})();