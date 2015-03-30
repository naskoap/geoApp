var fulford = new google.maps.LatLng(35.20479,-85.92166);
var walsh = new google.maps.LatLng(35.20479,-85.91960);
var mcclurg = new google.maps.LatLng(35.20321,-85.92009);
var allsaints = new google.maps.LatLng(35.20397,-85.92011);
var bookstore = new google.maps.LatLng(35.20281, -85.92086);
var stirlings = new google.maps.LatLng(35.20528,-85.91656);
var sut = new google.maps.LatLng(35.20402, -85.92155);
var gamma = new google.maps.LatLng(35.20622,-85.91526);


var locationArray = [fulford,mcclurg,allsaints,bookstore,stirlings,sut,gamma];
var locationNameArray = ['Fulford','McClurg','All Saints Chapel',
'Barnes&Noble','Woods','Stirlings','Thompson Union','Gamma'];

var infoArray =  [fulfordStr,mcclurgStr,allsaintsStr,bookStr,stirlingsStr,sutStr,gammaStr];


//Dorm Array section open
var cannon = new google.maps.LatLng(35.20468,-85.92264);
var smith = new google.maps.LatLng(35.20469,-85.92211);
var benedict = new google.maps.LatLng(35.20746,-85.91716);
var stLukes = new google.maps.LatLng(35.20608,-85.91883);
var Hoffman = new google.maps.LatLng(35.20650,-85.91875);
var Humphreys = new google.maps.LatLng(35.20507,-85.91508);
var Hodgeson = new google.maps.LatLng(35.20510,-85.92802);
var Elliot = new google.maps.LatLng(35.20075,-85.92140);
var Tuckaway = new google.maps.LatLng(35.20120,-85.92223);
var Hunter = new google.maps.LatLng(35.20070,-85.92004);
var Quintard = new google.maps.LatLng(35.19760,-85.92516);
var Gorgas = new google.maps.LatLng(35.19715,-85.92599);
var Cleveland = new google.maps.LatLng(35.20247,-85.92175);


var dormMarkerarray = [cannon, smith, benedict, stLukes, Hoffman, Humphreys, Hodgeson, Elliot, Tuckaway, Hunter, Quintard, Gorgas, Cleveland];
//Dorm array section close

//Academic array section open
var woodsM = new google.maps.LatLng(35.20422,-85.91905);
var walshM = new google.maps.LatLng(35.20473,-85.92011);
var carnegieM = new google.maps.LatLng(35.20430,-85.91977);
var gailorM = new google.maps.LatLng(35.20255,-85.91956);
var spencerM = new google.maps.LatLng(35.20411,-85.91849);
var guerryM = new google.maps.LatLng(35.20497,-85.91961);
var snowdenM = new google.maps.LatLng(35.20323,-85.91764);

var academicArray = [woodsM, walshM, carnegieM, gailorM, spencerM, guerryM, snowdenM];
//Academic section close


