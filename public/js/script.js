function toggleSidebar() {
    var nav = $('#sidebar');
    console.log(nav);
    if ($('#toggleBtn').hasClass('active')) {
        nav.stop().slideUp();
        $('#toggleBtn').removeClass('active');
    } else {
        nav.stop().slideDown();
        $('#toggleBtn').addClass('active');
    }
}