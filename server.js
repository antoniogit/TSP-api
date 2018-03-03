// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var coordData = [
var coordData = [
  {
    "longitude": -0.12575671, //warehouse
    "latitude": 51.54418659 
  },
  // {
  //   "longitude": 0.088264, //start location 1 , 0.088264
  //   "latitude": 51.611087 
  // },
  // {
  //   "longitude": -0.313080, //start location 2 , 
  //   "latitude": 51.629845 
  // },
  // {
  //   "longitude": -0.392731, //start location 3 ,
  //   "latitude":  51.474433 
  // },
  //   {
  //   "longitude": -0.129059, //start location 4 ,  
  //   "latitude":  51.404238 
  // },
  //   {
  //   "longitude": 0.085174, //start location 5,  
  //   "latitude":  51.479564 
  // },
 {
    "longitude": -0.06961739999997008,
    "latitude": 51.5235329 
 }, 
 {
    "longitude": -0.04484839999997803,
    "latitude": 51.55422799999999 
 }, 
 {
    "longitude": -0.06955609999999979,
    "latitude": 51.529413 
 }, 
 {
    "longitude": -0.10268719999999121,
    "latitude": 51.539117 
 }, 
 {
    "longitude": -0.07835690000001705,
    "latitude": 51.5263168 
 }, 
 {
    "longitude": -0.0821170000000393,
    "latitude": 51.5008518 
 }, 
 {
    "longitude": -0.07740050000006704,
    "latitude": 51.5180853 
 }, 
 {
    "longitude": -0.1595847999999478,
    "latitude": 51.5199252 
 }, 
 {
    "longitude": -0.05246339999996508,
    "latitude": 51.5525741 
 }, 
 {
    "longitude": -0.033851300000037554,
    "latitude": 51.5319314 
 }, 
 {
    "longitude": -0.0757759000000533,
    "latitude": 51.59762449999999 
 }, 
 {
    "longitude": -0.07245609999995395,
    "latitude": 51.4668722 
 }, 
 {
    "longitude": -0.16211120000002666,
    "latitude": 51.4567834 
 }, 
 {
    "longitude": -0.12469929999997476,
    "latitude": 51.51263729999999 
 }, 
{
    "longitude": -0.04498979999993935,
    "latitude": 51.5532861 
}, 
{
    "longitude": -0.11180719999993016,
    "latitude": 51.4626205 
}, 
 {
    "longitude": -0.2635181000000557,
    "latitude": 51.4651185 
 }, 
 {
    "longitude": -0.1387340999999651,
    "latitude": 51.5123393 
 }, 
 {
    "longitude": -0.12498819999996158,
    "latitude": 51.580679 
 }, 
{
    "longitude": -0.07632890000002135,
    "latitude": 51.5260711 
}, 
 {
    "longitude": -0.0741989000000558,
    "latitude": 51.5577529 
 }, 
{
    "longitude": -0.06961739999997008,
    "latitude": 51.5235329 
}, 
{
    "longitude": -0.034664799999973184,
    "latitude": 51.5321249 
}, 
 {
    "longitude": -0.11826880000000983,
    "latitude": 51.52179659999999 
 }, 
 {
    "longitude": -0.0440829000000349,
    "latitude": 51.5525696 
 }, 
 {
    "longitude": -0.1386916999999812,
    "latitude": 51.5561499 
 }, 
 {
    "longitude": -0.19392889999994622,
    "latitude": 51.5160348 
 }, 
 {
    "longitude": -0.08068909999997231,
    "latitude": 51.5259177 
 }, 
 {
    "longitude": -0.13916570000003503,
    "latitude": 51.555492 
 }, 
 {
    "longitude": -0.09736750000001848,
    "latitude": 51.5224845 
 }, 
 {
    "longitude": -0.13817900000003647,
    "latitude": 51.5563396 
 }, 
 {
    "longitude": -0.1021167000000105,
    "latitude": 51.5389638 
 }, 
 {
    "longitude": -0.10990089999995689,
    "latitude": 51.5216261 
 }, 
{
    "longitude": -0.10447690000000875,
    "latitude": 51.534218 
}, 
 {
    "longitude": -0.1109351999999717,
    "latitude": 51.5690691 
 }, 
{
    "longitude": -0.10356360000002951,
    "latitude": 51.5350305 
}, 
 {
    "longitude": -0.20213920000003327,
    "latitude": 51.4722237 
 }, 
{
    "longitude": -0.04484839999997803,
    "latitude": 51.55422799999999 
}, 
 {
    "longitude": -0.07684879999999339,
    "latitude": 51.52776129999999 
 }, 
 {
    "longitude": -0.20418129999995926,
    "latitude": 51.4766883 
 }, 
{
    "longitude": -0.12251430000003438,
    "latitude": 51.5804686 
}, 
 {
    "longitude": -0.06133230000000367,
    "latitude": 51.5356621 
 }, 
{
    "longitude": -0.06961739999997008,
    "latitude": 51.5235329 
}, 
 {
    "longitude": -0.13863739999999325,
    "latitude": 51.5136506 
 }, 
 {
    "longitude": -0.3023086000000603,
    "latitude": 51.4606868 
 }, 
 {
    "longitude": -0.20879149999996116,
    "latitude": 51.5214693 
 }, 
 {
    "longitude": -0.14963639999996303,
    "latitude": 51.4431343 
 }, 
 {
    "longitude": -0.15310230000000047,
    "latitude": 51.5205427 
 }, 
 {
    "longitude": -0.06133230000000367,
    "latitude": 51.5356621 
 }, 
{
    "longitude": -0.101037099999985,
    "latitude": 51.5212491 
}, 
 {
    "longitude": -0.18358549999993556,
    "latitude": 51.4999674 
 }, 
 {
    "longitude": -0.12822689999995873,
    "latitude": 51.5106073 
 }, 
 {
    "longitude": -0.11377279999999246,
    "latitude": 51.4809341 
 }, 
 {
    "longitude": -0.21702849999996943,
    "latitude": 51.4637104 
 }, 
 {
    "longitude": -0.08688240000003589,
    "latitude": 51.5277725 
 }, 
 {
    "longitude": -0.20418129999995926,
    "latitude": 51.4766883 
 }, 
 {
    "longitude": -0.138364700000011,
    "latitude": 51.52811519999999 
 }, 
 {
    "longitude": -0.1359595999999783,
    "latitude": 51.5149929 
 }, 
{
    "longitude": -0.07632890000002135,
    "latitude": 51.5260711 
}, 
{
    "longitude": -0.09388739999997142,
    "latitude": 51.432475 
}, 
 {
    "longitude": -0.26284880000002886,
    "latitude": 51.555473 
 }, 
{
    "longitude": -0.08854470000005676,
    "latitude": 51.5541657 
}, 
 {
    "longitude": -0.05631370000003244,
    "latitude": 51.4665967 
 }, 
{
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
}, 
 {
    "longitude": -0.06776420000005601,
    "latitude": 51.4978375 
 }, 
 {
    "longitude": -0.07500000000004547,
    "latitude": 51.5165622 
 }, 
 {
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
 }, 
 {
    "longitude": -0.17571050000003652,
    "latitude": 51.5008973 
 }, 
 {
    "longitude": -0.09875130000000354,
    "latitude": 51.512795 
 }, 
 {
    "longitude": -0.13817900000003647,
    "latitude": 51.5563396 
 }, 
 {
    "longitude": -0.21358580000003258,
    "latitude": 51.4799793 
 }, 
 {
    "longitude": -0.16590480000002117,
    "latitude": 51.5147366 
 }, 
 {
    "longitude": -0.1030163000000357,
    "latitude": 51.4527756 
 }, 
{
    "longitude": -0.07632890000002135,
    "latitude": 51.5260711 
}, 
 {
    "longitude": -0.07764250000002448,
    "latitude": 51.5246629 
 }, 
 {
    "longitude": -0.10256419999996069,
    "latitude": 51.52230789999999 
 }, 
 {
    "longitude": -0.08338389999994433,
    "latitude": 51.5262855 
 }, 
 {
    "longitude": -0.2862350000000333,
    "latitude": 51.4774397 
 }, 
 {
    "longitude": -0.07541179999998349,
    "latitude": 51.5508935 
 }, 
 {
    "longitude": -0.10447690000000875,
    "latitude": 51.534218 
 }, 
 {
    "longitude": -0.12251430000003438,
    "latitude": 51.5804686 
 }, 
 {
    "longitude": -0.08651570000006359,
    "latitude": 51.4983428 
 }, 
 {
    "longitude": -0.1060198999999784,
    "latitude": 51.5303941 
 }, 
 {
    "longitude": -0.2185276000000158,
    "latitude": 51.5338652 
 }, 
 {
    "longitude": -0.14723900000001322,
    "latitude": 51.5705202 
 }, 
 {
    "longitude": -0.0722892999999658,
    "latitude": 51.5217064 
 }, 
 {
    "longitude": -0.08854470000005676,
    "latitude": 51.5541657 
 }, 
 {
    "longitude": -0.05830979999996089,
    "latitude": 51.5375635 
 }, 
{
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
}, 
 {
    "longitude": -0.15156160000003638,
    "latitude": 51.51979009999999 
 }, 
 {
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
 }, 
 {
    "longitude": -0.07427849999999125,
    "latitude": 51.5603081 
 }, 
 {
    "longitude": -0.20384869999998045,
    "latitude": 51.5177698 
 }, 
 {
    "longitude": -0.15491769999994176,
    "latitude": 51.5184221 
 }, 
 {
    "longitude": -0.10334960000000137,
    "latitude": 51.5426078 
 }, 
{
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
}, 
 {
    "longitude": -0.13418419999993603,
    "latitude": 51.5129414 
 }, 
{
    "longitude": -0.07632890000002135,
    "latitude": 51.5260711 
}, 
 {
    "longitude": -0.07317080000007081,
    "latitude": 51.4574236 
 }, 
 {
    "longitude": -0.19264739999994163,
    "latitude": 51.4999815 
 }, 
{
    "longitude": -0.07529820000002019,
    "latitude": 51.4571528 
}, 
{
    "longitude": -0.07573070000000826,
    "latitude": 51.52338109999999 
}, 
 {
    "longitude": -0.06961739999997008,
    "latitude": 51.5235329 
 }, 
 {
    "longitude": -0.04498979999993935,
    "latitude": 51.5532861 
 }, 
 {
    "longitude": -0.05818299999998544,
    "latitude": 51.5432537 
 }, 
{
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
}, 
 {
    "longitude": -0.07740050000006704,
    "latitude": 51.5180853 
 }, 
 {
    "longitude": -0.11180719999993016,
    "latitude": 51.4626205 
 }, 
 {
    "longitude": -0.08550030000003517,
    "latitude": 51.5225702 
 }, 
{
    "longitude": -0.10447690000000875,
    "latitude": 51.534218 
}, 
 {
    "longitude": -0.0791297000000668,
    "latitude": 51.562276 
 }, 
 {
    "longitude": -0.0743181000000277,
    "latitude": 51.5241857 
 }, 
{
    "longitude": -0.19334909999997762,
    "latitude": 51.5518067 
}, 
 {
    "longitude": -0.19334909999997762,
    "latitude": 51.5518067 
 }, 
{
    "longitude": -0.09388739999997142,
    "latitude": 51.432475 
}, 
{
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
}, 
 {
    "longitude": -0.1257308000000421,
    "latitude": 51.5440286 
 }, 
{
    "longitude": -0.15395760000001246,
    "latitude": 51.5400249 
}, 
 {
    "longitude": -0.0890002999999524,
    "latitude": 51.5092104 
 }, 
 {
    "longitude": -0.19470419999993283,
    "latitude": 51.51465289999999 
 }, 
 {
    "longitude": -0.11306139999999232,
    "latitude": 51.4995643 
 }, 
 {
    "longitude": -0.05246339999996508,
    "latitude": 51.5525741 
 }, 
 {
    "longitude": -0.07427510000002258,
    "latitude": 51.4879538 
 }, 
 {
    "longitude": -0.101037099999985,
    "latitude": 51.5212491 
 }, 
 {
    "longitude": -0.07668620000004012,
    "latitude": 51.5213559 
 }, 
 {
    "longitude": -0.18599870000002738,
    "latitude": 51.6208804 
 }, 
 {
    "longitude": -0.10447690000000875,
    "latitude": 51.534218 
 }, 
{
    "longitude": -0.09388739999997142,
    "latitude": 51.432475 
}, 
 {
    "longitude": -0.09388739999997142,
    "latitude": 51.432475 
 }, 
 {
    "longitude": -0.11180719999993016,
    "latitude": 51.4626205 
 }, 
 {
    "longitude": -0.07357619999993403,
    "latitude": 51.5612228 
 }, 
 {
    "longitude": -0.07529820000002019,
    "latitude": 51.4571528 
 }, 
 {
    "longitude": -0.034664799999973184,
    "latitude": 51.5321249 
 }, 
 {
    "longitude": -0.1082162000000153,
    "latitude": 51.5083619 
 }, 
 {
    "longitude": -0.07686769999997978,
    "latitude": 51.5197852 
 }, 
 {
    "longitude": -0.07497520000003988,
    "latitude": 51.5492767 
 }, 
 {
    "longitude": -0.18018000000006396,
    "latitude": 51.48671359999999 
 }, 
 {
    "longitude": -0.06494759999998223,
    "latitude": 51.543914 
 }, 
 {
    "longitude": -0.1035612000000583,
    "latitude": 51.5347427 
 }, 
 {
    "longitude": -0.20590809999998783,
    "latitude": 51.5152474 
 }, 
 {
    "longitude": -0.11610580000001391,
    "latitude": 51.5214651 
 }, 
 {
    "longitude": -0.214440599999989,
    "latitude": 51.5266631 
 }, 
 {
    "longitude": -0.08137520000002496,
    "latitude": 51.5253714 
 }, 
 {
    "longitude": -0.07137860000000273,
    "latitude": 51.5241554 
 }, 
 {
    "longitude": -0.04484839999997803,
    "latitude": 51.55422799999999 
 }, 
{
    "longitude": -0.0884604999999965,
    "latitude": 51.51969589999999 
}, 
 {
    "longitude": -0.11378349999995407,
    "latitude": 51.4614743 
 }, 
 {
    "longitude": -0.07573070000000826,
    "latitude": 51.52338109999999 
 }, 
 {
    "longitude": -0.07151029999999992,
    "latitude": 51.5217205 
 }, 
 {
    "longitude": -0.10356360000002951,
    "latitude": 51.5350305 
 }, 
 {
    "longitude": -0.11914899999999307,
    "latitude": 51.5221254 
 }, 
 {
    "longitude": -0.07401839999999993,
    "latitude": 51.5235564 
 }, 
 {
    "longitude": -0.0884604999999965,
    "latitude": 51.51969589999999 
 }, 
 {
    "longitude": -0.13661980000006224,
    "latitude": 51.514356 
 }, 
 {
    "longitude": -0.07519800000000032,
    "latitude": 51.5241731 
 }, 
 {
    "longitude": -0.10156789999996363,
    "latitude": 51.4529949 
 }, 
 {
    "longitude": -0.10285699999997178,
    "latitude": 51.5402348 
 }, 
 {
    "longitude": -0.07632890000002135,
    "latitude": 51.5260711 
 }, 
 {
    "longitude": -0.17584110000007058,
    "latitude": 51.48896629999999 
 }, 
 {
    "longitude": -0.15395760000001246,
    "latitude": 51.5400249 
 }, 
 {
    "longitude": -0.07003039999995053,
    "latitude": 51.4574799 
 }, 
 {
    "longitude": -0.15031199999998535,
    "latitude": 51.5157687 
 }, 
 {
    "longitude": -0.058522199999970326,
    "latitude": 51.5091864 
 }, 
 {
    "longitude": -0.02579209999998966,
    "latitude": 51.47824480000001 
 }, 
 {
    "longitude": -0.06088760000000093,
    "latitude": 51.5301783 
 },
 {
    "longitude": -0.1262742,
    "latitude": 51.5442538
 }
];
];


