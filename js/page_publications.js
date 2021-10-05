$(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var FJS = FilterJS(publications, '#pubs', {
    template: '#pub-template',
    search: {ele: '#searchbox'},
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: function(result){
        $('#num_of_records').text(result.length);
      }
    }
    //appendToContainer: appendToContainer
    //filter_on_init: true
  });

  FJS.addCriteria({field: 'cat', ele: '#cat_filter'});
  FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range'});
  FJS.addCriteria({field: 'kw', ele: '#kw_criteria input:checkbox'});

  window.FJS = FJS;
});

function initSliders(){
  $("#year_slider").slider({
    min: 2013,
    max: 2021,
    values:[2013, 2021],
    step: 1,
    range:true,
    slide: function(event, ui) {
      $("#year_range_label" ).html(ui.values[0] + ' - ' + ui.values[1]);
      $('#year_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#kw_criteria :checkbox').prop('checked', true);
  $('#all_kw').on('click', function(){
    $('#kw_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
