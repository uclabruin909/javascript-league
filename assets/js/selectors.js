$(document).ready(function() {


        $('body').popover({selector: '[data-toggle=popover]'});

        var stateMap = {
            playground: document.getElementById('teamTable'),
            idButton : document.getElementById('idButton'),
            classButton: document.getElementById('classButton'),
            tagButton: document.getElementById('tagButton')
        };



        //START IF getBYIdModule//
        var getByIdModule = (function() {

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
                var selections = $(stateMap.playground).find(idInput);

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
                }, false);
            };


            return {
                init: init
            };


        }());

 //END oF getBYIdModule//



        //START IF getByClassModule//
        var getByClassModule = (function() {

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
                var selections = $(stateMap.playground).find(classInput);

               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
               selections.addClass('selected');

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
                var selections = $(stateMap.playground).find(tagInput);

               //clear previous selections//
                clearPrevSel();

                //add the 'selected class to highlight background'
              for (var i =0; i<selections.length; i++) {
                    $(selections[i]).addClass('selected');
                }

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


getByIdModule.init();
getByClassModule.init();
getByTagsModule.init();

});

