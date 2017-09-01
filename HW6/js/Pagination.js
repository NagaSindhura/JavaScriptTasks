var Pagination = (function () {
    function Pagination() {  };

    Pagination.prototype.getMaxNumberOfVideosPerPage = function () {
        //debugger;
        var windowInnerWidth = window.innerWidth;
        var requiredPixelPerPage = 370;

        //alert(Math.floor((windowInnerWidth / requiredPixelPerPage)));

        return Math.floor((windowInnerWidth / requiredPixelPerPage));
    };

    Pagination.prototype.getMaxPageNumbers = function () {
        //debugger;
        if (!page.totalVideos) {

            return 0;

        }

        //alert(Math.floor((page.totalVideos.length / this.getMaxNumberOfVideosPerPage())));

        return Math.floor((page.totalVideos.length / this.getMaxNumberOfVideosPerPage()));
    }


    Pagination.prototype.setTotalVideos = function (videos) {
        //debugger;
        page.totalVideos = (this.videos || []).concat(videos);
    }

    Pagination.prototype.getTotalVideos = function () {
        //debugger;
        return page.totalVideos;
    }

    Pagination.prototype.setCurrentPageNumber = function (pageNumber) {
        //debugger;
        page.currentPageNumber = pageNumber || 1;
    }

    Pagination.prototype.getCurrentPageNumber = function () {
        //debugger;
        return page.currentPageNumber || 1;
    }

    return Pagination;
})();