# Payment Service Sanbox Frontera

free api payment gateway services for your app

## About

this api can be used for payment service, if you have a demo for product checkout to payment gateway, this api can be manage api, response and checking your transactions.

### API Specs

-  checkout product and will be sent response your order
-  get transaction
-  notification transaction
-  checking transaction
-  and pay

## Used By

This project is used by:

-  helka septyawan

## Base Url api

```javascript
const base_url = "https://tiny-tie-bee.cyclic.app/";
```

## Create Transaction

```javascript
urlEnpoint = "/order/createTransaction";
```

### POST

```JSON
{
    "transaction_details": {
    "order_id": "226135hnb1wcetv25",
    "gross_amount":21000
    },
    "payment_details": {
            "payment_name": "paypal",
            "payment_number": 9287546545463646
        }
}
```

### response

```JSON
{
    "status": true,
    "data": {
        "order_id": "226135hnb1wcetv25",
        "gross_amount": 21000,
        "transaction_status": "pending",
        "payment_details": {
            "payment_name": "paypal",
            "payment_number": 9287546545463646
        },
        "va_number": "bdf9fe39ft5d7ef",
        "expiryAt": "2023-08-16T10:06:23.596Z",
        "_id": "64db4e1f96ce3c1759c11e22",
        "createdAt": "2023-08-15T10:06:23.597Z",
        "updatedAt": "2023-08-15T10:06:23.597Z",
        "__v": 0
    }
}
```

## GET Transaction

```javascript
urlEnpoint = "/order/:order_id";
```

### response

```JSON
{
    "payment_details": {
        "payment_name": "paypal",
        "payment_number": 9287546545464646
    },
    "_id": "64d8c782e028941f8875cfde",
    "order_id": "oeihrg9834nt4g4g",
    "gross_amount": 20000,
    "transaction_status": "pending",
    "va_number": "c0028ff2fte233f",
    "createdAt": "2023-08-13T12:07:30.110Z",
    "updatedAt": "2023-08-13T12:47:09.966Z",
    "__v": 0
}
```

## va-number

:id => \_id

```javascript
urlEnpoint = "/va-number/:va-number";
```

### request

if expiry time < current date then response showed
else transaction automaticly updated "expire"

```javascript
const body = { gross_amount };
const params = "va-number";
```

### response

```json
{
   "status": true,
   "data": {
      "order_id": "986235hnb9vcrtv25",
      "gross_amount": 21000,
      "transaction_status": "pending",
      "payment_details": {
         "payment_name": "paypal",
         "payment_number": 9287546545464646
      },
      "va_number": "20958101ft589bf",
      "expiryAt": "2023-08-14T14:51:42.225Z",
      "_id": "64d8edfedea33004fd4aab50",
      "createdAt": "2023-08-13T14:51:42.250Z",
      "updatedAt": "2023-08-13T14:51:42.250Z",
      "__v": 0
   }
}
```

## Pay Transaction

:id => \_id

```javascript
urlEnpoint = "/pay/:id";
```

### response

```json
{
   "status": true,
   "message": "successful payment",
    "data": {
        "payment_details": {
        "payment_name": "paypal",
        "payment_number": 9287546545463646
      },
      "_id": "64db4e1f96ce3c1759c11e22",
      "order_id": "226135hnb1wcetv25",
      "gross_amount": 21000,
      "transaction_status": "settlement",
      "va_number": "bdf9fe39ft5d7ef",
      "expiryAt": "2023-08-16T10:06:23.596Z",
      "createdAt": "2023-08-15T10:06:23.597Z",
      "updatedAt": "2023-08-15T10:12:12.217Z",
      "__v": 0
    }
}
```
