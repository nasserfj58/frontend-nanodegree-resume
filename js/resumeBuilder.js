//All objects 

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
		 
		 //append header div
		 appendTo.prepend(HTMLheaderName.replace("%data%",this.name)+HTMLheaderRole.replace("%data%",this.role));
		 
		 //append header contacts
		 appendContacts(topContacts);
		//appednd footer contacts
		 appendContacts(connect); 
		  
		 //append bio ifno
		 appendTo.append(HTMLbioPic.replace("%data%",this.biopic));
		 appendTo.append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));
		 appendTo.append(HTMLskillsStart);
		 
		 //find slills <ul> 
		 var skillsList = $('#skills');
		  
		 this.skills.forEach(function(val){
			skillsList.append(HTMLskills.replace("%data%",val));
		});
}
}

var education = {
	 schools: [
		 {
			name: "King Saud Univirsity",
           location: "Ryiadh",
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
           url: "Pluresight.com"
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
			  
			  var name  = HTMLschoolName.replace("%data%",val.name);
			  var dgree = HTMLschoolDegree.replace(" -- %data%",val.degree);
			  
			  //append schools info
			  schoolDiv.append(name+" - "+dgree);
			  schoolDiv.append(HTMLschoolDates.replace("%data%",val.dates));
			  schoolDiv.append(HTMLschoolLocation.replace("%data%",val.location));
			  schoolDiv.append(HTMLschoolMajor.replace("%data%",val.majors));
		  });
		  
		  //append courses header
		  appendTo.append(HTMLonlineClasses);
		  
		  //append education div for online courses
		  appendTo.append(HTMLschoolStart);
		  var onlineCoursesDiv = $('.education-entry').last();
		  
		  this.onlineCourses.forEach(function(val){
			  
			  var title  = HTMLonlineTitle.replace("%data%",val.title);
			  var school = HTMLonlineSchool.replace("%data%",val.school);
			  
			  //append online courses info
			  onlineCoursesDiv.append(title+school);
			  onlineCoursesDiv.append(HTMLonlineDates.replace("%data%",val.dates));
			  onlineCoursesDiv.append(HTMLonlineURL.replace("%data%",val.url));
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
			  
			      var emp = HTMLworkEmployer.replace("%data%",val.employer);
			      var title = HTMLworkTitle.replace("%data%",val.title);
			  	  //appdend job info
			  	  workEntry.append(emp+title);
			      workEntry.append(HTMLworkDates.replace("%data%",val.dates));
			      workEntry.append(HTMLworkLocation.replace("%data%",val.location));
			      workEntry.append(HTMLworkDescription.replace("%data%",val.description));
		});
	  }
}

var projects = {
	projects: [
		{
            title: "Animal Trading", 
            dates: "12-3-2017",
            description: "Web page with animal card with picture of the animal and some info",
            images: ["images/github-logo.svg"]
		},
		{
            title: "Portfolio", 
            dates: "12-8-2017",
            description: "Build my own Portfolio",
            images: ["images/fry.jpg"]
		}
		],
      display: function(appendTo){
		  
		  		  //append project div
			  	  appendTo.append(HTMLprojectStart);
				  // get project div  
			  	  var projectEntry = appendTo.find('.project-entry');

		          this.projects.forEach(function(val){
					  
			      		  //append project info
				  		  projectEntry.append(HTMLprojectTitle.replace("%data%",val.title));
			  	  		  projectEntry.append(HTMLprojectDates.replace("%data%",val.dates));
			      		  projectEntry.append(HTMLprojectDescription.replace("%data%",val.description));
					  
			      		  for(var i=0; i<val.images.length;i++){	  
			      						projectEntry.append(HTMLprojectImage.replace("%data%",val.images[i]));
						  } 
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
var connect = $('#footerContacts');

//Display all information
bio.display(header);
work.display(workExperience);
projects.display(projectsContainer);
education.display(educationContainer);


function appendContacts(selctor){
	
		 selctor.append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		 selctor.append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		 selctor.append(HTMLgithub.replace("%data%",bio.contacts.github));
		 selctor.append(HTMLlocation.replace("%data%",bio.contacts.location));
}
