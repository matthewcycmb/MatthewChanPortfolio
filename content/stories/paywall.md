When I publicly launched Konvo on September 1, people started getting stuck on “Loading your plans.” My paywall was waiting for three products, including a lifetime purchase that hadn’t been approved.

My local StoreKit test file included that product. That’s why it worked on my phone, but not for people downloading the app. I fixed it in build 82 by waiting only for the products I was actually selling.
