$(document).ready(function() {

         "use strict";

    /* ---------------------------------------------------------------------- */
    /*  ------------------------------- Loading ----------------------------- */
    /* ---------------------------------------------------------------------- */
    
    /*Page Preloading*/
    $(window).load(function() {
    $('#spinner').fadeOut(200);
    $('#preloader').delay(200).fadeOut('slow');
    $('.wrapper').fadeIn(200);
    $('#custumize-style').fadeIn(200);
    });
    






    /*Set up Attribute Playground interaction*/

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStep = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStep.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

        /*********END OF USER INTERACTION PLAYGROUND INITIALIZATION ********/



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




var stepModule = (function() {

    var step1But,
        step2But,
        step3But;

    


    function step1() {
        var stepCodeTxt = $('.stepCodeTxt');
        var selected = $('.selected');
        var selectedId = selected.attr('id');

        var newStepCodeTxt = 'document.getElementById(\''+ selectedId + '\')';

        stepCodeTxt.html(newStepCodeTxt);

    }



    function step2() {
        var stepCodeTxt = $('.stepCodeTxt');
        var selected = $('.selected');
        var contentMethod = $('#contentMethod').val();

        function setNewTxt() {
            var currentTxt = stepCodeTxt.html();

            var newTxt = currentTxt + '.' + contentMethod + '=' + '<strong>CONTENT</strong>';

            stepCodeTxt.html(newTxt);

        }

        setNewTxt();

    }



    function step3() {
        var selected = $('.selected');
        var contentMethod = $('#contentMethod').val();

        function setContent() {
          var newContent = $('#scoutTxtContent').val();
          
          switch (contentMethod) {
            case 'innerHTML':
              selected.html(newContent);
              break;
            

            case 'textContent':
              selected.text(newContent);
              break; 
          }
        }

        setContent();

    }





    step1But = $('#step1But');
    step2But = $('#step2But');
    step3But = $('#step3But');

    step1But.on('click', step1);
    step2But.on('click', step2);
    step3But.on('click', step3);

}());



















//init all modules//

getByIdModule.init();



});





});
