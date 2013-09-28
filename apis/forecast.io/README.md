Hacktoolkit Forecast.io API
===========================

<https://developer.forecast.io/>


## How To Snippet

Documetnation from v2 Forecast API
<https://developer.forecast.io/docs/v2>

The Forecast API lets you query for most locations on the globe, and returns:

Current conditions
Minute-by-minute forecasts out to 1 hour (where available)
Hour-by-hour forecasts out to 48 hours
Day-by-day forecasts out to 7 days
There are two main API calls. The first returns the current forecast (for the next week):

<https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE>

The second lets query for a specific time, past or future (for many places, 60 years in the past to 10 years in the future):

<https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME>


### Forecast

The response will be a JSON-formatted object with the following properties defined:

* `latitude`: The requested latitude.
* `longitude`: The requested longitude.
* `timezone`: The IANA timezone name for the requested location (e.g. America/New_York). This is the timezone used for text forecast summaries and for determining the exact start time of daily data points. (Developers are advised to rely on local system settings rather than this value if at all possible: users may deliberately set an unusual timezone, and furthermore are likely to know what they actually want better than our timezone database does.)
* `offset`: The current timezone offset in hours from GMT.
* `currently`: A data point (see below) containing the current weather conditions at the requested location.
* `minutely`: A data block (see below) containing the weather conditions minute-by-minute for the next hour. (This property’s name should be read as an adjective—analogously to “hourly” or “daily” and meaning “reckoned by the minute”—rather than as an adverb meaning “meticulously.” Yes, we know that this is not proper English. No, we will not change it. Complaints to this effect will be deleted with utmost prejudice.)
* `hourly`: A data block (see below) containing the weather conditions hour-by-hour for the next two days.
* `daily`: A data block (see below) containing the weather conditions day-by-day for the next week.
* `alerts`: An array of alert objects (see below), which, if present, contains any severe weather alerts, issued by a governmental weather authority, pertinent to the requested location.
* `flags`: An object containing miscellaneous metadata concerning this request. (See flags object, below.)
