'use strict';

angular.module('timerApp')
  .controller('ProCtrl', function ($scope,$document) {
   //deafults
  	$scope.windowWidth = 10;
	$scope.timerRunning = false;
	$scope.timerConsole = [];
    $scope.timerType = '';
  	$scope.graph = {'width': 100, 'height': 50};    
  	$scope.reactiontimes = [];
  	//light colors pre go
  	$scope.yellowpalefirst = 'rgba(248, 253, 114, 0.5)';
  	$scope.yellowpalesecond = 'rgba(248, 253, 114, 0.5)';
  	$scope.amberpalefirst = 'rgba(255, 228, 27, 0.4)';
  	$scope.amberpalesecond = 'rgba(255, 228, 27, 0.4)';
  	$scope.amberpalethird = 'rgba(255, 228, 27, 0.3)';
  	$scope.greenpale = 'rgba(92, 184, 92, 0.5)';
  	$scope.redpale = 'rgba(233, 66, 66, 0.5)';


	$scope.$watchCollection('[windowheight, windowWidth, yellowpalefirst, yellowpalesecond, amberpalefirst, amberpalesecond, amberpalethird, greenpale,redpale ]', function () {
		$scope.circles = [
    	//prestage
    	{'x': $scope.windowWidth/3, 'y': 40, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalefirst},
    	{'x': $scope.windowWidth/3+30, 'y': 40, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalefirst},
    	{'x': $scope.windowWidth/3+70, 'y': 40, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalefirst},
    	{'x': $scope.windowWidth/3+100, 'y': 40, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalefirst},
		//stage
		{'x': $scope.windowWidth/3, 'y': 80, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalesecond},
    	{'x': $scope.windowWidth/3+30, 'y': 80, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalesecond},
    	{'x': $scope.windowWidth/3+70, 'y': 80, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalesecond},
    	{'x': $scope.windowWidth/3+100, 'y': 80, 'r':10, 'stroke': 'black', 'strokewidth':2,'fill': $scope.yellowpalesecond},
		//amber one
    	{'x': $scope.windowWidth/3+30, 'y': 130, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalefirst},
    	{'x': $scope.windowWidth/3+70, 'y': 130, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalefirst},
		//amber two
    	{'x': $scope.windowWidth/3+30, 'y': 170, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalesecond},
    	{'x': $scope.windowWidth/3+70, 'y': 170, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalesecond},
		//amber three
    	{'x': $scope.windowWidth/3+30, 'y': 210, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalethird},
    	{'x': $scope.windowWidth/3+70, 'y': 210, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.amberpalethird},
		//green one
    	{'x': $scope.windowWidth/3+30, 'y': 260, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.greenpale},
    	{'x': $scope.windowWidth/3+70, 'y': 260, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.greenpale},
		//red one
    	{'x': $scope.windowWidth/3+30, 'y': 310, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.redpale},
    	{'x': $scope.windowWidth/3+70, 'y': 310, 'r':15, 'stroke': 'black', 'strokewidth':2,'fill': $scope.redpale},
		]
	}, true);


    
    $scope.startTimer = function (){
    	//lights timing
    	$scope.randstart = Math.floor(Math.random() * 3000) + 1000;
    	$scope.agreenstrt =  $scope.randstart + 500;
		$scope.$broadcast('timer-start');
        $scope.timerRunning = true;
	};
	$scope.resetgame = function(){
		$scope.yellowpalefirst = 'rgba(248, 253, 114, 0.5)';
	  	$scope.yellowpalesecond = 'rgba(248, 253, 114, 0.5)';
	  	$scope.amberpalefirst = 'rgba(255, 228, 27, 0.4)';
	  	$scope.amberpalesecond = 'rgba(255, 228, 27, 0.4)';
	  	$scope.amberpalethird = 'rgba(255, 228, 27, 0.3)';
	  	$scope.greenpale = 'rgba(92, 184, 92, 0.5)';
  		$scope.redpale = 'rgba(233, 66, 66, 0.5)';
		$scope.$broadcast('timer-stop');
       	$scope.timerRunning = false;
       	$scope.$broadcast('timer-clear');
        $scope.$broadcast('timer-stop');
		$scope.timerConsole = [];
	}; 
 
    $scope.$on('timer-stopped', function (event, data){
		console.log('Timer Stopped - data = ', data);
		console.log($scope.timerConsole);
    });
    $scope.$on('toquick', function(){
  		$scope.redpale = 'rgba(233, 66, 66, 1)';
		$scope.$broadcast('timer-stop');
       	$scope.timerRunning = true;
       	$scope.$broadcast('timer-clear');
        $scope.$broadcast('timer-stop');
		$scope.timerConsole = [];
		$scope.$apply();
		alert('to quick sonny jim!');
    });
	function MyTimeObject(n) {
		function numberWithCommas(x) {
    		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
	    $scope.reaction = n;
	    if($scope.reaction > 999){
	    	$scope.reaction = numberWithCommas($scope.reaction) + ' Seconds';
	    }else{
	    	$scope.reaction = '0.'+$scope.reaction+ ' Seconds';
	    }
	}
    $scope.$on('ontime', function(){
		$scope.$broadcast('timer-stop');
       	$scope.timerRunning = true;
       	$scope.$broadcast('timer-clear');
        $scope.$broadcast('timer-stop');
		$scope.timerConsole = [];
		MyTimeObject($scope.endarray.millis - $scope.agreenstrt);
		$scope.reactiontimes.push({'reactiontime': $scope.reaction}) ;
		$scope.$apply();
		//alert('your time:'+$scope.reactiontimes);
    });    
    $scope.$on('timer-tick', function (event, args) {
              //  $scope.timerConsole.push({'"'+$scope.timerType +'":'+ event.name + ', "timeoutId":' + args.timeoutId + ', "millis":' + args.millis};
               var evtname = event.name;

               $scope.timerConsole.push({'timerid': evtname, 'timeoutId': args.timeoutId, 'millis':args.millis});
               $scope.endarray = $scope.timerConsole[$scope.timerConsole.length -1]; 
				if($scope.endarray.millis >= 500){
					$scope.yellowpalefirst = 'rgba(248, 253, 114, 1)';
					$scope.$apply();
				}
				if($scope.endarray.millis >= 1000){
					$scope.yellowpalesecond = 'rgba(248, 253, 114, 1)';
					$scope.$apply();
				}
				if($scope.endarray.millis >= $scope.randstart ){
					$scope.amberpalefirst = 'rgba(255, 228, 27, 1)';
					$scope.amberpalesecond = 'rgba(255, 228, 27, 1)';
					$scope.amberpalethird = 'rgba(255, 228, 27, 1)';
					$scope.$apply();
				}
				if($scope.endarray.millis >= $scope.agreenstrt ){
				  	$scope.greenpale = 'rgba(92, 184, 92, 1)';
					$scope.$apply();
				}

    });

	$document.keydown(function(e){
	if(e.keyCode === 13){
		if($scope.endarray.millis <= $scope.agreenstrt ){
			$scope.$broadcast('toquick');
		}else{
			$scope.$broadcast('ontime');
			console.log()
		}
	}
	});


  })
  .directive('resize', function ($window) {
	return function ($scope, element) {
		console.log(element)
		$scope.getelementDimensions = function () {
			return { 'h': element.context.offsetHeight, 'w': element.context.offsetWidth };
		};
		$scope.$watch($scope.getelementDimensions, function (newValue, oldValue) {
			$scope.windowHeight = newValue.h;
            $scope.windowWidth = newValue.w;
            
		}, true);
	
		angular.element($window).bind('resize', function () {
			$scope.$apply();
		});
	}
});