var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject('1AdMg3ueZsuYIFtJ9y4JeQlUBgIjKFekYM0An8bUYDxU');
    
});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{"mDataProp": "datum", "sTitle": "Datum", "sClass": "left"},
		{"mDataProp": "nummer", "sTitle": "Nummer", "sClass": "left"},
		{"mDataProp": "omschrijving", "sTitle": "Omschrijving", "sClass": "left"},
		{"mDataProp": "gebruik", "sTitle": "Gebruik", "sClass": "left"},
		{"mDataProp": "type", "sTitle": "Type", "sClass": "left"},
		{"mDataProp": "catdt", "sTitle": "D/T", "sClass": "left"},
		{"mDataProp": "herkomst", "sTitle": "Herkomst", "sClass": "left"},
		{"mDataProp": "bestemming", "sTitle": "Eindbestemming", "sClass": "left"},
		{"mDataProp": "waarde", "sTitle": "Waarde in euros", "sClass": "right"},
	];
    return tableColumns;
}



// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 15,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
        "fnRowCallback": function(nRow, aData, iDisplayIndex) {
            console.log(aData);
            return nRow;
        },
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort["string-case-asc"]  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort["string-case-desc"] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};
