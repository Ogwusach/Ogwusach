
    // Add any JavaScript/jQuery as needed
    $(document).ready(function() {
      // You can include animations, interactions, etc.
    });
  
  
  $(document).ready(function() {
    // Open Map Modal
    $('#openMap').on('click', function() {
      $('#mapModal').modal('show');
    });

    // Close Map Modal
    $('#closeMap').on('click', function() {
      $('#mapModal').modal('hide');
    });
  });


    $(document).ready(function() {
        $('#toggleSidebar').on('click', function() {
            $('.sidebar').toggleClass('active');
            $('.pusher').toggleClass('active');
        });
    });
