$(document).ready(function() {

    	var attributeModule = (function() {


            var button = document.getElementsByTagName('button')[0];

                button.addEventListener('click', function() {

                    var skillBar = document.getElementsByClassName('progress-bar')[0],

                        newRating = document.getElementsByTagName('input')[0].value;

                        setNewRating = (function() {

                            skillBar.style.width = newRating + "%";
                            skillBar.style.backgroundColor = 'red';
                        }());



                }, false);


        }());



    });
