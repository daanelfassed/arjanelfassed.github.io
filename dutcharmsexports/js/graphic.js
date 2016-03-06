//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key = "1AdMg3ueZsuYIFtJ9y4JeQlUBgIjKFekYM0An8bUYDxU";

//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "datum", "title": "Datum" },
    { "data": "nummer", "title": "Nummer" },
    { "data": "omschrijving", "title": "Omschrijving" },
  	{ "data": "gebruik", "title": "Gebruik" },
  	{ "data": "type", "title": "Type" },
  	{ "data": "catdt", "title": "D/T" },
  	{ "data": "herkomst", "title": "Herkomst" },
  	{ "data": "bestemming", "title": "Bestemming" },
	{ "data": "waarde", "title": "Waarde" }];
    
    
$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="80%" id="mySelection"></table><br><img src="https://arjanelfassed.github.io/dutcharmsexports/vergmeldingen.png" class="img-responsive center-block" alt="grafiek">');

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
            "data": data,
            "columns": columns, 
            "order":[[ 0, 'desc' ]], //order on 1st column
            "pagingType": 'full_numbers' //page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false
            });
        }
});
//end of writeTable
