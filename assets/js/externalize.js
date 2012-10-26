function getHTML(name, sectionID){
	var stringData = $.ajax({
						url: name,
						async: false,
						success: function(stringData){
							$('#' + sectionID).html(stringData);
						}
					 }).responseText;
}