var coord = [];
var matrix = [];
var timeCosts = [];
var shortestTrip = [];
var nrOfIterations = 100;
var nDrivers = 5;
var driverHomes = [1,2,3,4,5]; // in the beginning the driver homes are set as being the warehouse
var nNodes = coord.length;
var shopPickupTimeIntervals = [];
var warehouseNode = 0;
var isSolution;
var clusterCenter;
var globalshortestTrip;
var globalBestFitness;

function inititlizeCostMatrix() {
  
    populateMatrix();
    // console.log(matrix);
    populteTimeMatrix();
    // console.log(timeCosts);
    createClosetShopMatrix();
    // console.log(shortestTrip);
    // console.log("here2");


    //populate matrix with the distance costs between every shop
    function populateMatrix() {
        for(var i=0; i<coord.length; i++) {
            matrix[i] = [];
            shopPickupTimeIntervals[i] = 16; //set the shops pickup intervals to 16 for all the shops for now
            for(var j=0; j<coord.length; j++) {
                matrix[i][j] =getDistanceFromLatLonInKm(coord[i].latitude, coord[i].longitude, coord[j].latitude, coord[j].longitude);
            }
        }
    }

    //populate the timeCosts matrix with the (estimated by me) cost in time of travelling from one node to another
    function populteTimeMatrix() {
        for(var i=0; i<coord.length; i++) {
            timeCosts[i] = [];
            for(var j=0; j<coord.length; j++) {
                timeCosts[i][j] = 4.711 * matrix[i][j];
            }
        }
    }

    function createClosetShopMatrix() { //shortestTrip[node] = array of closest nodes from the node

        shortestTrip = [];

        for(var i=0; i<timeCosts.length; i++) {
            var costOBj = [{}];
            //costOBj.length = 0;
            for( var j=0; j<timeCosts[i].length; j++) {
                costOBj[j] = {
                    "position" : j,
                    "value": timeCosts[i][j]
                }
            }
            costOBj = costOBj.sort(compare);
            
            // var sortedTimes = timeCosts[i].sort(function(a, b){return a-b});
            var temp = [];
            temp.length = 0;
            for(var j=0; j<costOBj.length; j++) {
               temp[j] = costOBj[j].position;
            }
             shortestTrip.push(temp);
        }

        function compare(a,b) {
          if (a.value < b.value)
            return -1;
          if (a.value > b.value)
            return 1;
          return 0;
        }
    }

    //using Haversine formula 
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

}

