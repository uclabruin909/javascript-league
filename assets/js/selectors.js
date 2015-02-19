$(document).ready(function() {

    	var idSelectMod = (function() {

    		var button = document.getElementsByTagName('button')[0],

    			get_content = function() {

    				var textArea = document.getElementById('testIt');
    					var textContent = textArea.value;
    					return textContent;
    			};

    			//bind event to button//

    			button.addEventListener('click', function() {

    				var content = get_content();
    					alert(typeof content);

    			}, false);



    	}());


    });