//Polygon coordinates open
  var elliotCoords =  [new google.maps.LatLng(35.200591, -85.921505),
                       new google.maps.LatLng(35.200651,-85.921477),
                       new google.maps.LatLng(35.200665,-85.921508),
                       new google.maps.LatLng(35.200692,-85.921500),
                       new google.maps.LatLng(35.200733,-85.921611),
                       new google.maps.LatLng(35.200805,-85.921566),
                       new google.maps.LatLng(35.200826,-85.921621),
                       new google.maps.LatLng(35.200861,-85.921599),
                       new google.maps.LatLng(35.200775,-85.921318),
                       new google.maps.LatLng(35.200744,-85.921335),
                       new google.maps.LatLng(35.200651,-85.921043),
                       new google.maps.LatLng(35.200611,-85.921063),
                       new google.maps.LatLng(35.200595,-85.921027),
                       new google.maps.LatLng(35.200552,-85.921045),
                       new google.maps.LatLng(35.200562,-85.921082),
                       new google.maps.LatLng(35.200552,-85.921090),
                       new google.maps.LatLng(35.200634,-85.921353),
                       new google.maps.LatLng(35.200553,-85.921393),
                       new google.maps.LatLng(35.200594,-85.921503)];

  var tuckawayCoords = [new google.maps.LatLng(35.201358,-85.922125),
                        new google.maps.LatLng(35.201369,-85.922282),
                        new google.maps.LatLng(35.201232,-85.922303),
                        new google.maps.LatLng(35.201252,-85.922483),
                        new google.maps.LatLng(35.201138,-85.922509),
                        new google.maps.LatLng(35.201105,-85.922206),
                        new google.maps.LatLng(35.201116,-85.922205),
                        new google.maps.LatLng(35.201112,-85.922133),
                        new google.maps.LatLng(35.201174,-85.922125),
                        new google.maps.LatLng(35.201178,-85.922144)];

  var quintardCoords = [new google.maps.LatLng(35.197490,-85.925491),
                        new google.maps.LatLng(35.197786,-85.924912),
                        new google.maps.LatLng(35.197697,-85.924846),
                        new google.maps.LatLng(35.197412,-85.925423)];

  var gorgasCoords = [new google.maps.LatLng(35.197333,-85.925771),
                      new google.maps.LatLng(35.197241,-85.925699),
                      new google.maps.LatLng(35.197062,-85.926085),
                      new google.maps.LatLng(35.196921,-85.925977),
                      new google.maps.LatLng(35.196916,-85.925984),
                      new google.maps.LatLng(35.196893,-85.925971),
                      new google.maps.LatLng(35.196872,-85.926029),
                      new google.maps.LatLng(35.196888,-85.926045),
                      new google.maps.LatLng(35.196870,-85.926088),
                      new google.maps.LatLng(35.197097,-85.926265),
                      new google.maps.LatLng(35.197147,-85.926160),
                      new google.maps.LatLng(35.197137,-85.926154),
                      new google.maps.LatLng(35.197274,-85.925870),
                      new google.maps.LatLng(35.197282,-85.925877)];
 
  var hunterCoords = [new google.maps.LatLng(35.200476,-85.920133),
                      new google.maps.LatLng(35.200510,-85.920126),
                      new google.maps.LatLng(35.200513,-85.920138),
                      new google.maps.LatLng(35.200554,-85.920131),
                      new google.maps.LatLng(35.200553,-85.920118),
                      new google.maps.LatLng(35.200818,-85.920076),
                      new google.maps.LatLng(35.200822,-85.920091),
                      new google.maps.LatLng(35.200857,-85.920085),
                      new google.maps.LatLng(35.200853,-85.920069),
                      new google.maps.LatLng(35.200888,-85.920057),
                      new google.maps.LatLng(35.200877,-85.919985),
                      new google.maps.LatLng(35.200843,-85.919986),
                      new google.maps.LatLng(35.200835,-85.919936),
                      new google.maps.LatLng(35.200503,-85.919995),
                      new google.maps.LatLng(35.200507,-85.920039),
                      new google.maps.LatLng(35.200468,-85.920046)];

var clevelandCoords = [new google.maps.LatLng(35.202297,-85.921872),
                      new google.maps.LatLng(35.202672,-85.921823),
                      new google.maps.LatLng(35.202661,-85.921669),
                      new google.maps.LatLng(35.202503,-85.921693),
                      new google.maps.LatLng(35.202501,-85.921684),
                      new google.maps.LatLng(35.202437,-85.921685),
                      new google.maps.LatLng(35.202440,-85.921694),
                      new google.maps.LatLng(35.202284,-85.921723)];

var sigmaNuCoords = [new google.maps.LatLng(35.20813,-85.91910),
                     new google.maps.LatLng(35.20810,-85.91908),
					 new google.maps.LatLng(35.20808,-85.91915),
					 new google.maps.LatLng(35.20810,-85.91917),
					 new google.maps.LatLng(35.20807,-85.91924),
					 new google.maps.LatLng(35.20813,-85.91928),
					 new google.maps.LatLng(35.20824,-85.91903),
					 new google.maps.LatLng(35.20818,-85.91899)];
  
var aTOCoords = [new google.maps.LatLng(35.20615,-85.92096),
                 new google.maps.LatLng(35.20614,-85.92091),
				 new google.maps.LatLng(35.20609,-85.92092),
				 new google.maps.LatLng(35.20610,-85.92098),
				 new google.maps.LatLng(35.20606,-85.92099),
				 new google.maps.LatLng(35.20607,-85.92103),
				 new google.maps.LatLng(35.20611,-85.92103),
				 new google.maps.LatLng(35.20612,-85.92106),
				 new google.maps.LatLng(35.20607,-85.92107),
				 new google.maps.LatLng(35.20609,-85.92117),
				 new google.maps.LatLng(35.20619,-85.92114),
				 new google.maps.LatLng(35.20617,-85.92104),
				 new google.maps.LatLng(35.20621,-85.92103),
				 new google.maps.LatLng(35.20620,-85.92095)];
 
