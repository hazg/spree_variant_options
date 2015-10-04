//= require spree/backend

//= require spree/backend/variant_images
//

jQuery(function(){
  var uniqueId = 1;
  $('.spree_add_fields').unbind('click');
  $('.spree_add_fields').click(function(e) {
    e.stopPropagation();
    var target = $(this).data("target");
    var new_table_row = $(target + ' tr:visible:last').clone();
    var new_id = new Date().getTime() + (uniqueId++);

    new_table_row.find('.preview').html('');

    new_table_row.find("input, select, textarea").each(function () {
      var el = $(this);
      el.val("");
      el.prop("id", el.prop("id").replace(/\d+/, new_id));
      el.prop("name", el.prop("name").replace(/\d+/, new_id));
    });
    // When cloning a new row, set the href of all icons to be an empty "#"
    // This is so that clicking on them does not perform the actions for the
    // duplicated row
    new_table_row.find("a").each(function () {
      var el = $(this);
      el.prop('href', '#');
    });
    $(target).prepend(new_table_row);
    return false;
  });
});
