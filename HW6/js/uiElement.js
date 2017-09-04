var uiElement = (function () {
    function uiElement() { };
    uiElement.prototype.addYoutubeUIfunctionality = function () {

        var fragment = document.createDocumentFragment();

        var videosPerPage = page.getMaxNumberOfVideosPerPage();
        var currentPage = page.getCurrentPageNumber();

        var stringClipId = (currentPage - 1) * videosPerPage;
        var currentClipsPerpage = page.getTotalVideos().slice(stringClipId, stringClipId + videosPerPage);

        var clearOldClips = document.querySelectorAll(".mainDiv");
        for (var clipIndex = 0; clipIndex < clearOldClips.length; clipIndex++) {
            clearOldClips[clipIndex].parentNode.removeChild(clearOldClips[clipIndex]);
        }

        var paginationLayout = page.addPaginationLayout();
        fragment.appendChild(paginationLayout);

        var pagination = document.querySelector('#pagination');

        if (pagination) {
            pagination.parentElement.removeChild(pagination);
        }

        var currentPageNo = page.getCurrentPageNumber();
        var paginationDiv = fragment.querySelector('#pagination').firstElementChild;
        var activePage = paginationDiv.querySelector('#Page' + currentPageNo);

        if (!activePage) {
            activePage = paginationDiv.querySelector('#page' + currentPageNo);
        }

        var previousActivePage = paginationDiv.querySelector('.active');
        if (previousActivePage) {
            previousActivePage.classList.remove('active');
        }

        activePage.classList.add('active');

        for (var i = 0; i < currentClipsPerpage.length; i++) {
            var template = document.querySelector(".yt-template");
            var templateData = document.importNode(template.content, true);

            var mainDiv = templateData.querySelector(".mainDiv");
            mainDiv.setAttribute("style",
                " width: 330px; height: 350px;min-height: 400px;background : #f4edf4; margin: 15px;float: left");
            var image = templateData.querySelector(".yt-image");
            image.setAttribute("src", currentClipsPerpage[i].snippet.thumbnails.medium.url);
            image.setAttribute("height", currentClipsPerpage[i].snippet.thumbnails.medium.height);
            image.setAttribute("width", currentClipsPerpage[i].snippet.thumbnails.medium.width);
            image.setAttribute("style", "padding : 5px 5px 5px 5px;");

            var title = templateData.querySelector(".yt-title");
            title.setAttribute('href', 'https://www.youtube.com/watch?v=' + currentClipsPerpage[i].id.videoId);

            title.appendChild(document.createTextNode(currentClipsPerpage[i].snippet.title));

            var description = templateData.querySelector(".yt-description");

            description.appendChild(document
                .createTextNode("Description      : " + currentClipsPerpage[i].snippet.description));

            var publishedDate = templateData.querySelector(".yt-publishedDate");
            publishedDate.appendChild(document
                .createTextNode("Publication date : " + currentClipsPerpage[i].snippet.publishedAt));

            fragment.appendChild(templateData);
        }

        document.body.appendChild(fragment);
    }

    return uiElement;
})();