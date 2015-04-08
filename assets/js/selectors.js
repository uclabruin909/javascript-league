$(document).ready(function() {


        $('body').popover({selector: '[data-toggle=popover]'});

        var stateMap = {
            playground: document.getElementById('playground'),
            idButton : document.getElementById('idButton'),
            queryButton : document.getElementById('querySelectorButton'),
            classButton: document.getElementById('classButton'),
            tagButton: document.getElementById('tagButton'),
            queryAllButton: document.getElementById('queryAllButton')
        };



        //START IF getBYIdModule//
        var getByIdModule = (function() {

            var selections;

            var inputSelection = function() {
                var inputVal = document.getElementsByClassName('idInput')[0];
                return inputVal.value;
            }, 

            clearPrevSel = function() {

                var prevSelected = $(stateMap.playground).find('.selected');

                for (var i =0; i<prevSelected.length; i++) {
                    $(prevSelected[i]).removeClass('selected');
                }

            },
            
            //function to bind to trigger//
            idElSelect = function() {
                var idInput = "#"+inputSelection();
                selections = $(stateMap.playground).find(idInput);

               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
               selections.addClass('selected');

            },




            //init//

            init = function() {
                var button = stateMap.idButton;
                button.addEventListener('click', function() {
                  idElSelect();
                    if (selections.length === 0) {
                        alert('No HTML Elements were selected!  Try again');
                    }
                }, false);
            };


            return {
                init: init
            };


        }());

 //END oF getBYIdModule//




        //START Of querySelector Module//
        var querySelectorModule = (function() {

            var selections;

            var inputSelection = function() {
                var inputVal = document.getElementsByClassName('querySelectorInput')[0];
                return inputVal.value;
            }, 

            clearPrevSel = function() {

                var prevSelected = $(stateMap.playground).find('.selected');

                for (var i =0; i<prevSelected.length; i++) {
                    $(prevSelected[i]).removeClass('selected');
                }

            },
            
            //function to bind to trigger//
            idElSelect = function() {
                var querySelectorInput = inputSelection();
                selections = $(stateMap.playground).find(querySelectorInput);

                 //check to see if valid DOM elements were selected//
                if (selections.length === 0) {
                    alert('No HTML Elements were selected!  Try again');
                }                


               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
               $(selections[0]).addClass('selected');

            },




            //init//

            init = function() {
                var button = stateMap.queryButton;
                button.addEventListener('click', function() {
                    idElSelect();

                }, false);
            };


            return {
                init: init
            };


        }());

 //END oF querySelector Module//







        //START IF getByClassModule//
        var getByClassModule = (function() {

            var selections;

            var inputSelection = function() {
                var inputVal = document.getElementsByClassName('classInput')[0];
                return inputVal.value;
            }, 

            clearPrevSel = function() {

                var prevSelected = $(stateMap.playground).find('.selected');

                for (var i =0; i<prevSelected.length; i++) {
                    $(prevSelected[i]).removeClass('selected');
                }

            },
            
            //function to bind to trigger//
            classElSelect = function() {
                var classInput = "."+inputSelection();
                var classIndex = document.getElementById('classIndex').value;
                selections = $(stateMap.playground).find(classInput);
               
                if ( !(classIndex === 'N/A') ) {
                    selections = selections[classIndex];
                    
                }    


                //check to see if valid DOM elements were selected//
                if (selections.length === 0) {
                    alert('No HTML Elements were selected!  Try again');
                }                

                

               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
               $(selections).addClass('selected');

            },


            //init//

            init = function() {
                var button = stateMap.classButton;
                button.addEventListener('click', function() {
                    classElSelect();
               
                }, false);
            };


            return {
                init: init
            };


        }());







        //START IF getBYIdModule//
        var getByTagsModule = (function() {

            var selections;

            var inputSelection = function() {
                var inputVal = document.getElementsByClassName('tagInput')[0];
                return inputVal.value;
            }, 

            clearPrevSel = function() {

                var prevSelected = $(stateMap.playground).find('.selected');

                for (var i =0; i<prevSelected.length; i++) {
                    $(prevSelected[i]).removeClass('selected');
                }

            },
            
            //function to bind to trigger//
            classElSelect = function() {
                var tagInput = inputSelection();
                var tagIndex = document.getElementById('tagIndex').value;
                selections = $(stateMap.playground).find(tagInput);

                if ( !(tagIndex === 'N/A') ) {
                    selections = selections[tagIndex];
                    
                }

                //check to see if valid DOM elements were selected//
                if (selections.length === 0) {
                    alert('No HTML Elements were selected!  Try again');
                }  



               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
              $(selections).addClass('selected');

            },


            //init//

            init = function() {
                var button = stateMap.tagButton;
                button.addEventListener('click', function() {
                    classElSelect();                       
                }, false);
            };


            return {
                init: init
            };


        }());






        //START Of querySelector Module//
        var querySelectorAllModule = (function() {

            var selections;

            var inputSelection = function() {
                var inputVal = document.getElementsByClassName('queryAllInput')[0];
                return inputVal.value;
            }, 

            clearPrevSel = function() {

                var prevSelected = $(stateMap.playground).find('.selected');

                for (var i =0; i<prevSelected.length; i++) {
                    $(prevSelected[i]).removeClass('selected');
                }

            },
            
            //function to bind to trigger//
            idElSelect = function() {
                var querySelectorInput = inputSelection();
                selections = $(stateMap.playground).find(querySelectorInput);
                var queryIndex = document.getElementById('queryIndex').value;

                 if ( !(queryIndex === 'N/A') ) {
                    selections = selections[queryIndex];
                    
                }                    
               
                //check to see if valid DOM elements were selected//
                if (selections.length === 0) {
                    alert('No HTML Elements were selected!  Try again');
                }                



               //clear previous selections//
                clearPrevSel();





                //add the 'selected class to highlight background'
               $(selections).addClass('selected');

            },




            //init//

            init = function() {
                var button = stateMap.queryAllButton;
                button.addEventListener('click', function() {
                    idElSelect();

                }, false);
            };


            return {
                init: init
            };


        }());

 //END oF querySelector Module//





getByIdModule.init();
querySelectorModule.init();
getByClassModule.init();
getByTagsModule.init();
querySelectorAllModule.init();
});

