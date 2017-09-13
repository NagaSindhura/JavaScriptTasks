var uiElement = (function () {
    function uiElement() { };
    uiElement.prototype.addYoutubeUIfunctionality = function () {

        var fragment = document.createDocumentFragment(),
            videosPerPage = page.getMaxNumberOfVideosPerPage(),
            currentPage = page.getCurrentPageNumber();
            stringClipId = (currentPage - 1) * videosPerPage,
            currentClipsPerpage = page.getTotalVideos().slice(stringClipId, stringClipId + videosPerPage),
            clearOldClips = document.querySelectorAll(".mainDiv"),
            paginationLayout = page.addPaginationLayout(),
            pagination = document.querySelector('#pagination'),
            currentPageNo = page.getCurrentPageNumber(),
            paginationDiv = null,
            activePage = null,
            previousActivePage = null;
            
            
        for (var clipIndex = 0; clipIndex < clearOldClips.length; clipIndex++) {
            clearOldClips[clipIndex].parentNode.removeChild(clearOldClips[clipIndex]);
        }

        fragment.appendChild(paginationLayout);

        if (pagination) {
            pagination.parentElement.removeChild(pagination);
        }

        paginationDiv = fragment.querySelector('#pagination').firstElementChild;
        activePage = paginationDiv.querySelector('#Page' + currentPageNo);

        if (!activePage) {
            activePage = paginationDiv.querySelector('#page' + currentPageNo);
        }

        previousActivePage = paginationDiv.querySelector('.active');
        if (previousActivePage) {
            previousActivePage.classList.remove('active');
        }

        activePage.classList.add('active');

        for (let i = 0; i < currentClipsPerpage.length; i++) {
            var template = document.querySelector(".yt-template"),
                templateData = document.importNode(template.content, true),
                mainDiv = templateData.querySelector(".mainDiv"),
                image = templateData.querySelector(".yt-image"),
                title = templateData.querySelector(".yt-title"),
                description = templateData.querySelector(".yt-description"),
                publishedDate = templateData.querySelector(".yt-publishedDate"),
                publishedDate = templateData.querySelector(".yt-publishedDate");
   
            image.setAttribute("src", currentClipsPerpage[i].snippet.thumbnails.medium.url);
            image.setAttribute("height", currentClipsPerpage[i].snippet.thumbnails.medium.height);
            image.setAttribute("width", currentClipsPerpage[i].snippet.thumbnails.medium.width);
            image.setAttribute("style", "padding : 5px 5px 5px 5px;");

            title.setAttribute('href', 'https://www.youtube.com/watch?v=' + currentClipsPerpage[i].id.videoId);
            title.appendChild(document.createTextNode(currentClipsPerpage[i].snippet.title));

            description.appendChild(document
                .createTextNode("Description      : " + currentClipsPerpage[i].snippet.description));

            publishedDate.appendChild(document
                .createTextNode("Publication date : " + currentClipsPerpage[i].snippet.publishedAt));

            fragment.appendChild(templateData);
        }

        document.body.appendChild(fragment);
    }

    return uiElement;
})();