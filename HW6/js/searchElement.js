var searchElement = (function () {
    function searchElement() { };
    searchElement.prototype.addSearchfunctionality = function () {
        var ySearchElementDv = document.createElement("div");
        ySearchElementDv.classList.add('div-search');

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

        alert(searchText.value);
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=' + searchText.value)
               .then(function (response) {

                   response.json().then(function (kind) {
                       page.setTotalVideos(kind.items);
                       page.setCurrentPageNumber(1);
                       ui.addYoutubeUIfunctionality();
                   });

               }, function (error) {
                   console.log(error);
               });
    }

    return searchElement;
})();