class optimisedTSP {

    constructor() {}

    static hc (isV2) {
        this.visited = [];
        this.testedNodes = [];
        this.driversNodes = [];
        // isSolution = true;

        this.setVisited();
        this.setDriversHomePoints();
        this.testedNodes = this.visited;

        while(this.areThereAnyUnivistedPlacesLeft(this.visited)) {
            this.travel(isV2);
        }

        optimisedTSP.takeDriversToWarehouse();
        return this.driversNodes;
    }


    static travel(isV2) {

        var drvr = optimisedTSP.chooseRandomDriver(nDrivers);
        var randomLoc = this.randomUnvisitedLocation();
        // var drvr = this.chooseLeastTravellingDriver(nDrivers);

        var currentLocation = this.driversNodes[drvr][this.driversNodes[drvr].length-1];
        var closestUnivistedLoc = this.closestUnivistedLoc(currentLocation, drvr);
        
        if(closestUnivistedLoc != -1) { //if the current location is valid and untested, the driver travels there
            var temp = [];
            temp = this.driversNodes[drvr];          
            temp.push(closestUnivistedLoc);
            this.driversNodes[drvr] = temp;
            this.visited[closestUnivistedLoc] = 1;
            this.testedNodes = this.visited;

            //get the closest nodes as well
            if (!isV2) {
                for(var i=0; i<shortestTrip[closestUnivistedLoc].length; i++)
                    if(timeCosts[closestUnivistedLoc][shortestTrip[closestUnivistedLoc][i]]<=35 && this.visited[shortestTrip[closestUnivistedLoc][i]] == 0 ) {
                        var temp = [];
                        temp.length = 0;
                        temp = this.driversNodes[drvr];          
                        temp.push(shortestTrip[closestUnivistedLoc][i]);
                        this.driversNodes[drvr] = temp;
                        this.visited[shortestTrip[closestUnivistedLoc][i]] = 1;
                        this.testedNodes = this.visited;
                    }
            }
            isSolution = true;
            return isSolution
        }
    }

