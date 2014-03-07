/**
 * @author
 */

////I will set up document ready
//And load Google chart package
//And then load the Google Fusion Table
//I will then load the data
//And then render the chart

console.log("Get set");

//TheUnemploymentdata is the local name of the json file I just loaded
function dataLoaded(TheUnemploymentdata) {

	console.log(TheUnemploymentdata);
	
	var googleDataTable = new google.visualization.DataTable();
	
	//when I add columns, the first parameter is the data type in the column
	//the second parameter is the name of the columns 
	
	googleDataTable.addColumn('string', TheUnemploymentdata.columns[0]); //this works because it is a google.visualization object
	
	googleDataTable.addColumn('number', TheUnemploymentdata.columns[1]);
	
	googleDataTable.addRows(TheUnemploymentdata.rows);//only works because this is a google.visualization object
	

		
	//create options object to actually customize the look if the chart
	
	var mychartOptions = {
          title: 'Unemployment rate since 1980'
        };

	
	//this will create a line chart
	var mygoogleChart = new google.visualization.LineChart(document.getElementById("MyChart"));
	
	//this will tell it to show the title
	mygoogleChart.draw(googleDataTable, mychartOptions);
}

function googleLoaded() {
	
	console.log("googleLoaded");
	
	//Instead of loading data from a static json file,
	//I'm going to load it from a Google Fusion Table
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1I1IanRhd9RKxe1emSFkg2LgRFIa2GTqcKSntGhBN+WHERE+DATE%3E%271979-01-01%27+&key=AIzaSyBJWD4UulDQQMtDdtacaCD03MInkDsb61g", mydataLoaded, "json");
	
	
}

console.log("google loaded");

function pageLoad() {

	console.log("go to page loaded");

	//this will load the google visualization library
	google.load("visualization", '1', {
		packages : ["corechart"],
		callback : "googleLoaded"
	}); 
	

	//

	

}

//this will call back the document 
//it is the Maco Polo
$(document).ready(pageLoad);

