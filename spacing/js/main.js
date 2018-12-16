    /*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
    /*global $, window, location, CSInterface, SystemPath, themeManager*/

    (function () {
        'use strict';

        var csInterface = new CSInterface();
        

        function init() {
            
            themeManager.init();
            
            $("#btn_Form").click(function () {
                
                var numbers = /^[0-9]+$/;  
                  if(spacing.value.match(numbers))  
                  {  
                        var spaceValue = document.getElementById("spacing").value;
                        csInterface.evalScript('presetSpacing(' + spaceValue + ')');
                  return true;  
                  }  
                  else  
                  {  
                  alert('Please input numeric characters only');  

                  return false;  
                  }  

                
            });

            $("#btn_Custom").click(function () {
                csInterface.evalScript('customSpacing()');
            });
            
                   $("#btn_0").click(function () {
                csInterface.evalScript('presetSpacing(0)');
            })
            
            $("#btn_34").click(function () {
                csInterface.evalScript('presetSpacing(34)');
            });

            $("#btn_48").click(function () {
                csInterface.evalScript('presetSpacing(48)');
            });
            
            $("#btn_56").click(function () {
                csInterface.evalScript('presetSpacing(56)');
            });

            $("#btn_62").click(function () {
                csInterface.evalScript('presetSpacing(62)');
            });

            $("#btn_64").click(function () {
                csInterface.evalScript('presetSpacing(64)');
            });
            $("#btn_68").click(function () {
                csInterface.evalScript('presetSpacing(68)');
            });
            $("#btn_72").click(function () {
                csInterface.evalScript('presetSpacing(72)');
            });

            $("#btn_74").click(function () {
                csInterface.evalScript('presetSpacing(74)');
            });

            $("#btn_76").click(function () {
                csInterface.evalScript('presetSpacing(76)');
            });

            $("#btn_80").click(function () {
            csInterface.evalScript('presetSpacing(80)');
        });

            $("#btn_82").click(function () {
            csInterface.evalScript('presetSpacing(82)');
        });

            $("#btn_84").click(function () {
            csInterface.evalScript('presetSpacing(84)');
        });

            $("#btn_86").click(function () {
            csInterface.evalScript('presetSpacing(86)');
        });

            $("#btn_88").click(function () {
            csInterface.evalScript('presetSpacing(88)');
        });

            $("#btn_92").click(function () {
            csInterface.evalScript('presetSpacing(92)');
        });
            
            $("#btn_96").click(function () {
            csInterface.evalScript('presetSpacing(96)');
        });

            $("#btn_98").click(function () {
            csInterface.evalScript('presetSpacing(98)');
        });

            $("#btn_102").click(function () {
            csInterface.evalScript('presetSpacing(102)');
        });

            $("#btn_104").click(function () {
            csInterface.evalScript('presetSpacing(104)');
        });

            $("#btn_106").click(function () {
            csInterface.evalScript('presetSpacing(106)');
        });

            $("#btn_112").click(function () {
            csInterface.evalScript('presetSpacing(112)');
        });

            $("#btn_116").click(function () {
            csInterface.evalScript('presetSpacing(116)');
        });

            $("#btn_120").click(function () {
            csInterface.evalScript('presetSpacing(120)');
        });

            $("#btn_132").click(function () {
            csInterface.evalScript('presetSpacing(132)');
        });
            
            $("#btn_144").click(function () {
            csInterface.evalScript('presetSpacing(144)');
        });
        }

        init();

    }());