    static takeDriversToWarehouse() {
        for(var drvr=0; drvr< nDrivers; drvr++) { //last driver is already at the Warehouse 
            var temp = [];
            temp = this.driversNodes[drvr];
            temp.push(warehouseNode);
            this.driversNodes[drvr] = temp;
        }
    }

    static setVisited () {
        for (var i=0; i<nNodes; i++) {
            this.visited.push(0);
        }
    }

    static setDriversHomePoints () {
        
        for (var drvr = 0; drvr < driverHomes.length; drvr++ ) {
             
            var temp = [];
            temp.push(driverHomes[drvr]);
            this.driversNodes[drvr] = temp;
            
            this.visited[driverHomes[drvr]] = 1; 
        }   
    }

    static areThereAnyUnivistedPlacesLeft (visited) {
        
        if (visited.length == 0) {
            return true;
        }

        for(var i=0; i<visited.length; i++) {
            if(visited[i] == 0) {
                return true;
            }
        }
        return false;
    }

    static areAnyMoreUntestedLoc () {

        for(var i=0; i<this.testedNodes.length; i++) {
           // console.log("this.testedNodes[i] ")
            //console.log(this.testedNodes[i])
            if(this.testedNodes[i] == 0) {
              return true;
            }
          }
        return false;
    }

