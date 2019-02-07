var car_brands=[
    {id:1,name:'مرسيدس'},
    {id:2,name:'بيجو'}
];
var car_models=[
    {id:1,name:'بنز',c_b_id:1},
    {id:2,name:'كومبريسور',c_b_id:1},
    {id:3,name:'504',c_b_id:2},
    {id:4,name:'506',c_b_id:2}
];

$(document).ready(function(){
    for(var i=0;i<car_brands.length;i++){
        $('#car-brand').append($('<option>',{value:car_brands[i].id,text:car_brands[i].name}));
    }
    
    $('.adv-input').hide();
    $('#item-type').change(function(){
        $('.adv-input').hide();        
        $('#item-type option:first').attr('disabled','disabled');
        var val=$(this).val();
        if(val==1){
            $('#re-type,.neg,#price').show();
        }
        else if(val==2){
            $('#car-brand,.newUsed,.neg,#price,#cc,#car-model').show();
        }
        else if(val==3){
            $('#brand,#mark,.newUsed,.neg,#price').show();
        }
    });

    $('#car-brand').change(function(){
        $('#car-model').empty();
        $('#car-model-div').empty();
        for(var i=0;i<car_models.length;i++){
            if($(this).val()==car_models[i].c_b_id){
                $('#car-model').append($('<option>',{value:car_models[i].id,text:car_models[i].name}));
                $('#car-model-div').append('<div class="cmd">'+car_models[i].name+'</div>');
            }      
        }
    });
    $('#car-brand').change();

});