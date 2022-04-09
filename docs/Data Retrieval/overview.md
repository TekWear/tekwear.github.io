---
sidebar_position: 1
---

# Data Retrieval Overview

This is an HTTP API for “business to busines” (B2B) data retrieval.  Each request provides a date range for the desired records.  We will compare the date range to the date and time on which the record was entered to our database, rather than the time when the record was collected in the field.  In response to a request, we return a list of records within that range, in JSON format.