    static chooseRandomDriver (drivers) {
        
        var min = 0;
        var max = drivers;

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static chooseLeastTravellingDriver (drivers) {

        var minTime = Number.POSITIVE_INFINITY;
        var driver = -1; 
        for(var i=0; i<drivers; i++) {
            var spentTime = this.timeElapsedByDriver(i);
            if(spentTime < minTime) {
                minTime = spentTime;
                driver = i;
            }
        }
        return driver;
    }

    static getRandom (array) {
        var item = array[Math.floor(Math.random()*array.length)];
        return item;
    }

    static randomUnvisitedLocation () {
        
        var loc = -1;
        var thereAreUnivisted = false;
        var  remaining = [];
        remaining.length = 0;
        
        for (var i=0; i<nNodes; i++) {
            
            if( this.visited[i] == 0 ) {
                remaining.push(i); // populate raiming[] with the univisted nodes
                thereAreUnivisted = true;
            }
        }
        
        if(thereAreUnivisted) {
            loc = optimisedTSP.getRandom(remaining);
        }
        return loc;
    }

    static closestUnivistedLoc (currentLocation, drvr) {
        var visit = 0;
        var initial;
        for(var i=0; i<shortestTrip[currentLocation].length; i++) {

            if(this.visited[shortestTrip[currentLocation][i]] != 1) {

                return shortestTrip[currentLocation][i];

            }
        }
        return -1;
    }

    static timeElapsedByDriver ( driverId, driversNodes) {
        var time = 0;

        for(var i=1; i<driversNodes[driverId].length; i++) {
            
            time += timeCosts[driversNodes[driverId][i-1]][driversNodes[driverId][i]];
        }

        return time;
    }

    static isValidLocation ( driverId, PossibleLocation) {
    
        var currentDriverLocation = this.driversNodes[driverId][this.driversNodes[driverId].length-1];
        for(var i=0; i<this.driversNodes.length; i++) {
            var otherDriverCurrentLocation = this.driversNodes[i][this.driversNodes[i].length-1];

            if( timeCosts[otherDriverCurrentLocation][PossibleLocation] < timeCosts[currentDriverLocation][PossibleLocation] ) {
                return false;
            }
        }
       

        if(this.testedNodes[PossibleLocation] == 1 || this.visited[PossibleLocation] == 0)
            return false;
        
        return true;
    }

    static fitness (driversNodes) {

        var driverTime = 0;
        var maxTime = 0;
        var sum = 0;

        for(var i=0; i<driversNodes.length; i++) {
   
            driverTime = this.timeElapsedByDriver(i, driversNodes)+timeCosts[0][driversNodes[i].length];
            sum += driverTime;
            if(driverTime > maxTime) {
                maxTime = driverTime;
            }
        }
        return maxTime;
    }

    static getOverallDroveDistance (driversNodes) {
        var distance = 0;

        for(var i=0; i<driversNodes.length; i++) {
            for(var j=0; j<driversNodes[i].length - 1; j++)
                distance += matrix[driversNodes[i][j]][driversNodes[i][j+1]];
        }

        return distance;
    }

    static chooseTSPInterchangebleRoute (driversNodes) {
        var drvr1 = optimisedTSP.chooseRandomDriver(nDrivers);
        var drvr2 = optimisedTSP.chooseRandomDriver(nDrivers);

        // properly chooseing the two drivers with interchangeble locations
        while (drvr2 == drvr1) {
            var drvr2 = optimisedTSP.chooseRandomDriver(nDrivers);
        }


        var initialLocIndexDriver1 = optimisedTSP.chooseRandomLocation(driversNodes[drvr1].length);
        var initialLocIndexDriver2 = optimisedTSP.chooseRandomLocation(driversNodes[drvr2].length);

        var location1 = driversNodes[drvr1][initialLocIndexDriver1];
        var location2 = driversNodes[drvr2][initialLocIndexDriver2];

        var drvrsNds = driversNodes;

        var arrDriver1 = driversNodes[drvr1];
        var arrDriver2 = driversNodes[drvr2];

        if (location1 > nDrivers && location2 != 0) {
            arrDriver1.splice(initialLocIndexDriver1, 1);
            arrDriver2.splice(initialLocIndexDriver2, 0, location1);

            driversNodes[drvr1] = arrDriver1;
            driversNodes[drvr2] = arrDriver2;
        }

        return driversNodes;
    }

    static chooseRandomDriver (drivers) {
        
        var min = 0;
        var max = drivers;

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static chooseRandomLocation (driverNodeLength) {
        var min = 1;
        var max =  driverNodeLength -2;

        min = Math.ceil(min);
        max = Math.floor(max);
        // return Math.floor(Math.random() * (max - min)) + min;
        return Math.floor(Math.random() * max) + min;  

    }
};


function globalFitness(numberOfIterations, isV2) { 
        findDupliacates();
        clusterCenter = getClusterCenter();
        
         var circleStartingPoints = newOnCircleStartingPoints();
    
         for(var i=0; i<circleStartingPoints.length; i++) {
             coord.splice(1, 0, circleStartingPoints[i]);
         }

        nNodes = coord.length;
        inititlizeCostMatrix();
        var initialDriversNodes = [];
        var driversNodes = [];

        globalshortestTrip = shortestTrip; //keeps the shortest distances matrix for the final routing  
        currentSolution = [];
        mostEfficientSolution = [];
        
        lowestFitness = Number.POSITIVE_INFINITY;

        timeElapsed = [];
        timeElapsed.length = 0;

            if (isV2) {

                // issue here somewhere
                intermediarySolution = optimisedTSP.hc(isV2);

                // route optimisation done here 
                currentSolution = createOptimalRoute.mainOptimal(intermediarySolution);
                mostEfficientSolution = currentSolution;
                // end route optimisation
   
                currentFitness = optimisedTSP.fitness(currentSolution);
                lowestFitness = currentFitness;

                for(var i=0; i< numberOfIterations; i++) {


                    currentSolution = optimisedTSP.chooseTSPInterchangebleRoute(mostEfficientSolution);
                    currentFitness = optimisedTSP.fitness(currentSolution);

                    if( currentFitness < lowestFitness  ) {
                        lowestFitness = currentFitness;
                        mostEfficientSolution = currentSolution;
                    }
                    currentSolution = [];
                }

            }
            else {
                for(var i=0; i< numberOfIterations; i++) {

                    // issue here somewhere
                    intermediarySolution = optimisedTSP.hc(isV2);

                    // route optimisation done here 
                    currentSolution = createOptimalRoute.mainOptimal(intermediarySolution);
                    // end route optimisation

                    currentFitness = optimisedTSP.fitness(currentSolution);

                    if( currentFitness < lowestFitness) {
                        globalBestFitness = currentFitness;
                        lowestFitness = currentFitness;
                        mostEfficientSolution = currentSolution;
                    }
                    currentSolution = [];

                }

                // console.log("The most efficient solution is:");
                if(mostEfficientSolution.length > 0) {
                    
                    var sumAverage = 0;
                    for(var k=0; k<timeElapsed.length; k++) {
                        sumAverage += timeElapsed[k];
                    }
                     // console.log("The average time is: "+sumAverage/timeElapsed.length)
                } else {
                    // console.log("No solution was found for the given data set");
                }
            }

            return mostEfficientSolution;
}

//find nDrivers random points on a circle with the center in the gravity center and a radius of about 20km
function newOnCircleStartingPoints() {
    
    // x=Cx+(r*cos(d/(180/PI)) // latitude
    // y=Cy+(r*sin(d/(180/PI))//longitude
    var startingPoints = [];
    startingPoints.length = 0;
    var r = 17000; //meters
    startingPoints.length = 0;
    var EARTH_RADIUS = 6378100.0;

    for(var i=0; i<nDrivers; i++) {
        var temp = {};
        var angle = generateRandomAngle();
        temp = {
            "latitude" : ((clusterCenter.latitude * Math.PI / 180.0) + (r/EARTH_RADIUS) * Math.sin(angle))* 180.0 / Math.PI,
            "longitude" :  ((clusterCenter.longitude * Math.PI / 180.0) + (r/EARTH_RADIUS) * Math.cos(angle)/Math.cos(clusterCenter.latitude * Math.PI / 180.0))* 180.0 / Math.PI
        }
        startingPoints.push(temp);
    } 
    
    return startingPoints;
} 

function generateRandomAngle() {
    var min = 0;
    var max = 359;
    return Math.random() * (max - min) + min;
}

//find duplicates in coordonates object and remove them
function findDupliacates() {

    var newCoord = [];
        for( var i=0; i<coord.length; i++) {
            if(doesNewCoordContainElement(newCoord, coord[i]) == false ) {
                newCoord.push({
                    "longitude": coord[i].longitude,
                    "latitude": coord[i].latitude
                });
            }
        }
    coord = newCoord;
    nNodes = coord.length;
}

// helps find if the newly populated coordonates object has been populated
function doesNewCoordContainElement(newCoord, element) {
    for(var i =0; i <newCoord.length; i++) {
        if(newCoord[i].latitude == element.latitude && newCoord[i].longitude == element.longitude ) {
            return true;
        }
    }
    return false;
}

//calculate the center of the cluster;
function getClusterCenter() {
        var gravityCenter = {};
        var long = 0;
        var lat = 0;
        for(var i=0; i< coord.length; i++) {
            long += coord[i].longitude;
            lat += coord[i].latitude;
        }

        gravityCenter = {
            "longitude" : long/coord.length,
            "latitude" : lat/coord.length
        };
        // console.log("gravityCenter");
        // console.log(gravityCenter);
        return gravityCenter;

}
 
// mapping settings
function setPinImage(id) {
    var pinColors = [ "FFA000","009688","673AB7","4CAF50", "9E9E9E"];
    var randomColor = (Math.random() * 0xFFFFFF << 0).toString(16);
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColors[id],
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34));