var phiSocietyCoords = [new google.maps.LatLng(35.20737,-85.92006),
                        new google.maps.LatLng(35.20726,-85.92011),
						new google.maps.LatLng(35.20729,-85.92020),
						new google.maps.LatLng(35.20739,-85.92016)];

var phiSocietyBarnCoords = [new google.maps.LatLng(35.20740,-85.92024),
                            new google.maps.LatLng(35.20731,-85.92027),
							new google.maps.LatLng(35.20736,-85.92045),
							new google.maps.LatLng(35.20745,-85.92040)];
  
var sigmaAlphaEpsilonCoords = [new google.maps.LatLng(35.20699,-85.91806),
                               new google.maps.LatLng(35.20694,-85.91811),
							   new google.maps.LatLng(35.20692,-85.91808),
							   new google.maps.LatLng(35.20688,-85.91812),
							   new google.maps.LatLng(35.20683,-85.91805),
							   new google.maps.LatLng(35.20688,-85.91800),
							   new google.maps.LatLng(35.20683,-85.91793),
							   new google.maps.LatLng(35.20688,-85.91787),
							   new google.maps.LatLng(35.20692,-85.91791),
							   new google.maps.LatLng(35.20696,-85.91786),
							   new google.maps.LatLng(35.20704,-85.91796),
							   new google.maps.LatLng(35.20698,-85.91803)];
  
var deltaTauDeltCoords = [new google.maps.LatLng(35.20765,-85.91669),
                          new google.maps.LatLng(35.20763,-85.91686),
						  new google.maps.LatLng(35.20747,-85.91684),
						  new google.maps.LatLng(35.20748,-85.91681),
						  new google.maps.LatLng(35.20740,-85.91680),
						  new google.maps.LatLng(35.20742,-85.91666)];

var kappaAlphaCoords = [new google.maps.LatLng(35.20812,-85.91545),
                        new google.maps.LatLng(35.20806,-85.91552),
						new google.maps.LatLng(35.20803,-85.91547),
						new google.maps.LatLng(35.20800,-85.91550),
						new google.maps.LatLng(35.20794,-85.91543),
						new google.maps.LatLng(35.20795,-85.91542),
						new google.maps.LatLng(35.20789,-85.91534),
						new google.maps.LatLng(35.20790,-85.91533),
						new google.maps.LatLng(35.20789,-85.91532),
						new google.maps.LatLng(35.20791,-85.91529),
						new google.maps.LatLng(35.20792,-85.91531),
						new google.maps.LatLng(35.20799,-85.91524),
						new google.maps.LatLng(35.20805,-85.91532),
						new google.maps.LatLng(35.20806,-85.91531),
						new google.maps.LatLng(35.20811,-85.91539),
						new google.maps.LatLng(35.20809,-85.91541)];

var gammaCoords = [new google.maps.LatLng(35.20616,-85.91464), 
                   new google.maps.LatLng(35.20606,-85.91458), 
				   new google.maps.LatLng(35.20609,-85.91449),
				   new google.maps.LatLng(35.20627,-85.91460),
				   new google.maps.LatLng(35.20624,-85.91471),
				   new google.maps.LatLng(35.20615,-85.91467),
				   new google.maps.LatLng(35.20616,-85.91464)];
  
var chiPsiCoords = [new google.maps.LatLng(35.20434,-85.91363),
                    new google.maps.LatLng(35.20435,-85.91362),
			        new google.maps.LatLng(35.20431,-85.91353),
			        new google.maps.LatLng(35.20436,-85.91350),
			        new google.maps.LatLng(35.20438,-85.91355),
			        new google.maps.LatLng(35.20445,-85.91349),
			        new google.maps.LatLng(35.20451,-85.91361),
			        new google.maps.LatLng(35.20444,-85.91367),
			        new google.maps.LatLng(35.20447,-85.91373),
			        new google.maps.LatLng(35.20443,-85.91377),
			        new google.maps.LatLng(35.20438,-85.91367),
			        new google.maps.LatLng(35.20437,-85.91368)];
  
var deltaKappaEpsilonCoords = [new google.maps.LatLng(35.20396,-85.91390),
                               new google.maps.LatLng(35.20394,-85.91403),
							   new google.maps.LatLng(35.20387,-85.91402),
							   new google.maps.LatLng(35.20388,-85.91391),
							   new google.maps.LatLng(35.20385,-85.91383),
							   new google.maps.LatLng(35.20390,-85.91380)];
  
