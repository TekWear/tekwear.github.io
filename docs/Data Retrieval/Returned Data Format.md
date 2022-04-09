---
sidebar_position: 3
---

# Format of Returned Data

The API returns data in JSON format.

The GET by ID returns a single JSON object.

Filtered GET returns a JSON array of objects.

## Form Object Format

An example of a returned form:
```
{   
    "_id": "618bb32b0223e00009c1bb1c",
    "startTime": 658238060.788467,
    "endTime": 658238079.126968,
    "cTime": "2021-11-10T11:55:23.360Z",
    "mTime": "2021-11-10T11:55:23.360Z",
    "createdBy": "someone@gmail.com",
    "updatedBy": "someone@gmail.com",
    "formId": "60b673a1a483f467b4c1244d",
    "location": {
        "latitude": "38.865142822265625",
        "longitude": "-94.74552286255881"
    },
    "owner": "AgVoiceDevTeam",
    "projectName": "Project1",
    "subproject": "Test form",
    "subSubproject": "",
    "traits": {
        "Comments": [
            "THIS IS MY COMMENT"
        ],
        "Plot Info": "4",
        "Row": "100",
        "Count": "10"
    }
}
```

Fields in the returned object:

+ _id:

  The database ID of the record.  This value can be used in an ID-based GET.

+ formId, owner:

  AgVoice internal values.  Should these be removed from the data returned to the customer?

+ startTime, endTime:

  Define the time span during which the record was collected by the inspector in the field.
  These values are milliseconds since the Posix epoch (00:00:00 UTC on 1 January 1970).

+ cTime, mTime:

  The time when the record was uploaded to AgVoice, and the time of the last modification to the record.  Currently modification is not supported, so these will be the same time.

+ createdBy, updatedBy:

  The username of the user who created and most-recently updated the record.  Currently modification is not supported, so these will be the same.

+ location:

  If available, the physical location at which the record was created in the field.

+ projectName, subproject, subSubproject:

  Identify the form template used to create the record.

+ traits:

  Customer-specific traits gathered in the field.