    return pinImage;
}

//more mapping stufff
function setPinShadow() {
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
    new google.maps.Size(40, 37),
    new google.maps.Point(0, 0),
    new google.maps.Point(12, 35));

    return pinShadow;
}

class createOptimalRoute {

    constructor() {}

    static areThereAnyUnvisitedShopsByTheCurrentDriver (visited, driverPath) {

        if(visited.length < driverPath.length-1) {
            return true;
        }
        return false;
    }

    static findNextClosestLocation (currentLoc, driverPath, visited) {

        var bestJ = "test";
        var bestPosition = Number.POSITIVE_INFINITY;
        var smallestIndex = Number.POSITIVE_INFINITY;
        var closestShopToCurrentPosition;

        for(var j=1; j<driverPath.length; j++) {
                               
            var isVisited =  visited.indexOf( globalshortestTrip[currentLoc][ globalshortestTrip[currentLoc].indexOf(driverPath[j])] );
            var indexOfTestedNode = globalshortestTrip[currentLoc].indexOf( driverPath[j] );
            
            if( isVisited == -1  && indexOfTestedNode < smallestIndex) {  //&& globalshortestTrip[currentLoc].indexOf( driverPath[j] )) {
                closestShopToCurrentPosition = driverPath[j];            //globalshortestTrip[currentLoc][ globalshortestTrip[currentLoc].indexOf(driverPath[j])];
                smallestIndex = indexOfTestedNode;
            }
        }
        return  closestShopToCurrentPosition;

    }