var phiGammaCoords = [new google.maps.LatLng(35.20154,-85.92025),
                      new google.maps.LatLng(35.20157,-85.92022),
					  new google.maps.LatLng(35.20157,-85.92021),
					  new google.maps.LatLng(35.20166,-85.92014),
					  new google.maps.LatLng(35.20173,-85.92029),
					  new google.maps.LatLng(35.20169,-85.92032),
					  new google.maps.LatLng(35.20170,-85.92033),
					  new google.maps.LatLng(35.20165,-85.92037),
					  new google.maps.LatLng(35.20163,-85.92035),
					  new google.maps.LatLng(35.20160,-85.92037)];
  
var betaCoords = [new google.maps.LatLng(35.20179,-85.91912),
                  new google.maps.LatLng(35.20178,-85.91912),
				  new google.maps.LatLng(35.20177,-85.91891),
				  new google.maps.LatLng(35.20182,-85.91891),
				  new google.maps.LatLng(35.20182,-85.91898),
				  new google.maps.LatLng(35.20193,-85.91898),
				  new google.maps.LatLng(35.20193,-85.91911),
				  new google.maps.LatLng(35.20187,-85.91911),
				  new google.maps.LatLng(35.20187,-85.91921),
				  new google.maps.LatLng(35.20180,-85.91921)];
 
var lambdaChiAlphaCoords = [new google.maps.LatLng(35.20140,-85.91816),
                            new google.maps.LatLng(35.20125,-85.91803),
							new google.maps.LatLng(35.20121,-85.91810),
							new google.maps.LatLng(35.20126,-85.91815),
							new google.maps.LatLng(35.20120,-85.91827),
							new google.maps.LatLng(35.20126,-85.91832),
							new google.maps.LatLng(35.20132,-85.91821),
							new google.maps.LatLng(35.20136,-85.91824)];

 var smithCoords = [new google.maps.LatLng(35.20449,-85.92187),
                    new google.maps.LatLng(35.20450,-85.92186),
					new google.maps.LatLng(35.20457,-85.92185),
					new google.maps.LatLng(35.20458,-85.92187),
					new google.maps.LatLng(35.20464,-85.92191),
					new google.maps.LatLng(35.20465,-85.92200),
					new google.maps.LatLng(35.20471,-85.92200),
					new google.maps.LatLng(35.20472,-85.92193),
					new google.maps.LatLng(35.20482,-85.92193),
					new google.maps.LatLng(35.20484,-85.92198),
					new google.maps.LatLng(35.20488,-85.92237),
					new google.maps.LatLng(35.20480,-85.92241),
					new google.maps.LatLng(35.20473,-85.92235),
					new google.maps.LatLng(35.20472,-85.92220),
					new google.maps.LatLng(35.20468,-85.92221),
					new google.maps.LatLng(35.20466,-85.92227),
					new google.maps.LatLng(35.20461,-85.92233),
					new google.maps.LatLng(35.20458,-85.92231),
					new google.maps.LatLng(35.20458,-85.92233),
					new google.maps.LatLng(35.20453,-85.92231),
					new google.maps.LatLng(35.20451,-85.92228)];

var cannonCoords = [new google.maps.LatLng(35.20464,-85.92246),
                    new google.maps.LatLng(35.20471,-85.92246),
					new google.maps.LatLng(35.20471,-85.92249),
					new google.maps.LatLng(35.20477,-85.92250),
					new google.maps.LatLng(35.20477,-85.92256),
					new google.maps.LatLng(35.20473,-85.92257),
					new google.maps.LatLng(35.20473,-85.92271),
					new google.maps.LatLng(35.20477,-85.92270),
					new google.maps.LatLng(35.20477,-85.92277),
					new google.maps.LatLng(35.20473,-85.92277),
					new google.maps.LatLng(35.20473,-85.92278),
					new google.maps.LatLng(35.20469,-85.92279),
					new google.maps.LatLng(35.20469,-85.92282),
					new google.maps.LatLng(35.20464,-85.92282),
					new google.maps.LatLng(35.20464,-85.92268),
					new google.maps.LatLng(35.20465,-85.92268)];
  
