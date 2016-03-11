
Purpose

The purpose of this project is to create a geolocation service for Sewanee - The University of the South using Google Maps API. The application will retrieve the user coordinates and render directions from point A to point B.

At this stage of the project, the user is constrained to only specifying an end point. The user’s current location is always used as the starting point. Our goal is to have two html panels. One of them should allow the user to choose both the origin and the destination and the other should use the user's current location as origin and let the user choose an end point.

Coordinates are preferred to addresses since addresses provide less accurate information about the location of the buildings. Therefore, we are trying to implement reverse geocoding in our application in order to convert geographical coordinates into human-readable addresses.

We are trying to include two travel modes - walking and driving. The walking mode implies that pedestrians will be using it so we are trying to create custom paths defining polyline routes.

Our goal is to send a watchPosition request every 2.5 seconds so the user's location is automatically updated.

The application needs some major code rafactoring. The optimized version could also benefit from some more sophisticated GIS concepts beyond polygons and markers.
