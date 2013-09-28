Hacktoolkit Yahoo! GeoPlanet APIs
=================================

Wrappers for the Yahoo! GeoPlanet APIs

## Yahoo! Instructions
These instructions were lifted from Yahoo! GeoPlanet website.

For the latest, be sure to visit <http://developer.yahoo.com/geo/geoplanet/>.

### How Do I Get Started?
1. Get an [Application ID][yahooappid]
2. Read the [online documentation][geoplanet_docs]
3. Fire up a web browser or your favorite scripting language and explore the world

### EXAMPLES
Find the WOEID of a significant landmark:
<http://where.yahooapis.com/v1/places.q('sydney%20opera%20house')?appid=[yourappidhere]>

Resolve a WOEID to a place:
<http://where.yahooapis.com/v1/place/2507854?appid=[yourappidhere]>

Find the WOEID of a specific place:
<http://where.yahooapis.com/v1/places.q('northfield%20mn%20usa')?appid=[yourappidhere]>

Obtain a range of WOEIDs that match a given place, ordered by the most likely:
<http://where.yahooapis.com/v1/places.q('springfield');start=0;count=5?appid=[yourappidhere]>

Find the parent of a given WOEID (and return a detailed record):
<http://where.yahooapis.com/v1/place/638242/parent?select=long&appid=[yourappidhere]>

Return the Placename for a given WOEID in a specific language (where it exists):
<http://where.yahooapis.com/v1/places.q('usa')?lang=fr&appid=[yourappidhere]>

To obtain the representation of a place in JSON format:
<http://where.yahooapis.com/v1/place/2487956?format=json&appid=[yourappidhere]>

To obtain a list of geographies that neighbor a specific WOEID:
<http://where.yahooapis.com/v1/place/12795711/neighbors?appid=[yourappidhere]>

[yahooappid]: http://developer.yahoo.com/wsregapp/
[geoplanet_docs]: http://developer.yahoo.com/geo/geoplanet/guide/
