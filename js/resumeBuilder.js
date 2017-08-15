
var bio = {
	name : "Nasser Aljuraysi",
    role : "Software Engineer",
      contacts :  {
            mobile: "0000000000",
            email: "nasserfj58@gmail.com",
            github: "nasserfj58",
            twitter:"",
            location:"Ryiadh"
	  },
      welcomeMessage:"Welcome To My Resume, Please have a look",
      skills: ["HTML","CSS","JavaScript","Asp.net","Web-Servise","PHP","C#","Java"],
      biopic: "images/197x148.gif",
      display: function(appendTo){
		  
		 //append header info
		 appendTo.prepend(getReplaced(HTMLheaderName,this.name)+
						  getReplaced(HTMLheaderRole,this.role));
		  
		 //append header contacts & footer contacts
		 appendContacts([topContacts,bottomContacts]);
		  
		 var bioInfo=[
			 getReplaced(HTMLbioPic,this.biopic),
			 getReplaced(HTMLwelcomeMsg,this.welcomeMessage),
			 HTMLskillsStart
		 ];
		  
		 //append bio info
		 appendMultiple(appendTo,bioInfo);

		 //find slills <ul> 
		 var skillsList = $('#skills');
		  
		 //append skills 
		 this.skills.forEach(function(val){
			skillsList.append(getReplaced(HTMLskills,val));
		});
}
}

var education = {
	 schools: [
		 {
			name: "King Saud Univirsity",
           location: "King Saud University, King Khalid Road, Riyadh",
           degree: "Bachelor",
           majors: "Software Engineer",
           dates: "1-1-2016",
           url: "http://ksu.edu.sa/" 
		 }
	 ],
	onlineCourses: [
		{
           title: "WCF",
           school: "PlureSight",
           dates: "12-12-2016",
           url: "https://pluralsight.com"
		},
		{
           title: "MicroSoft SharePoint",
           school: "KSU",
           dates: "12-12-2016",
           url: "http://ksu.edu.sa/"
		}
		],
      display: function(appendTo){
		  
		  //append education div
		  appendTo.append(HTMLschoolStart);
		  
		  var schoolDiv = $('.education-entry');
		  
		  this.schools.forEach(function(val){	  
			  
			  var name   = getReplaced(HTMLschoolName,val.name);
			  var dgree  = HTMLschoolDegree.replace(" -- %data%",val.degree);
			  var dates  = getReplaced(HTMLschoolDates,val.dates);
			  var locat  = getReplaced(HTMLschoolLocation,val.location);
			  var major  = getReplaced(HTMLschoolMajor,val.majors);
			  var school = [name+" - "+dgree,dates,location,major];
			  
			  //append schoolinfo
			  appendMultiple(schoolDiv,school);
			  
			  });
		  
		  //append courses header
		  appendTo.append(HTMLonlineClasses);
		  
		  //append education div for online courses
		  appendTo.append(HTMLschoolStart);
		  
		  var onlineCoursesDiv = $('.education-entry').last();
		  
		  this.onlineCourses.forEach(function(val){
		
			  var title  = getReplaced(HTMLonlineTitle,val.title);
			  var school = getReplaced(HTMLonlineSchool,val.school);
			  var dates  = getReplaced(HTMLonlineDates,val.dates);
			  var url    = getReplaced(HTMLonlineURL,val.school).replace("#",val.url);
			  
			  var course = [(title+school),dates,url];
			  
			  //append online course info
			  appendMultiple(onlineCoursesDiv,course);
			  
			  });

	  }	
}

var work = {
	jobs: [
		{
			   employer: "KSU",
			   title: "Teaching Assistenace", 
			   location: "Ryiadh",
			   dates: "1-6-2017",
			   description: "Teaching Software Testing Lab" 
		},
		{
			   employer: "STC solutions",
			   title: "Software Engineer Devloper", 
			   location: "Ryiadh",
			   dates: "in progress",
			   description: "Bulding Asp.net applications and WCF services" 
	    }
	],
      display: function(appendTo){
		  

		  this.jobs.forEach(function(val){
			  	  
				  //append work div
			  	  appendTo.append(HTMLworkStart);
			  
			  	  var workEntry = appendTo.find('.work-entry').last();
	 
			      var emp   = getReplaced(HTMLworkEmployer,val.employer);
			      var title = getReplaced(HTMLworkTitle,val.title);
			      var dates = getReplaced(HTMLworkDates,val.dates);
			      var loc   = getReplaced(HTMLworkLocation,val.location);
			  	  var desc  = getReplaced(HTMLworkDescription,val.description);
			      var job   = [(emp+title),dates,loc,desc];
			  
			  	  //appdend job info
			  	  appendMultiple(workEntry,job);
		  });
	  }
}

var projects = {
	projects: [
		{
            title: "Animal Trading", 
            dates: "12-3-2017",
            description: "Web page with animal card with picture of the animal and some info",
            images: ["http://via.placeholder.com/200x163"]
		},
		{
            title: "Portfolio", 
            dates: "12-8-2017",
            description: "Build my own Portfolio",
            images: ["http://via.placeholder.com/200x163"]
		}
		],
      display: function(appendTo){
		  
		  		  //append project div
			  	  appendTo.append(HTMLprojectStart);
		  
				  // get project div  
			  	  var projectEntry = appendTo.find('.project-entry');

		          this.projects.forEach(function(val){
					  
					  	var title  = getReplaced(HTMLprojectTitle,val.title);
					    var dates  = getReplaced(HTMLprojectTitle,val.dates);
					    var desc   = getReplaced(HTMLprojectDescription,val.description);
					    var length = val.images.length;
					  	var imgs=[];
					  	
					    for(var i= length-1; i>=0; i--){	  
			      			imgs.push(getReplaced(HTMLprojectImage,val.images[i]));			
						  } 
					  
					     //append project info
					  	 appendMultiple(projectEntry,[title,dates,desc,imgs]);	  
			      });          
	  }
}

//selector to append Html elements to
var header = $('#header');
var topContacts = $('#topContacts');
var workExperience = $('#workExperience');
var projectsContainer = $('#projects');
var educationContainer = $('#education');
var mapDiv = $('#mapDiv');
var bottomContacts = $('#footerContacts');
var placeHolder="%data%";

//Display all information
bio.display(header);
work.display(workExperience);
projects.display(projectsContainer);
education.display(educationContainer);

//append googleMap
$('#mapDiv').append(googleMap);;


//appends multiple elements to a single container  
function appendMultiple(selector, appends){
	 
	for(var i=0;i<appends.length;i++){
		
		if(Object.prototype.toString.call( appends[i] ) === '[object Array]'){
				
			appends[i].forEach(function(val){
					selector.append(val);	
			});
		}
		else{
			selector.append(appends[i]);
		}
	}
}


function getReplaced(htmlText,dataToreplace){
	
	return htmlText.replace(placeHolder,dataToreplace);
}

function appendContacts(selectors){
	
		selectors.forEach(function(selctor){
			
		 selctor.append(HTMLmobile.replace(placeHolder,bio.contacts.mobile));
		 selctor.append(HTMLtwitter.replace(placeHolder,bio.contacts.twitter));
		 selctor.append(HTMLgithub.replace(placeHolder,bio.contacts.github));
		 selctor.append(HTMLlocation.replace(placeHolder,bio.contacts.location));
			
		});
		 
}
