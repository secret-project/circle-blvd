'use strict';

function DocsCtrl(session, lib, $scope) {

	var me = "Me";

	$scope.whoami = me;	
	$scope.isFacade = true;
	$scope.isMindset = lib.mindset.is;

	var firstStory = {
		"_id": "1",
		"id": "1",
		"nextId": "2",
		"isFirstStory": true,
		"summary": "#Intro: This story is done",
		"description": "Hi! This is the first story in this story-list " +
		"demonstration. Please stomp around and see what this thing can " +
		"do.",
		"owner": "Alaina",
		"status": "done",
		"createdBy": {
		  "name": "Phil",
		},
		"comments": [
		  {
			"text": "Stories can have comments. :-)",
			"createdBy": {
			  "name": "Phil",
			},
			"timestamp": 1402388429872
		  }
		],
		"labels": [
			"Intro"
		]
	};

	var stories1 = {
		"1": firstStory
	};

	var stories2 = {
	  "1": firstStory,
	  "2": {
		"id": "2",
		"nextId": "2.5",
		"owner": "Nicholas",
		"summary": "#Intro: This one is in progress",
		"description": "They're called 'stories' because, well, we " +
		"don't know why. However, 'tasks' sounds a bit boring, don't you " +
		"think?",
		"status": "active",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
			"Intro"
		]
	  },
	  "2.5": {
		"id": "2.5",
		"nextId": "3",
		"summary": "#Intro: This is a milepost",
		"status": "",
		"description": "Mileposts can be useful if things need to be " + 
		"done before or after a specific event.",
		isDeadline: true,
		"labels": [
			"Intro"
		]
	  },
	  "3": {
		"id": "3",
		"nextId": "3.25",
		"owner": me,
	  	"summary": "You're assigned to this new story",
	  	"description": "Mash the tiny circle on the left to bump the " +
	  	"status of this story along. Once a story is 'done', it can " + 
	  	"be archived by pressing the large circle. Try it!",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "3.25": {
		"id": "3.25",
		"nextId": "3.4",
		"summary": "#Intro: Next meeting",
		"description": "What needs to be done before your next meeting? " +
		"Move this special story to bring your team's focus to the top of " + 
		"your story list.",
		"isNextMeeting": true,
		"labels": [
			"Intro"
		]
	  },
	  "3.4": {
		"id": "3.4",
		"nextId": "3.45",
		"summary": "#Intro: Use the grippy cross, on the right, to move stories",
		"description": "This works on desktops, laptops, iPads and iPhones, " +
		"but not on Android things (yet).",
		"status": "active",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
			"Intro"
		]
	  },
	  "3.45": {
		"id": "3.45",
		"nextId": "3.5",
		"summary": "#Intro: Use mileposts as waypoints in your journey",
		"status": "",
		"description": "They're the best.",
		isDeadline: true,
		"labels": [
			"Intro"
		]
	  },
	  "3.5": {
	  	"id": "3.5",
	  	"nextId": "4",
		"summary": "Nobody is assigned to this story",
		"description": "Stories without confirmed owners have a question mark" + 
		"next to them.",
	  	"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "4": {
		"id": "4",
		"nextId": "7",
		"summary": "There's an issue with this story",
		"description": "Of course, sometimes stories need to be talked about.",
		"status": "sad",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "7": {
		"id": "7",
		"nextId": "7.1",
		"summary": "Click stories to see details",
		"description": "Thanks. :-)",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "7.1": {
		"id": "7.1",
		"nextId": "7.2",
		"summary": "Click circles to send done stories to the archives",
		"description": "Maybe mark a story as 'done' when a task is complete, " +
			"and then archive it when you're really done thinking about it.",
		"status": "done",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "7.2": {
		"id": "7.2",
		"nextId": "7.3",
		"summary": "Commenting on stories will email the story creator ...",
		"description": "... and it will email the story owner (the person assigned), " +
			" and whoever else has commented on this particular story.",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "7.3": {
		"id": "7.3",
		"nextId": "7.4",
		"summary": "Click the envelope icon to email the story owner",
		"owner": "Nicholas",
		"description": "You can change the email address you receive notifications " +
			" on the profile page.",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "7.4": {
		"id": "7.4",
		"nextId": "8",
		"summary": "#Tag stories with hashtags, and click to filter",
		"owner": "Nicholas",
		"description": "",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
			"Tag", "#hashtags"
		]
	  },
	  "8": {
		"id": "8",
		"nextId": "8.1",
		"summary": "Use the entry panel",
		"status": "",
		isDeadline: true,
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "8.1": {
		"id": "8.1",
		"nextId": "8.2",
		"summary": "#Entry: Add many stories at once with the 'many' option",
		"status": "",
		"description": "Specify one story per line\n" +
			"-- Specify mileposts by starting with two dashes\n" +
			"Assign stories by ending them like @Nicholas",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
			"Entry"
		]
	  },
	  "8.2": {
		"id": "8.2",
		"nextId": "9",
		"summary": "#Entry: Use checklists for recurring tasks",
		"status": "",
		"description": "You can save lists of stories on the checklists page. " +
			"Maybe you have a checklist for publishing your work?",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
			"Entry"
		]
	  },

	  "9": {
		"id": "9",
		"nextId": "9.1",
		"summary": "Change mindsets with the top-right icon panel",
		"status": "",
		isDeadline: true,
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "9.1": {
		"id": "9.1",
		"nextId": "9.2",
		"summary": "The caret icon ^ is for bumping stories to the top of the list ^",
		"status": "",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "9.2": {
		"id": "9.2",
		"nextId": "10.0",
		"summary": "The road icon / I \\ is for moving stories great distances / I \\",
		"status": "",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "10.0": {
		"id": "10.0",
		"nextId": "10.1",
		"summary": "Create up to four circles from your profile page",
		"status": "",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "10.1": {
		"id": "10.1",
		"nextId": "10.10",
		"summary": "Invite people to join your circle from the Admin page",
		"status": "",
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "10.10": {
		"id": "10.10",
		"nextId": "last",
		"summary": "Have fun :-)",
		"status": "",
		isDeadline: true,
		"createdBy": {
		  "name": "Phil",
		},
		"labels": [
		]
	  },
	  "last": {
		"id": "last",
		"nextId": "last-demo",
		"summary": "That's it.",
		"createdBy": {
		  "name": "Phil",
		}
	  }
	};

	$scope.lesson1 = {
		firstStory: firstStory,
		allStories: stories1
	};

	$scope.lesson2 = {
		firstStory: firstStory,
		allStories: stories2
	};
}
DocsCtrl.$inject = ['session', 'lib', '$scope'];