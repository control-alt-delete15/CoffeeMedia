
	

    function nameLock() {

	    
      if (localStorage.logged == true){
        document.getElementById('hcb_form_name').value = localStorage.username;
	      
    }
document.getElementById('hcb_form_name').disabled = true;    }
setInterval(nameLock, 0)
	 

	function setUname() {
		if (document.getElementById("hcb_form_name").value == "") 
		{

		    }
		    else {
			
		document.getElementById("Username").innerHTML = "<a ><b>" + document.getElementById("hcb_form_name").value + "</b></a>"
		document.getElementById("Logout").innerHTML = "<a href='http://htmlcommentbox.com/logout?then=http://coffeemedia.cf/public-chat'> Logout</a>";
			    var Username = document.getElementById("hcb_form_name").value; 
			    document.getElementById('hcb_form_website').value = "http://coffeemedia.cf/profile?user=" + Username;
	}
	
	}
	setInterval(setUname, 500)
	
	
	function hideItem() {
			document.getElementById('hcb_form_name').hidden = true;
		   document.getElementById('hcb_msg').hidden = true;	
		var Username = document.getElementById("hcb_form_name").value;
		document.getElementById('hcb_form_website').hidden = true;	
		
		if (Username == 'henrybookmail') {
			document.getElementById("hcb_submit").hidden = true;
			
			
		}
		
	}
	setInterval(hideItem, 0)
	
	function checkEnter() {

	$(".comment").addClass('well');
$(".hcb-comment-tb").removeClass('hcb-comment-tb');
$('.inputfile').removeClass('inputfile');
$( "label[for='hcb_file']" ).text( "Upload Image" ).addClass('btn').addClass('btn-success');
	}
	setInterval(checkEnter, 0)

/* This code goes ABOVE the main HTML Comment Box code!
 replace the text in the single quotes below to customize labels.*/
hcb_user = {
    /* L10N */
    comments_header : 'Posts',
    name_label : 'Guest',
    content_label: 'Enter your post here',
    submit : "Post",
    logout_link : '',
    admin_link : '',
    no_comments_msg: '',
    add:'Add your post',
    again: '<button class="submit btn">Post again</button>',
    rss:'<img src="//www.htmlcommentbox.com/static/images/feed.png" class="hcb-icon" alt="rss"/> ',
    said:'',
    prev_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'Showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'Guest',
    mod_label:'ADMIN',
    subscribe:'subscribe',
    are_you_sure:'Do you want to report this post?',

    reply:'<button class="btn icon-btn btn-info"><span class="glyphicon btn-glyphicon glyphicon-share img-circle text-info"></span>Reply</button>',
    flag:'<button class="btn icon-btn btn-danger"><span class="glyphicon btn-glyphicon glyphicon-trash img-circle text-danger"></span>Report</button>',
    like:'<button class="btn icon-btn btn-success"><span class="glyphicon btn-glyphicon glyphicon-thumbs-up img-circle text-success"></span>Like</button>',
    
    /* dates */
    days_ago:'days ago',
    hours_ago:'hours ago',
    minutes_ago:'minutes ago',
    within_the_last_minute:'within the last minute',

    msg_thankyou:'Thank you for posting!',
    msg_approval:'(this post is not published until approved)',
    msg_approval_required:'Thank you for post! Your comment will appear once approved by a moderator.',

    err_bad_html:'Your comment contained bad html.',
    err_bad_email:'Please enter a valid email address.',
    err_too_frequent:'You must wait a few seconds between posting.',
    err_comment_empty:'Your post was not posted because it was empty!',
    err_denied:'Your post was not accepted.',

    /* SETTINGS */
    MAX_CHARS: 1000,
    PAGE: 'Public-Chat', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
    ON_COMMENT: function(){hcb.make_comment_form()}, /* Function to call after commenting. */
    RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
};
/*function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
	document.getElementsByClassName("hcb-link del").innerHTML = '<button class="btn btn-danger btn-circle"><span class="glyphicon glyphicon-remove-circle"></span></button>';
*/
