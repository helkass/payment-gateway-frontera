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
const base_url = "https://tiny-tie-bee.cyclic.app/api";
```

## Create Transaction

```javascript
urlEnpoint = "/order/createTransaction";
```

### POST

```JSON
{
    "transaction_details": {
            "order_id": "oeihrg9834nt4g4g",
            "gross_amount": 20000
    },
    "payment_method": "bank_transfer",
    "bank_transfer": {
        "bank_name": "bri"
    }
}
```

### response

```JSON
{
    "status_code": 201,
    "status_message": "Transaction success",
    "order_id": "oeihrg9834nt4g4g",
    "gross_amount": 20000,
    "transaction_status": "pending",
    "payment_details": {
        "payment_name": "paypal",
        "payment_number": 9287546545464646
    },
    "va_number": "183c750eftfb6df",
    "_id": "64d8c671d16242a79e96ba3e"
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
   "message": "successful payment"
}
```
