# fakeuser

Powered by [https://randomuser.me/documentation](https://randomuser.me/documentation), this package created 20 fake users to your meteor users collection.

See how can you do with this package. [http://fakeuser.meteor.com/](http://fakeuser.meteor.com/)

# Usage

```
    meteor add liangcc:fakeuser

```

The package only create users when your meteor users collection is empty.

The json structure would look like the following fashion.
```
{  
   "user":{  
      "gender":"female",
      "name":{  
         "title":"mrs",
         "first":"delores",
         "last":"carter"
      },
      "location":{  
         "street":"5439 cherry st",
         "city":"cupertino",
         "state":"west virginia",
         "zip":"78741"
      },
      "email":"delores.carter62@example.com",
      "username":"orangepanda535",
      "password":"jimbo1",
      "salt":"ndxLab4t",
      "md5":"0571e81fd977e9c6acebd0d87671dfa6",
      "sha1":"b423d091e96ca642471997069de810035a2d2de4",
      "sha256":"0999f9074dd5c2b91c09bc2ceef7aeb5bc03f9576c83aedc314d2f2812e21739",
      "registered":"1297349316",
      "dob":"453104033",
      "phone":"(124)-602-7856",
      "cell":"(510)-784-2137",
      "SSN":"916-35-2231",
      "picture":{  
         "large":"http://api.randomuser.me/portraits/women/61.jpg",
         "medium":"http://api.randomuser.me/portraits/med/women/61.jpg",
         "thumbnail":"http://api.randomuser.me/portraits/thumb/women/61.jpg"
      },
      "version":"0.4.1"
   },
   "seed":"47b19ee542bcf6cf",
   "_id":"iYLznbrLA4HyoSbAp"
}
```