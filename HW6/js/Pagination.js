var Pagination = (function () {
    function Pagination() { };

    Pagination.prototype.getMaxNumberOfVideosPerPage = function () {
        var windowInnerWidth = window.innerWidth;
        var requiredPixelPerPage = 370;

        return Math.floor((windowInnerWidth / requiredPixelPerPage));
    };

    Pagination.prototype.getMaxPageNumbers = function () {
        if (!page.totalVideos) {
            return 0;
        }

        return Math.ceil((page.totalVideos.length / this.getMaxNumberOfVideosPerPage()));
    }

    Pagination.prototype.setTotalVideos = function (videos) {
        page.totalVideos = (this.videos || []).concat(videos);
    }

    Pagination.prototype.getTotalVideos = function () {
        return page.totalVideos;
    }

    Pagination.prototype.setCurrentPageNumber = function (pageNumber) {
        page.currentPageNumber = pageNumber;
    }

    Pagination.prototype.getCurrentPageNumber = function () {
        return page.currentPageNumber || 1;
    }

    Pagination.prototype.addPaginationLayout = function () {

        var paginationGrid = document.createElement('div');
        paginationGrid.setAttribute('id', 'pagination');
        var paginationlayout = document.createElement('div');
        paginationlayout.classList.add('paginationLayout');
        var paginationFragment = document.createDocumentFragment();

        var maxNumberPages = page.getMaxPageNumbers();

        for (let pageNo = 0; pageNo < maxNumberPages; pageNo++) {

            var pageElement = document.createElement("a");

            var number = pageNo;
            var currentPageNo = function () { return number + 1; };

            pageElement.appendChild(document.createTextNode(currentPageNo()));
            pageElement.setAttribute("id", "Page" + (currentPageNo()));
            pageElement.setAttribute('href', '#');
            pageElement.addEventListener("click", function () {
                var cPageNo = pageNo;
                var cClickPageNo = function () { return cPageNo + 1; };

                page.setCurrentPageNumber(cClickPageNo());
                ui.addYoutubeUIfunctionality();

            });

            paginationFragment.appendChild(pageElement);
        }

        paginationlayout.appendChild(paginationFragment);
        paginationGrid.appendChild(paginationlayout);

        return paginationGrid;
    }

    return Pagination;
})();