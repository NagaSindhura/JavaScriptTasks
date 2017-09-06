describe("Youtube Application pagination tests", function(){
    var pagination;
    beforeAll(function(){
        pagination = new Pagination();
    });
    it("should calculate no of videos per page", function(){
        var result = pagination.getMaxNumberOfVideosPerPage();
        expect(result).toBe(2);
    });
    it("should calculate maximum no of pages", function(){
        pagination.setTotalVideos(new Array('4'));
        var result = pagination.getMaxPageNumbers();
        expect(result).toBe(1);
    });
    it("should get default page number", function(){
        var result = pagination.getCurrentPageNumber();
        expect(result).toBe(1);
    });
});