StockTracker app
===

Watchlist
---
Store some quotes in an object. Expose via a service.
Display the quotes in a list, allow filtering.
Create some filter button/links
Allow add and remove quotes by typing in the ticker code

Refactor to read from json using http and promises

Portfolio
---
Allow user to add list of stocks with details of portfolio
e.g. qty, purchase price, date

Refactor into views with ui routes

Charts
---

Integrate http://dev.markitondemand.com/


[
    {
	"Symbol":"NFLX",
	"Name":"Netflix Inc",
	"Exchange":"NASDAQ"
    }
]

{
    "Name":"Apple Inc",
    "Symbol":"AAPL",
    "LastPrice":524.49,
    "Change":15.6,
    "ChangePercent":3.06549549018453,
    "Timestamp":"Wed Oct 23 13:39:19 UTC-06:00 2013",
    "MSDate": 41570.568969907,
    "MarketCap":476497591530,
    "Volume":397562,
    "ChangeYTD":532.1729,
    "ChangePercentYTD":-1.44368493773359,
    "High":52499,
    "Low":519.175,
    "Open":519.175
}