var game = {

	random_obj : 0,
	url_base : "levels/level-1",

	init_randomize : function() {
		var list = [];
		$('.object').each(function(i,data){
			list.push(data.id);
		});
		list.sort(function() {return 0.5 - Math.random()})

		for (var i = list.length - 1; i >= 0; i--) {
			$('#'+list[i]).attr('src', this.url_base+'/object-'+ (i+1)+'.jpg');
		};
	},

	start_game : function() {
		//$('.cover').slideToggle('slow');
		$('.cover').show();
		$('.object').hide();

		this.random_obj = Math.floor(Math.random() * 4) + 1;

		$('#random-object').attr('src', $('#object-'+this.random_obj).attr('src'));
		$('#random-object').show();
	},

	select: function(obj) {
		var id = obj.currentTarget.id;
		var selected = id.substr(6,1);

		$('#'+id).hide();
		$('#object-'+selected).show();

		if (selected == this.random_obj) {
			alert('SEEEEE');
		} else {
			setTimeout(function(){
				$('#'+id).show();
				$('#object-'+selected).hide();
			}, 2000);
		}
	}

}