var obj = JSON.parse($response.body);

obj =  {
 
{
  "request_date": "2022-08-20T01:16:03Z",
  "request_date_ms": 1660958163298,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2022-09-20T01:04:12Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay_iphone_free.pro.yearly",
        "purchase_date": "2022-08-20T01:04:12Z"
      }
    },
    "first_seen": "2022-07-02T19:14:54Z",
    "last_seen": "2022-08-20T01:03:02Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:b9d0b0a1530749db8d21cb9fbc9a4304",
    "original_application_version": "44768",
    "original_purchase_date": "2021-10-04T00:15:10Z",
    "other_purchases": {},
    "subscriptions": {
      "com.algoriddim.djay_iphone_free.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-09-20T01:04:12Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-03-24T10:17:42Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-20T01:04:12Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});