    static mainOptimal (driversNodes) {


        var temp = [];
        var optimalDriversNodes = [];
        this.visited = [];
        //optimalDriversNodes.length = 0;

        for(var drvr=0; drvr<driversNodes.length; drvr++) {

            this.visited = [];
            temp = [];
            // driverPath.length = 0;
            this.driverPath = [];

            for(var drvrLoc=0; drvrLoc<driversNodes[drvr].length; drvrLoc ++) {//add the driver path to an array to be sorted;
                if(drvrLoc != driversNodes[drvr].length - 1) {//ignore the warehouse
                    this.driverPath.push(driversNodes[drvr][drvrLoc]);
                }
            }
            
            var currentLoc = this.driverPath[0];

            temp.push(currentLoc);
            this.visited[currentLoc] = 1;
            var locationToGo;

            while(createOptimalRoute.areThereAnyUnvisitedShopsByTheCurrentDriver(this.visited, this.driverPath)) {
                
                locationToGo = createOptimalRoute.findNextClosestLocation(temp[temp.length-1], this.driverPath, this.visited);
                temp.push(locationToGo);
                this.visited.push(locationToGo);
            }
            
            temp.push(warehouseNode);
            optimalDriversNodes.push(temp);
        }

        return optimalDriversNodes;

    }

    static closestUnivistedLoc (currentLocation, driverPath, visited) {
        var visit = 0;
        var initial;
        for(var i=0; i<shortestTrip[currentLocation].length; i++) {

            for (var j=0; j<driverPath-1; j++) {
                if (driverPath[j] == shortestTrip[currentLocation][i] ) {
                    if (visited.indexOf(driverPath[j]) == -1) {
                        return driverPath[j];
                    }
                }
            }
        }
        return -1;
    }
}

