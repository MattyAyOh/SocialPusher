
$(function() {
  $('#pushButton').click(function(e) {
    e.preventDefault();
    alert("testing "+ $('#streamIDInput').val())
    window.close();
  });
});


