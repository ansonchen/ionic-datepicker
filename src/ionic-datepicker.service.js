//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function(){
  'use strict';

  angular.module('ionic-datepicker')
    .service('IonicDatepickerService',IonicDatepickerService);

  IonicDatepickerService.$inject = [];
  function IonicDatepickerService(){
    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /**
     * Get years list
     */
	var hour=[],sec=[];  
	for(var i =0;i<24;i++){
		var di = i< 10 ? ('0'+i):(''+i);
		hour.push({id:di,name:di});
	}
	this.hourList = hour;
	
	 for(var i =0;i<60;i++){
		var di = i< 10 ? ('0'+i):(''+i);
		sec.push({id:di,name:di});
	}
	this.secList = sec;
	  
    this.getYearsList = function(from, to){
      var yearsList = [],
          minYear   = 1900,
          maxYear   = 2100;

      if(from){
        minYear = new Date(from).getFullYear();
      }

      if(to){
        maxYear = new Date(to).getFullYear();
      }

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      };

      return yearsList;
    };
  }

})();