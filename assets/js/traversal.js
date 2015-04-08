      $(document).ready(function() {



        var NBAsvg = document.getElementById('nbaTraversal');


        NBAsvg.onload = function() {



          var controlModule = (function() {

            var stateMap = {

              highlightColor: '#424a5d',
              guideEl: document.getElementById('codeArea'),
              guideElId: 'codeArea',
              currentEl: document.getElementById('nbaLogo')

            },

            controlMap = {

              keyDown49: function() {

                if (stateMap.guideEl.firstElementChild) {
                //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.firstElementChild;
                  stateMap.guideElId = stateMap.guideEl.id;

                }

                else {
                  alert('The current element does not have a Child Element');

                }                
                
                
              },
              keyDown50: function() {

                if (stateMap.guideEl.lastElementChild) {
                  //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.lastElementChild;
                  stateMap.guideElId = stateMap.guideEl.id;

                }

                else {
                  alert('The current element does not have a Child Element');

                }  
              },

              keyDown51: function() {

                if (stateMap.guideEl.previousElementSibling) {
                  //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.previousElementSibling;
                  stateMap.guideElId = stateMap.guideEl.id;

                }

                else {
                  alert('The current element does not have a sibling Element');

                }  
              },

              keyDown52: function() {

                if (stateMap.guideEl.nextElementSibling) {
                  //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.nextElementSibling;
                  stateMap.guideElId = stateMap.guideEl.id;
                }

                else {
                  alert('The current element does not have a sibling Element');

                }  
              },

              keyDown53: function() {


                  //make sure it does not go past code playground boundary//
                if ( (stateMap.guideEl.parentElement) && !(stateMap.guideEl.parentElement.id === 'codeArea') ) {


                  //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.parentElement;
                  stateMap.guideElId = stateMap.guideEl.id;
                }

                else {
                  alert('The current element does not have a parent Element');

                }  
            },

          }, //end of controlMap//


            _setNewCurrentEl = function() {

              var newEl = document.getElementById(stateMap.guideElId);
              stateMap.currentEl = newEl;
                //fill in new currentElement/
                stateMap.currentEl.style.fill = stateMap.highlightColor;     
                console.log(stateMap.currentEl);  
                console.log(stateMap.guideElId);          

            };

            //public method//

            var traverseIt = function(event) {
              var keyCode = event.keyCode;

              //run only if it is one of programmed keyCodes //
              if ( (event.keyCode === 49 || 50 || 51 || 52 || 53) ) {
                  var keyCode = 'keyDown' + event.keyCode;
                  controlMap[keyCode]();
                  _setNewCurrentEl();               
              }

              else {
                alert('This button is not programmed');
                return false;
              }

            };

            return {traverseIt: traverseIt};
           


          }());

          
          document.addEventListener('keydown', controlModule.traverseIt, false);

        };

});        