var johnsonCoords = [new google.maps.LatLng(35.20649,-85.92076),
                     new google.maps.LatLng(35.20656,-85.92100),
					 new google.maps.LatLng(35.20663,-85.92097),
					 new google.maps.LatLng(35.20661,-85.92093),
					 new google.maps.LatLng(35.20676,-85.92085),
					 new google.maps.LatLng(35.20675,-85.92082),
					 new google.maps.LatLng(35.20679,-85.92079),
					 new google.maps.LatLng(35.20676,-85.92069),
					 new google.maps.LatLng(35.20657,-85.92078),
					 new google.maps.LatLng(35.20655,-85.92073)];
  
var stLukesCoords = [new google.maps.LatLng(35.20630,-85.91890),
                     new google.maps.LatLng(35.20628,-85.91875),
					 new google.maps.LatLng(35.20614,-85.91876),
					 new google.maps.LatLng(35.20612,-85.91847),
					 new google.maps.LatLng(35.20599,-85.91848),
					 new google.maps.LatLng(35.20601,-85.91878),
					 new google.maps.LatLng(35.20587,-85.91879),
					 new google.maps.LatLng(35.20588,-85.91894)];

var hoffmanCoords = [new google.maps.LatLng(35.20656,-85.91887),
                     new google.maps.LatLng(35.20654,-85.91862),
					 new google.maps.LatLng(35.20644,-85.91863),
					 new google.maps.LatLng(35.20645,-85.91888)];
 
 var benedictCoords = [new google.maps.LatLng(35.20768,-85.91733),
                 new google.maps.LatLng(35.20767,-85.91723),
				 new google.maps.LatLng(35.20765,-85.91723),
				 new google.maps.LatLng(35.20763,-85.91703),
				 new google.maps.LatLng(35.20765,-85.91703),
				 new google.maps.LatLng(35.20763,-85.91692),
				 new google.maps.LatLng(35.20726,-85.91698),
				 new google.maps.LatLng(35.20727,-85.91709),
				 new google.maps.LatLng(35.20728,-85.91709),
				 new google.maps.LatLng(35.20731,-85.91728),
				 new google.maps.LatLng(35.20729,-85.91729),
				 new google.maps.LatLng(35.20730,-85.91739),
				 new google.maps.LatLng(35.20732,-85.91740),
				 new google.maps.LatLng(35.20733,-85.91741),
				 new google.maps.LatLng(35.20739,-85.91740),
				 new google.maps.LatLng(35.20738,-85.91739),
				 new google.maps.LatLng(35.20759,-85.91735),
				 new google.maps.LatLng(35.20759,-85.91736),
				 new google.maps.LatLng(35.20765,-85.91735),
				 new google.maps.LatLng(35.20765,-85.91733)];
   
var humphreysCoords = [new google.maps.LatLng(35.20490,-85.91507),
                       new google.maps.LatLng(35.20511,-85.91523),
					   new google.maps.LatLng(35.20516,-85.91515),
					   new google.maps.LatLng(35.20524,-85.91514),
					   new google.maps.LatLng(35.20526,-85.91529),
					   new google.maps.LatLng(35.20529,-85.91528),
					   new google.maps.LatLng(35.20527,-85.91513),
					   new google.maps.LatLng(35.20529,-85.91512),
					   new google.maps.LatLng(35.20526,-85.91493),
					   new google.maps.LatLng(35.20514,-85.91495),
					   new google.maps.LatLng(35.20512,-85.91493),
					   new google.maps.LatLng(35.20508,-85.91463),
					   new google.maps.LatLng(35.20504,-85.91463),
					   new google.maps.LatLng(35.20504,-85.91462),
					   new google.maps.LatLng(35.20495,-85.91463),
					   new google.maps.LatLng(35.20495,-85.91466),
					   new google.maps.LatLng(35.20492,-85.91466),
					   new google.maps.LatLng(35.20496,-85.91496)];
//Polygon coordinates close


var dormsArray = [elliotCoords,tuckawayCoords,quintardCoords,gorgasCoords,
                  hunterCoords,clevelandCoords,cannonCoords,johnsonCoords,
                  stLukesCoords,hoffmanCoords,benedictCoords,humphreysCoords];

var fratArray = [sigmaNuCoords,aTOCoords, phiSocietyCoords,phiSocietyBarnCoords,
                 sigmaAlphaEpsilonCoords,deltaTauDeltCoords,phiGammaCoords,
                 chiPsiCoords,deltaKappaEpsilonCoords,betaCoords,
                 lambdaChiAlphaCoords,gammaCoords,kappaAlphaCoords];
