$(document).ready(function(){
    $('.delete-recipe').on('click', function(){
        let id = $(this).data('id');
        let url = '/delete/' + id;
        if(confirm('Are you sure you want to delete this recipe?')){
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function(result){
                    console.log('Deleting recipe...');
                    window.location.href='/';
                },
                error: function (err) {
                    console.log(err);
                    
                }
            });
        }
    });
});