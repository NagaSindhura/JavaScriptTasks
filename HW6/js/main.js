(function Main() {
    function initialize() {
        search = new searchElement();
        page = new Pagination();
        
        //page.getMaxNumberOfVideosPerPage();
       
        
        search.addSearchfunctionality();
        page.getMaxNumberOfVideosPerPage();
        page.getMaxPageNumbers();
        page.getTotalVideos();
    }

    initialize();

}
)();


