      $(document).ready(function() {



        var NBAsvg = document.getElementById('nbaTraversal');


        NBAsvg.onload = function() {



          var controlModule = (function() {

            var stateMap = {

              guideEl: document.getElementById('code'),
              guideElId: 'code',
              currentEl: document.getElementById('nbaLogo')

            },

            controlMap = {

              keyDown97: function() {

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
              keyDown98: function() {

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

              keyDown99: function() {

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

              keyDown100: function() {

                if (stateMap.guideEl.nextElmentSibling) {
                  //refresh previous elements fill color//
                   stateMap.currentEl.style.fill = 'none';                  
                  stateMap.guideEl = stateMap.guideEl.nextElmentSibling;
                  stateMap.guideElId = stateMap.guideEl.id;
                }

                else {
                  alert('The current element does not have a sibling Element');

                }  
              },

              keyDown101: function() {


                  //make sure it does not go past code playground boundary//
                if ( (stateMap.guideEl.parentElement) && !(stateMap.guideEl.parentElement.id === 'code') ) {


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
                stateMap.currentEl.style.fill = 'green';                 

            };

            //public method//

            var traverseIt = function(event) {

              //run only if it is one of programmed keyCodes //
              if (event.keyCode === 97 || 98 || 99 || 100 || 101 ) {
                  var keyCode = 'keyDown' + event.keyCode;
                  controlMap[keyCode]();
                  _setNewCurrentEl();               
              }

              else {
                alert('This button is not programmed');
              }

            };

            return {traverseIt: traverseIt};
           


          }());

          
          document.addEventListener('keydown', controlModule.traverseIt, false);

        };

});        