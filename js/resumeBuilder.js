//Heres my objects 
var bio = {
	name : "nasser",
    role : "Software Engineer",
      contacts :  {
            mobile: 0000000000,
            email: "nasserfj58@gmail.com",
            github: "nasserfj58",
            twitter:"",
            location:""
	  },
      welcomeMessage:"Welcome To My Resume, Please have a look",
      skills: ["HTML","CSS","JavaScript","Asp.net","Web-Servise","PHP","C#","Java"],
      biopic: "mypic.jpeg",
      display: function(){
		this.contacts.forEach(function(val){
			console.log();
		});
			
}
}

var education = {
	 schools: [
		 {
			name: "King Saud Univirsity",
           location: "",
           degree: "Bachelor",
           majors: "Software Engineer",
           dates: "1-1-2016",
           url: "ksu.edu.sa/" 
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
           url: "ksu.edu.sa/"
		}
		],
      display: function(){
		  
	  }	
}

var work = {
	jobs: [
		{
			   employer: "KSU",
			   title: "TA", 
			   location: "",
			   dates: "1-6-2017",
			   description: "Teaching Software Testing Lab" 
		   },
		{
			   employer: "",
			   title: "Software Engineer Devloper", 
			   location: "",
			   dates: "in progress",
			   description: "Bulding Asp.net application and WCF services" 
		   }
	],
      display: function(){
		  
	  }
}

var projects = {
	projects: [
		{
            title: "Animal Trading", 
            dates: "12-3-2017",
            description: "Web page with animal card with picture of the animal and some info",
            images: ["",""]
		},
		{
            title: "Portfolio", 
            dates: "12-8-2017",
            description: "Build my own Portfolio",
            images: ["",""]
		}
		],
      display: function(){
		  
	  }
}

// Appending Html To Index
var workExperience = $('#workExperience');
workExperience.find('h2').append();
