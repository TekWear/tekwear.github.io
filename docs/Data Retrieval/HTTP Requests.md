---
sidebar_position: 2
---

# HTTP Requests

Requests should be addressed to this base URL:

`https://data.agvoiceglobal.io/form`

## Authentication

Use HTTP Basic Authentication.  You should have received a username and password for access.

## GET

Use HTTP method GET to do any sort of fetch, including filtered gets (queries). A get by ID requires the ID in the path. For example `GET https://data.agvoiceglobal.io/form/12345678` will get the form with ID 12345678.

A GET without an ID is a search whose filters appear as query strings in the URL.  For example,
```
GET https://data.agvoiceglobal.io/form?dateFrom=2021-12-22T16:20:40.789Z
```
searches for forms submitted to the database after the provided date.

### URL Query Parameters
+ dateFrom, dateTo
  
  Date searches use dateFrom and dateTo, each value a string in ISO 8601 extended format, UTC.  The dates are compared against the database creation time of the records rather than the time the record was captured in the field.  Note that `dateFrom` is inclusive (records with 
this time are included), while `dateTo` is exclusive.
