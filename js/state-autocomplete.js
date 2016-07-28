$(function(){
  var states = [
    { value: 'Alabama', data: 'AL'},
    { value: 'Alaska', data: 'AK'},
    { value: 'Arizona', data: 'AZ'},
    { value: 'Arkansas', data: 'AR'},
    { value: 'California', data: 'CA'},
    { value: 'Colorado', data: 'CO'},
    { value: 'Connecticut', data: 'CT'},
    { value: 'Delaware', data: 'DE'},
    { value: 'District Of Columbia', data: 'DC'},
    { value: 'Florida', data: 'FL'},
    { value: 'Georgia', data: 'GA'},
    { value: 'Hawaii', data: 'HI'},
    { value: 'Idaho', data: 'ID'},
    { value: 'Illinois', data: 'IL'},
    { value: 'Indiana', data: 'IN'},
    { value: 'Iowa', data: 'IA'},
    { value: 'Kansas', data: 'KS'},
    { value: 'Kentucky', data: 'KY'},
    { value: 'Louisiana', data: 'LA'},
    { value: 'Maine', data: 'ME'},
    { value: 'Maryland', data: 'MD'},
    { value: 'Massachusetts', data: 'MA'},
    { value: 'Michigan', data: 'MI'},
    { value: 'Minnesota', data: 'MN'},
    { value: 'Mississippi', data: 'MS'},
    { value: 'Missouri', data: 'MO'},
    { value: 'Montana', data: 'MT'},
    { value: 'Nebraska', data: 'NE'},
    { value: 'Nevada', data: 'NV'},
    { value: 'New Hampshire', data: 'NH'},
    { value: 'New Jersey', data: 'NJ'},
    { value: 'New Mexico', data: 'NM'},
    { value: 'New York', data: 'NY'},
    { value: 'North Carolina', data: 'NC'},
    { value: 'North Dakota', data: 'ND'},
    { value: 'Ohio', data: 'OH'},
    { value: 'Oklahoma', data: 'OK'},
    { value: 'Oregon', data: 'OR'},
    { value: 'Pennsylvania', data: 'PA'},
    { value: 'Rhode Island', data: 'RI'},
    { value: 'South Carolina', data: 'SC'},
    { value: 'South Dakota', data: 'SD'},
    { value: 'Tennessee', data: 'TN'},
    { value: 'Texas', data: 'TX'},
    { value: 'Utah', data: 'UT'},
    { value: 'Vermont', data: 'VT'},
    { value: 'Virginia', data: 'VA'},
    { value: 'Washington', data: 'WA'},
    { value: 'West Virginia', data: 'WV'},
    { value: 'Wisconsin', data: 'WI'},
    { value: 'Wyoming', data: 'WY'},
  ];
  
  // setup autocomplete function pulling from states[] array
  $('#autocomplete').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {
        $('.popup-content h1').text($('.biginput').val());
        $('.custom-overlay').fadeIn('fast',function(){
        $('.popup-content').fadeIn('fast');
        });
    }
  });
  

});