function findQuadrantOfCoordinate(coordinate) {
    topLeft = {
        "longitude" : -0.224958,
        "latitude"  : 51.546865 
    };

    topMidle = {
        "longitude" : -0.1597453,
        "latitude"  : 51.546865
    };

    topRight = {
        "longitude" : -0.094477,
        "latitude"  : 51.546865 
    };

    middleRight = {
        "longitude" : -0.094477,
        "latitude"  : 51.5146565
    };


    bottomRight = {
        "longitude"  :  -0.094477,
        "latitude"   :  51.482448
    };

    bottomMiddle = {
        "longitude" : -0.1597453,
        "latitude"  : 51.482448
    };

    bottomLeft = {
        "longitude" : -0.224958,
        "latitude"  : 51.482448
    };

    middleLeft = {
        "longitude" : -0.224958,
        "latitude"  : 51.5146565
    };

    if (coordinate.latitude >= middleRight.latitude && coordinate.longitude >= middleRight.longitude) {
        return 0;
    } else if (coordinate.latitude >= topMidle.latitude && coordinate.longitude >= topMidle.longitude) {
        return 0;
    } else if (coordinate.latitude < middleRight.latitude && coordinate.longitude < middleRight.longitude) {
        return 1;
    } else if (coordinate.latitude <= bottomMiddle.latitude && coordinate.longitude >= bottomMiddle.longitude) {
        return 1;
    } else if (coordinate.latitude < bottomMiddle.latitude && coordinate.longitude < bottomMiddle.longitude) {
        return 2;
    } else if (coordinate.latitude <= middleLeft.latitude && coordinate.longitude <= middleLeft.longitude) {
        return 2;
    } else if (coordinate.latitude > middleLeft.latitude && coordinate.longitude <= middleLeft.longitude) {
        return 3;
    } else if (coordinate.latitude > topMidle.latitude && coordinate.longitude < topMidle.longitude) {
        return 3;
    } else {
        return 4;
    }

}


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/v1', function(req, res) {

    coord = coordData;
    matrix = [];
    timeCosts = [];
    shortestTrip = [];
    nrOfIterations = 100;
    nDrivers = 5;
    driverHomes = [1,2,3,4,5]; // in the beginning the driver homes are set as being the warehouse
    nNodes = coord.length;
    shopPickupTimeIntervals = [];
    warehouseNode = 0;
    isSolution;
    clusterCenter;
    globalshortestTrip = [];

    var main = (function() {

        initialDriversNodes = globalFitness(3000, null);
        //globalshortestTrip
        driversNodes = createOptimalRoute.mainOptimal(initialDriversNodes);
        fitness = optimisedTSP.fitness(driversNodes);
        var distance = optimisedTSP.getOverallDroveDistance(driversNodes);

        var driversPaths = [];
        for(var i=0; i< driversNodes.length; i++) {
            // console.log(driversNodes[i]);
            var temp = driversNodes[i];
            // var pinImage = setPinImage(i); //set the pin colour
            // var pinShadow = setPinShadow();
            var driverPath = [];

            for (var j=0; j<temp.length; j++) {
              var myLatLng;
              myLatLng = {lat: coord[temp[j]].latitude, lng: coord[temp[j]].longitude};
              driverPath.push(myLatLng);
            }

            var driverObj = {};
            driverObj['driver_id'] = i;
            driverObj['driver_path'] = driverPath;
            driversPaths.push(driverObj);
        }

         res.json({ 
            message: driversPaths,
            fitness: fitness,
            distance: distance
         });
 })();
 
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/v2', function(req, res) {

    coord = coordData;
    matrix = [];
    timeCosts = [];
    shortestTrip = [];
    nrOfIterations = 100;
    nDrivers = 5;
    driverHomes = [1,2,3,4,5]; // in the beginning the driver homes are set as being the warehouse
    nNodes = coord.length;
    shopPickupTimeIntervals = [];
    warehouseNode = 0;
    isSolution;
    clusterCenter;
    globalshortestTrip = [];

    var main = (function() {

        

        initialDriversNodes = globalFitness(10000, true);
        //globalshortestTrip
        driversNodes = createOptimalRoute.mainOptimal(initialDriversNodes);
        fitness = optimisedTSP.fitness(driversNodes);
        var distance = optimisedTSP.getOverallDroveDistance(driversNodes);

         var driversPaths = [];
         for(var i=0; i< driversNodes.length; i++) {
             var temp = driversNodes[i];
             var driverPath = [];
             for (var j=0; j<temp.length; j++) {
                  var myLatLng;
                  myLatLng = {lat: coord[temp[j]].latitude, lng: coord[temp[j]].longitude};
                  driverPath.push(myLatLng);
             }

             var driverObj = {};
             driverObj['driver_id'] = i;
             driverObj['driver_path'] = driverPath;
             driversPaths.push(driverObj);
         }

         res.json({ 
            message: driversPaths,
            fitness: fitness,
            distance: distance
         });
 })();
 
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/v3', function(req, res) {

    coord = coordData;
    matrix = [];
    timeCosts = [];
    shortestTrip = [];
    nrOfIterations = 100;
    nDrivers = 5;
    driverHomes = [1,2,3,4,5]; // in the beginning the driver homes are set as being the warehouse
    nNodes = coord.length;
    shopPickupTimeIntervals = [];
    warehouseNode = 0;
    isSolution;
    clusterCenter;
    globalshortestTrip = [];

    var main = (function() {

        findDupliacates();
        clusterCenter = getClusterCenter();
        
         var circleStartingPoints = newOnCircleStartingPoints();
    
         for(var i=0; i<circleStartingPoints.length; i++) {
             coord.splice(1, 0, circleStartingPoints[i]);
         }

        nNodes = coord.length;
        inititlizeCostMatrix();
        var initialDriversNodes = [];
        var driversNodes = [];

        globalshortestTrip = shortestTrip; //keeps the shortest distances matrix for the final routing  
        // currentSolution = [];
        // mostEfficientSolution = [];
        
        lowestFitness = Number.POSITIVE_INFINITY;

        timeElapsed = [];
        timeElapsed.length = 0;
        var quadrants = [];
        quadrants[0] = [];
        quadrants[1] = [];
        quadrants[2] = [];
        quadrants[3] = [];
        quadrants[4] = [];



        for( var i=0; i<coord.length; i++) {
            if (i > 5 ) { //warehouse node will be visited by all drivers and drivers home points are specific to each driver
                quadrantIndex = findQuadrantOfCoordinate(coord[i]);
                quadrants[quadrantIndex].push(i);
            }
        }



        // add homePoints
        for( var i=0; i < nDrivers; i++ ) {
            initialDriversNodes[i] = [];
            var temp = [];
            temp.push(i+1);
            initialDriversNodes[i]= temp;
        }

        //add route
        for( var i=0; i < nDrivers; i++ ) {
            var temp = [];
            temp = initialDriversNodes[i];
            quadrants[i].push(0); //add warehouse
            for( var j=0; j<quadrants[i].length; j++) {
                temp.push(quadrants[i][j]);
            }
            initialDriversNodes[i]= temp;
        }

        //globalshortestTrip
        driversNodes = createOptimalRoute.mainOptimal(initialDriversNodes);
        fitness = optimisedTSP.fitness(driversNodes);
        var distance = optimisedTSP.getOverallDroveDistance(driversNodes);

        console.log(fitness);

         var driversPaths = [];
         for(var i=0; i< driversNodes.length; i++) {
             var temp = driversNodes[i];
             var driverPath = [];

             for (var j=0; j<temp.length; j++) {
                  var myLatLng;
                  myLatLng = {lat: coord[temp[j]].latitude, lng: coord[temp[j]].longitude};
                  driverPath.push(myLatLng);
             }

             var driverObj = {};
             driverObj['driver_id'] = i;
             driverObj['driver_path'] = driverPath;
             driversPaths.push(driverObj);
         }

         res.json({ 
            message: driversPaths,
            fitness: fitness,
            distance: distance
         });
    })();
 
});

router.get('/generate-dataset', function(req, res) {

    var numberOfStops = 180;
    var stops = [];

   for (var i = 0; i < numberOfStops; i++) {
        var coordonates = {};

        coordonates = {
            "longitude" : generateRandomLongitutdeInLondon(),
            "latitude" : generateRandomLatitudeInLondon()
        }

        stops.push(coordonates)
   }

    var main = (function() {

         res.json({ 
            stops
         });
    })();

    // Confinments:
    // 51.6700544,-0.4329608,15
    // 51.3272216,0.1264832

    function generateRandomLongitutdeInLondon() {
        var min = -0.4329608;
        var max = 0.1264832;

        longitude = Math.random() * (max - min) + min;

        return longitude;
    }

    function generateRandomLatitudeInLondon() {
        var min = 51.3272216;
        var max = 51.6700544;

        latitude = Math.random() * (max - min) + min;

        return latitude;
    }
 
});



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


